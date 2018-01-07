import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Link from 'next/link';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    boxShadow: '0 10px 28px 0 rgba(137,157,197,.12)',
    marginBottom: 32,
  },
  media: {
    height: 200,
    borderRadius: '3px 3px 0 0',
  },
});

@connect(({ comment = {}, loading }) => ({
  list: comment.list,
  isEnd: comment.isEnd,
  moreLoading: loading['say/more'],
}))
@withStyles(styles)
export default class extends PureComponent {
  componentWillMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', query: { id } });
  }
  render() {
    const { classes } = this.props;
    return (<div>

      <Card className={classes.card}>
        <a
          rel="noopener noreferrer"
          href="http://liumin.me"
          target="_blank"
        >
          <CardMedia
            className={classes.media}
            image="http://img.huarenmatch.com/FuujhVBnZl_H9EFD7IylDgbxSnn9"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              My Blog
            </Typography>
            <Typography component="p">
              我的博客liumin.me
            </Typography>
          </CardContent>
        </a>
      </Card>

      <Card className={classes.card}>
        <a
          rel="noopener noreferrer"
          href="http://ireader.liumin.me"
          target="_blank"
        >
          <CardMedia
            className={classes.media}
            image="http://img.huarenmatch.com/Fi4rWMTplit_TFIbxjlovY3EGsgN"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
            iReader
            </Typography>
            <Typography component="p">
            一款小巧玲珑的电子书阅读器
            </Typography>
          </CardContent>
        </a>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2">
            iFunny
          </Typography>
          <Typography component="p">
            搞笑动图
          </Typography>
        </CardContent>
      </Card>
    </div>);
  }
}
