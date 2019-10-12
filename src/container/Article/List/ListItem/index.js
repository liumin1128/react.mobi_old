import React, { PureComponent, createRef } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import { formatTime, getScrollTop } from '@/utils/common';
import ShareMenu from '@/components/ShareMenu';
import Avatar from '@/components/Avatar';
import Popper from '@/components/Popper';

import Content from './Content';
import styles from './styles';

@withWidth()
@withStyles(styles)
export default class ListItem extends PureComponent {
  content = createRef()

  constructor(props) {
    super(props);
    this.state = {
      isFixed: false,
      toolbarWidth: 0,
      isExpanded: false,
      showComments: false,
    };
  }

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

  toggleExpanded = (e) => {
    e.preventDefault();
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
      showComments: false,
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

  renderToobar = () => {
    const {
      classes, width,
      commentCount, user = {}, title, html, likeCount, likeStatus, _id,
      onToogleComment, onLike, onDislike,
    } = this.props;

    const { isExpanded, isFixed, toolbarWidth, showComments } = this.state;

    const fixedOptions = isFixed ? {
      className: classes.fixed,
      style: {
        width: toolbarWidth || '100%',
      },
    } : {};

    return (
      <div style={{ height: 64 }}>
        <div {...fixedOptions}>
          <Toolbar className={classes.toolbar}>

            <div className={classes.grow}>

              <Box
              // style={{ width: '100%' }}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >

                <Button
                  onClick={onLike}
                  className={clsx(classes.minWidth0, classes.likeBtn)}
                  size="small"
                  variant={likeStatus === 'like' ? 'contained' : 'outlined'}
                  color="primary"
                >
                  <ArrowDropUpIcon />
                  {likeCount ? ` like ${likeCount || 0}` : 'like'}
                </Button>

                <Box ml={1} />

                <Button
                  onClick={onDislike}
                  className={clsx(classes.minWidth0, classes.dislikeBtn)}
                  size="small"
                  variant={likeStatus === 'unlike' ? 'contained' : 'outlined'}
                  color="primary"
                >
                  <ArrowDropDownIcon />
                </Button>

                <Box ml={1} />

                <Button onClick={onToogleComment} className={classes.btn} size="small">
                  <SpeakerNotesIcon className={classes.btnIcon} />
                  {showComments ? '收起评论' : `${commentCount || 0} 条评论`}
                </Button>

                {isWidthUp('sm', width) && (
                <>
                  <Button className={classes.btn} size="small">
                    <StarIcon className={classes.btnIcon} />
                        收藏
                  </Button>
                  <ShareMenu
                    title={title}
                    nickname={user && user.nickname}
                    description={`${html
                      .replace(/<[^>]+>/g, '')
                      .substring(0, 70)}......`}
                  >
                    <Button className={classes.btn} size="small">
                      <ShareIcon className={classes.btnIcon} />
                          分享
                    </Button>
                  </ShareMenu>
                </>
                )}

                <Box flex={1} />

                {isExpanded && (
                <Button
                  disableRipple
                  disableTouchRipple
                  size="small"
                  color="primary"
                  onClick={this.toggleExpanded}
                >
                  收起
                  <KeyboardArrowUpIcon />
                </Button>
                )}
              </Box>
            </div>

          </Toolbar>
        </div>
      </div>
    );
  }

  renderHeader = () => {
    const {
      user: _user, createdAt, classes,
      onEdit,
    } = this.props;

    let user;
    if (!_user || !_user._id) {
      user = { nickname: '虚空用户' };
    } else {
      user = _user;
    }

    return (
      <CardHeader
        avatar={<Avatar nickname={user.nickname} avatarUrl={user.avatarUrl} />}
        title={<Typography variant="h6" className={classes.nickname}>{user.nickname}</Typography>}
        subheader={formatTime(createdAt, 'MM月DD日')}
        className={classes.header}
        action={(
          <Popper
            content={(
              <Paper elevation={2}>
                <Box p={1} display="flex" flexDirection="column">
                  <Button>关注</Button>
                  <Divider />
                  <Button onClick={onEdit}>编辑</Button>
                  <Button>删除</Button>
                  <Divider />
                  <Button>举报</Button>
                </Box>
              </Paper>
            )}
          >
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Popper>
        )}
      />
    );
  }

  render() {
    const { html, title, _id } = this.props;
    const { isExpanded } = this.state;

    return (
      <div ref={(c) => { this.content = c; }}>

        {this.renderHeader()}

        <Content
          _id={_id}
          title={title}
          html={html}
          isExpanded={isExpanded}
          toggleExpanded={this.toggleExpanded}
        />

        {this.renderToobar()}

      </div>
    );
  }
}
