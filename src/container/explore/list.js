import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@/components/Link';

const styles = {
  root: {
    paddingBottom: 0,
  },
  card: {
    marginBottom: 24,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 8,
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
};

@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const { classes } = this.props;
    const list = [
      {
        title: '站长的blog',
        content: '历史上的今天，数据来自网络',
        cover: '',
        url: 'http://liumin.me',
      },
      {
        title: 'iReader ',
        content: '基于react实现的电子书阅读器，数据来自追书神器',
        cover: '',
        url: 'http://ireader.liumin.me',
      },
      {
        title: '爆笑Gif',
        content: '多玩囧图，git板块，原版网页太卡...本页面使用了瀑布流，懒加载',
        cover: '',
        url: '/bxgif/list',
      },
      {
        title: '妹子图',
        content: '嘿嘿嘿',
        cover: '',
        url: '/meizitu',
      },
      {
        title: '福利图',
        content: '你懂得',
        cover: '',
        url: '/mzitu',
      },
      {
        title: '历史上的今天',
        content: '历史上的今天，数据来自网络',
        cover: '',
        url: '/other/today',
      },
    ];
    return (
      <>
        {
          list.map((i) => (
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                title={i.title}
                style={{ paddingTop: i.cover ? '38%' : 0 }}
              />
              <CardContent className={classes.root}>
                <Typography className={classes.title} variant="headline" component="h2">
                  {i.title}
                </Typography>
                <Typography color="textSecondary">
                  {i.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={i.url}>
                  <Button size="small" color="primary">点击查看</Button>
                </Link>
              </CardActions>
            </Card>
          ))
        }

      </>
    );
  }
}
