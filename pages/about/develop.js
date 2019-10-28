import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import marked from 'marked';
import Comment from '@/container/Comment';
import Html from '@/components/Html';
import Blogrol from '@/container/Side/Blogrol';
import Project from '@/container/Side/Project';
import Code from '@/container/Side/Code';
import Footer from '@/container/Side/Footer';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

// marked.setOptions({
//   highlight: function(code, lang, callback) {
//     require('pygmentize-bundled') ({ lang: lang, format: 'html' }, code, function (err, result) {
//       callback(err, result.toString());
//     });
//   }
// });

const md2 = `

### 作者的项目开源集合

**react.mobi**：就是本站 

https://github.com/liumin1128/react.mobi

[demo](https://react.mobi/)

**api.react.mobi**：本站后端

https://github.com/liumin1128/api.react.mobi

**ReactMobiFlutter**：本站flutter实现

https://github.com/liumin1128/mobi.react.eight.flutter

**ReactMobiFlutter**：本站RN实现

https://github.com/liumin1128/ReactMobiRN

**iReader**：一个免费电子书阅读器（支持换源）

https://github.com/liumin1128/ireader

[demo](http://ireader.liumin.me)

**redux-effect**：极度精简易用的redux异步中间件

https://github.com/liumin1128/redux-effect

**dynamic-file**：异步js/css资源加载器

https://github.com/liumin1128/dynamic-file

*如有疑问，请在下方给我留言*

`;


function Index() {
  return (
    <div>

      <Card>
        <img src="https://imgs.react.mobi/FqT12MgI3Q_Qs23ti6sJ94mHXvkn" style={{ width: '100%' }} alt="" />
        <Box p={4}>
          <Html html={marked(md2)} />
        </Box>
      </Card>

      <Box mt={2} />

      <Comment _id="/pages/develop" />

    </div>
  );
}

Index.Sider = () => (
  <>
    <Card>
      <Box p={2}>
        <Blogrol />
      </Box>
    </Card>
    <Box mt={2} />
    <Card>
      <Box p={2}>
        <Project />
      </Box>
    </Card>
    <Box mt={2} />
    <Card>
      <Box p={2}>
        <Code />
      </Box>
    </Card>
    <Box mt={2} />
    <Card>
      <Box p={2}>
        <Footer />
      </Box>
    </Card>
  </>
);

export default withApollo(withLayout(Index));
