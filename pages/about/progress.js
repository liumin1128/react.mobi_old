import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import marked from 'marked';
import Comment from '@/container/Comment';
// import Html from '@/components/Html';
import Blogrol from '@/container/Side/Blogrol';
import Project from '@/container/Side/Project';
import Code from '@/container/Side/Code';
import Footer from '@/container/Side/Footer';

// marked.setOptions({
//   highlight: function(code, lang, callback) {
//     require('pygmentize-bundled') ({ lang: lang, format: 'html' }, code, function (err, result) {
//       callback(err, result.toString());
//     });
//   }
// });

const md2 = `

# 更新日志&开发计划&进度

## 动态

### 发布动态

✅ 插入图片

✅ 插入话题

插入链接

代码片段

✅视频

发起投票

动态编辑

动态删除


### 用户简易富文本输入框

✅颜文字

✅Emoji

字数统计与限制

### 动态详情

✅基础样式


## 用户


### 用户中心

用户信息

用户关注

✅用户资料编辑

用户第三方信息管理

### 其他

动态页用户信息

连接动态

✅ 开发进度展示

✅ 开源集合


***

以后更新动态会发布到这里，有疑问请留意


`;


function Home() {
  return (
    <div>

      <Card>
        <img src="https://imgs.react.mobi/FpkanCXBRCWL5fMicEoGVgoJ6_TM" style={{ width: '100%' }} alt="" />
        <Box p={4}>
          <div dangerouslySetInnerHTML={{ __html: marked(md2) }} />
        </Box>
      </Card>

      <Box mt={2} />

      <Comment _id="/pages/progress" />

    </div>
  );
}

Home.Sider = () => (
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

export default Home;
