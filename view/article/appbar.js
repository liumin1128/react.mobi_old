import React, { PureComponent } from 'react';
// import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import PhotoIcon from '@material-ui/icons/Photo';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SaveIcon from '@material-ui/icons/Save';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import UploadImage from '../../components/upload/images';
// import Headroom from 'react-headroom';
// import Search from './search';
// import Tabs from './tabs';
// import UserAvatar from './user';

const styles = theme => ({
  root: {
    height: 64,
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
  },
  container: theme.container,
  toolbar: {
    padding: 0,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 0,
    '&>img': {
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40,
    },
  },
  flex: {
    flex: 1,
  },
  logoButton: {
    marginRight: 20,
  },
  nav: {
    fontSize: 16,
    height: 64,
  },
  menuButton: {
    marginRight: 0,
  },
});


@withStyles(styles)
export default class MyAppBar2 extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    const { classes = {}, onSetCover, onSave } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <div className={classes.container}>
            <Toolbar className={classes.toolbar}>
              <Link href="/">
                <IconButton className={classes.logoButton} color="inherit" aria-label="Menu">
                  <Avatar className={classes.logo} src="/static/logo.svg" />
                </IconButton>
              </Link>
              <div className={`${classes.flex}`} />
              <UploadImage onComplete={onSetCover}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <PhotoIcon />
                </IconButton>
              </UploadImage>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <LocalOfferIcon />
              </IconButton>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onSave} >
                <SaveIcon />
              </IconButton>
              {
                //   <Button className={classes.button} variant="raised" size="small">
                //   <SaveIcon className={`${classes.leftIcon} ${classes.iconSmall}`} />
                //   保存
                // </Button>
                // <Button
                //   onClick={() => {
                //     document
                //     .getElementById('createArticleForm')
                //     .dispatchEvent(new Event('submit', { cancelable: true }));
                //   }}
                //   color="inherit"
                // >
                //   <SaveIcon className={`${classes.leftIcon} ${classes.iconSmall}`} />

                // 保存</Button>
              }
            </Toolbar>
          </div>
        </AppBar>
      </div>

    );
  }
}
