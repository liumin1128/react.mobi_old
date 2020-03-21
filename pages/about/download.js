import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import marked from 'marked'
import Comment from '@/container/Comment'
// import Html from '@/components/Html';
import Blogrol from '@/container/Side/Blogrol'
import Project from '@/container/Side/Project'
import Code from '@/container/Side/Code'
import Footer from '@/container/Side/Footer'
import withApollo from '@/hoc/apollo'
import withLayout from '@/hoc/layout'
// marked.setOptions({
//   highlight: function(code, lang, callback) {
//     require('pygmentize-bundled') ({ lang: lang, format: 'html' }, code, function (err, result) {
//       callback(err, result.toString());
//     });
//   }
// });

const md2 = `

# 本站客户端 beta版 下载

## ios


`

function Index() {
  return (
    <div>
      <Card>
        <CardMedia
          image='https://imgs.react.mobi/FgMG-4XXaEtAGUbfJTOCzztcygNx'
          style={{ height: 0, paddingTop: '40%' }}
          alt=''
        />
        <Box p={2} />

        <Box p={2} display='flex' justifyContent='center'>
          <Box display='flex' justifyContent='center'>
            <Box>
              <img
                style={{ width: 120, height: 120 }}
                src='https://imgs.react.mobi/FlL5SMO_2SIfBkWPWJERNd79GN4D'
                alt=''
              />
              <Typography variant='body2' align='center'>
                ios
              </Typography>
            </Box>
          </Box>
          <Box p={2} />
          <Box display='flex' justifyContent='center'>
            <Box>
              <img
                style={{ width: 120, height: 120 }}
                src='https://imgs.react.mobi/Fn_n037KStlAKqiQPJDfj3cnaW_h'
                alt=''
              />
              <Typography variant='body2' align='center'>
                android
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box p={4}>
          <Typography variant='h6' gutterBottom>
            客户端 beta 1
          </Typography>
          <Typography variant='body2' gutterBottom>
            项目使用flutter编写，依赖少量社区组件，代码已开源；
          </Typography>
          <Typography variant='body2' gutterBottom>
            暂未提交appstore审核，感谢pgyer.com提供的测试平台；
          </Typography>
          <Typography variant='body2' gutterBottom>
            作者第一次尝试flutter，beta版问题较多，可以下方留言反馈。
          </Typography>
          <Typography variant='caption'>
            注1：推荐安装ios版，cupertino风格在android下表现一般。
          </Typography>
          <br />
          <Typography variant='caption'>
            注2：ios版需要参与内测才可以安装，请私信我获取资格。
          </Typography>
        </Box>
        <Box mt={2} />
      </Card>

      <Box mt={2} />

      <Comment _id='/pages/download' />
    </div>
  )
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
        <Footer />
      </Box>
    </Card>
  </>
)

export default withApollo(withLayout(Index))
