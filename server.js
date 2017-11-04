const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const port = dev ? 8000 : 3102;

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60, // 1分钟
});

app.prepare()
  .then(() => {
    const server = express();

    // Use the `renderAndCache` utility defined below to serve pages
    server.get('/', (req, res) => {
      console.log('> 捕获一个请求');
      renderAndCache(req, res, '/');
    });

    server.get('/news/detail', (req, res) => {
      const queryParams = { id: req.query.id };
      renderAndCache(req, res, '/news/detail', queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);

      res.send(html);
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}
