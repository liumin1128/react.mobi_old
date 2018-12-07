import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import CardContent from '@material-ui/core/CardContent';

import Blogrol from '@/container/side/Blogrol';
import Footer from '@/container/side/Footer';
import Edite from '@/container/side/edite';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  tab: {
    height: 64,
    minWidth: 100,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
});

const navList = [
  { href: '/', label: '盗火', icon: HomeIcon },
  // { href: '/say', label: '说说' },
  // { href: '/article', label: '文章' },
  { href: '/ex', label: '知蛛', icon: AppsIcon },
];

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    isOpen: false,
  };

  componentWillMount() {
    const { router } = this.props;
    const idx = navList.findIndex(i => i.href === router.pathname);
    if (idx !== -1) {
      this.setState({ value: idx });
    }
  }

  goto = (value) => {
    this.setState({ value });
    const { router } = this.props;
    router.push(navList[value].href);
  };

  handleDrawerChange = (key, value) => () => {
    this.setState({ [key]: value });
  }

  renderList() {
    return (
      <List style={{ width: 240 }}>
        {navList.map(({ label, href, icon: Icon }, index) => (
          <ListItem button key={href} onClick={() => this.goto(index)}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    );
  }

  render() {
    const { classes, mode = 'large' } = this.props;
    const { value, isOpen } = this.state;

    return (
      <Fragment>

        <Hidden implementation="css" smUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.handleDrawerChange('isOpen', true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden implementation="css" xsDown>
          <Tabs
            value={value}
            onChange={(_, href) => this.goto(href)}
            classes={{
              indicator: classes.indicator,
            }}
          >
            {navList.map(({ href, label }) => (
              <Tab
                key={href}
                classes={mode === 'large' ? {
                  root: classes.tab,
                  label: classes.label,
                } : {

                }}
                label={label}
              />
            ))}
          </Tabs>
        </Hidden>

        <Drawer
          open={isOpen}
          onClose={this.handleDrawerChange('isOpen', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleDrawerChange('isOpen', false)}
            onKeyDown={this.handleDrawerChange('isOpen', false)}
          >
            {this.renderList()}
            <Edite />
            <CardContent style={{ position: 'absolute', bottom: 0, left: 0 }}>
              <Blogrol />
              <Footer />
            </CardContent>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(SimpleTabs));
