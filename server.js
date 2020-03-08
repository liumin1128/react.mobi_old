const express = require("express");
const next = require("next");
const LRUCache = require("lru-cache");
const { minify } = require("html-minifier");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const port = dev ? 8000 : 3102;

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 3 // 1分钟
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  const { path } = req.route;
  switch (path) {
    case "/":
      return path;
    // case '/news/detail': {
    //   const { id } = req.query;
    //   if (id) {
    //     return `${path}?id=${id}`;
    //   } else {
    //     return req.url;
    //   }
    // }
    default:
      return req.url;
  }
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`命中存缓: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html =>
      minify(html, {
        // 引号
        removeAttributeQuotes: true,
        // 注释
        removeComments: true,
        // 空格
        collapseWhitespace: true,
        // 压缩html里的css
        minifyCSS: true,
        // 压缩html里的js
        minifyJS: true
      })
    )
    .then(html => {
      if (html.indexOf("ERROR_0120_ERROR") === -1) {
        console.log(`新建存缓: ${key}`);
        ssrCache.set(key, html);
      } else {
        console.log("发现错误！！！！！！！！！！");
        // const shpath = '/root/react.mobi/auto_build.sh';
        // console.log(`将运行自启动脚本：${shpath}`);
        ssrCache.reset();
        // RunCmd('sh', [shpath], (result) => {
        //   console.log(result);
        // });
      }
      res.send(html);
      // Let's cache this page
      // ssrCache.set(key, html);
      // res.send(html);
    })
    .catch(err => {
      ssrCache.reset();
      app.renderError(err, req, res, pagePath, queryParams);
      console.log("server.js err");
      console.log(err);
    });
}

// function RunCmd(cmd, args, cb) {
//   const spawn = require('child_process').spawn;
//   const child = spawn(cmd, args);
//   let result = '';
//   child.stdout.on('data', (data) => {
//     result += data.toString();
//   });
//   child.stdout.on('end', () => {
//     cb(result);
//   });
//   child.stderr.on('data', (data) => {
//     console.log(`Error: \n${data}`);
//   });
//   child.on('exit', (code, signal) => {
//     console.log(`Exit: ${code}`);
//   });
// }

app
  .prepare()
  .then(() => {
    const server = express();

    // Use the `renderAndCache` utility defined below to serve pages
    [
      // '/',
      // '/dynamic',
      // '/dynamic/detail',
      "/article",
      "/article/detail",
      "/bxgif",
      "/bxgif/detail",
      "/mzitu",
      "/mzitu/detail",
      "/news",
      "/news/detail",
      "/meizitu",
      "/meizitu/detail"
    ].map(i => {
      return server.get(i, (req, res) => {
        renderAndCache(req, res, i, req.query);
      });
    });

    server.use(express.static("public"));

    server.get("/user/setting/:path?", (req, res, next) => {
      const { path = "" } = req.params;
      app.render(req, res, "/user/setting", { path: `/${path}` });
    });

    server.get("/user/notification/:type?", (req, res, next) => {
      const { type = "all" } = req.params;
      app.render(req, res, "/user/notification", { type });
    });

    server.get("/user/profile/:path?/:user?", (req, res, next) => {
      const { path = "dynamic", user } = req.params;
      app.render(req, res, "/user/profile", { path, user });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(err => {
    ssrCache.reset();
    console.log("server.js err");
    console.log(err);
  });
