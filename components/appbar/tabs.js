import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import Tabs, { Tab } from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { withQuery } from '@/hoc/getQuery';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
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
  { href: '/', label: '首页' },
  { href: '/say', label: '说说' },
  { href: '/article', label: '文章' },
  { href: '/ex', label: '发现' },
];

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  componentWillMount() {
    const { url } = this.props;
    const idx = navList.findIndex(i => i.href === url.pathname);
    if (idx !== -1) {
      this.setState({ value: idx });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
    Router.push(navList[value].href);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Tabs
        value={value}
        onChange={this.handleChange}
        classes={{
          indicator: classes.indicator,
        }}
      >
        {navList.map(({ href, label }) => (
          <Tab
            key={href}
            classes={{
              root: classes.tab,
              label: classes.label,
            }}
            label={label}
          />
        ))}
      </Tabs>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withQuery(withStyles(styles)(SimpleTabs));
