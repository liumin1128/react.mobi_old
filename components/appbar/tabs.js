import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

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
    const { router } = this.props;
    const idx = navList.findIndex(i => i.href === router.pathname);
    if (idx !== -1) {
      this.setState({ value: idx });
    }
  }

  // componentDidMount() {
  //   const { router } = this.props;
  //   navList.map(({ href }) => {
  //     router.prefetch(href);
  //   });
  // }


  handleChange = (event, value) => {
    this.setState({ value });
    const { router } = this.props;
    router.push(navList[value].href);
  };

  render() {
    const { classes, router } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{
          indicator: classes.indicator,
        }}
        >
          {navList.map(({ href, label }) => {
          // console.log('router');
          console.log(router);
          // console.log(href);
          router.prefetch(href);
          return (<Tab
            key={href}
            classes={{
            root: classes.tab,
            label: classes.label,
          }}
            label={label}
          />);
        })}
        </Tabs>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SimpleTabs));
