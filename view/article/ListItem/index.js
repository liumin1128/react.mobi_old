import React, { PureComponent, Fragment, createRef } from 'react';
// import Waypoint from 'react-waypoint';
import { withRouter } from 'next/router';
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
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import Html from '@/components/Html';
import { formatTime, getScrollTop } from '@/utils/common';
import Menus from '@/components/Menus';
import Link from '@/components/Link';
import Delete from './Delete';
import Snackbar from '@/components/snackbar';

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
    transition: 'box-shadow 1s ',
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
@withRouter
export default class ListItem extends PureComponent {
  state = {
    isExpanded: false,
    isFixed: false,
    toolbarWidth: 0,
  }

  content = createRef()

  componentDidMount() {
    if (this.content) {
      this.setState({
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

    if (st + sh < ot + oh && st + sh > ot + 200) {
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
      toolbarWidth: this.content.offsetWidth,
    });
  }


  render() {
    const { _id, title, user, createdAt, html, classes, router } = this.props;
    const { isExpanded, isFixed, toolbarWidth } = this.state;
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
              <Menus
                options={[
                  {
                    render: () => <Delete id={_id} key="ss" />,
                  },
                  {
                    key: 'edite',
                    label: '编辑',
                    onClick: () => {
                      // console.log('编辑');
                      // Snackbar.success('xxx');
                      router.push(`/article/edite?_id=${_id}`);
                    },
                  },
                ]}
              />
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
            <div className={isFixed ? classes.fixed : undefined} style={{ width: toolbarWidth || '100%' }}>
              <Toolbar className={classes.toolbar}>
                <Button className={classes.btn} size="small" variant="outlined" color="primary">
                  <ArrowDropUpIcon />
                  赞同 8765
                </Button>
                <Button className={classes.btn} size="small" variant="outlined" color="primary">
                  <ArrowDropDownIcon />
                </Button>
                <div className={classes.grow}>
                  <Button className={classes.btn} size="small" style={{ color: '#666', marginRight: 0 }}>
                    <SpeakerNotesIcon style={{ width: 16, marginRight: 3, marginTop: 2 }} />
                    99 条评论
                  </Button>
                  <Button className={classes.btn} size="small" style={{ color: '#666', marginRight: 0 }}>
                    <ShareIcon style={{ width: 13, marginRight: 3 }} />
                    分享
                  </Button>
                  <Button className={classes.btn} size="small" style={{ color: '#666', marginRight: 0 }}>
                    <StarIcon style={{ width: 16, marginRight: 3 }} />
                    收藏
                  </Button>
                </div>

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
