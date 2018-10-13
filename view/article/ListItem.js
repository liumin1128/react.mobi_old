import React, { PureComponent, Fragment, createRef } from 'react';
// import Waypoint from 'react-waypoint';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Html from '@/components/Html';
import { formatTime, getScrollTop } from '@/utils/common';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  content: {
    cursor: 'pointer',
  },
  fixed: {
    position: 'fixed',
    bottom: 0,
    boxShadow: '0 0px 12px 0px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 1s',
  },
  toolbar: {
    background: '#fff',
    height: 64,
    // border: '1px red solid',
    // minHeight: 64,
    // display: 'flex',
  },
  btn: {
    marginRight: 8,
    minWidth: 0,
  },
});


@withStyles(styles)
export default class ListItem extends PureComponent {
  state = {
    isExpanded: false,
    isFixed: false,
    toolbarLeft: 0,
    toolbarWidth: 0,
  }

  content = createRef()

  componentDidMount() {
    if (this.content) {
      this.setState({
        toolbarLeft: this.content.offsetLeft,
        toolbarWidth: this.content.offsetWidth,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  switch = (e) => {
    e.preventDefault();
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
      isFixed: false,
    }, () => {
      // 如果环境允许，创建自定义事件，触发滚动，以调整所有卡片状态
      if (document.createEvent) {
        // 创建event的对象实例。
        const event = document.createEvent('HTMLEvents');
        // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
        event.initEvent('scroll', true, false);
        // 触发自定义事件oneating
        document.dispatchEvent(event);
      }
    });
    if (!isExpanded) {
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onResize);
    } else {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onResize);
    }
  }

  onScroll = () => {
    const { isExpanded, isFixed } = this.state;
    if (!isExpanded || !this.content) return;

    const st = getScrollTop();
    const sh = document.documentElement.clientHeight;
    const ot = this.content.offsetTop;
    const oh = this.content.offsetHeight;
    // console.log(st, sh, ot, oh);

    if (st + sh < ot + oh && st + sh > ot + 300) {
      if (!isFixed) {
        this.setState({
          isFixed: true,
        });
      }
    } else if (isFixed) {
      this.setState({
        isFixed: false,
      });
    }
  }

  onResize = () => {
    const { isExpanded, isFixed } = this.state;
    if (!isExpanded || !this.content || !isFixed) return;
    // console.log('onResize');
    this.setState({
      toolbarLeft: this.content.offsetLeft,
      toolbarWidth: this.content.offsetWidth,
    });
  }

  render() {
    const { _id, title, user, createdAt, html, classes } = this.props;
    const { isExpanded, isFixed, toolbarLeft, toolbarWidth } = this.state;
    return (
      <div ref={(c) => { this.content = c; }}>

        <Card key={_id} id={_id}>
          <CardHeader
            avatar={(
              <Avatar aria-label="Recipe" className={classes.avatar} src={user.avatarUrl}>
                {user.nickname}
              </Avatar>
          )}
            action={(
              <IconButton>
                <MoreVertIcon />
              </IconButton>
          )}
            title={user.nickname}
            subheader={formatTime(createdAt, 'MM月DD日')}
          />
          {
          isExpanded
            ? (
              <Fragment>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {title}
                  </Typography>
                  <Html html={html} />
                </CardContent>
              </Fragment>
            )
            : (
              <CardContent
                onClick={this.switch}
                className={classes.content}
              >
                <Typography variant="h6" component="h3">
                  {title}
                </Typography>
                <Typography component="div">
                  <p>
                    {`${html
                      .replace(/<[^>]+>/g, '')
                      .substring(0, 150)}......`}
                  </p>
                </Typography>
              </CardContent>
            )
          }

          <div style={{ height: 64 }}>
            <div className={isFixed ? classes.fixed : undefined} style={{ width: toolbarWidth || '100%', left: toolbarLeft }}>
              <Toolbar className={classes.toolbar}>
                <Button className={classes.btn} size="small" variant="outlined" color="primary">
                  <ArrowDropUpIcon />
                  赞同 8765
                </Button>
                <Button className={classes.btn} size="small" variant="outlined" color="primary">
                  <ArrowDropDownIcon />
                </Button>
                <Typography color="inherit" className={classes.grow}>
                  News
                </Typography>
                {isExpanded && (
                  <Button disableRipple disableTouchRipple size="small" color="primary" onClick={this.switch}>
                  收起
                    <KeyboardArrowUpIcon />
                  </Button>
                )}
              </Toolbar>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
