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
import Html from '@/components/Html';
import { formatTime, getScrollTop } from '@/utils/common';

const styles = theme => ({
  container: theme.container,
  title: {
    // fontSize: '1.1em',
  },
  content: {
    cursor: 'pointer',
  },
  toolbar: {
    border: '1px red solid',
  },
  fixed: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  switch = () => {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    }, this.onScroll);
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
    console.log(st, sh, ot, oh);

    if (st + sh < ot + oh && st + sh > ot + 100) {
      if (!isFixed) {
        this.setState({
          isFixed: true,
          toolbarLeft: this.content.offsetLeft,
          toolbarWidth: this.content.offsetWidth,
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
    console.log('onResize');
    this.setState({
      toolbarLeft: this.content.offsetLeft,
      toolbarWidth: this.content.offsetWidth,
    });
  }

  // componentDidMount() {
  //   window.addEventListener('resize', this.resize, { passive: true });
  // }


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
                  <Typography variant="h6" className={classes.title} component="h3">
                    {title}
                  </Typography>
                  <Html html={html} />
                </CardContent>
                {isFixed && (
                  <div className={classes.fixed} style={{ width: toolbarWidth, left: toolbarLeft }}>
                    <div className={classes.toolbar}>
                        666
                    </div>
                  </div>
                )}
                <div className={classes.toolbar}>
                  666
                </div>
              </Fragment>
            )
            : (
              <CardContent
                onClick={this.switch}
                className={classes.content}
              >
                <Typography variant="h6" className={classes.title} component="h3">
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
        </Card>
      </div>
    );
  }
}
