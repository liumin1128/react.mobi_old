import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs({ navList = [] }) {
  const classes = useStyles();

  const router = useRouter();
  const [ value, setValue ] = useState(router.pathname);

  function handleChange(event, pathname) {
    setValue(pathname);
    router.push(pathname);
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      {navList.map(i => (
        <Tab
          key={i.key || i.label}
          label={i.label}
          value={i.pathname}
        />
      ))}
    </Tabs>
  );
}

SimpleTabs.propTypes = {
  navList: PropTypes.array.isRequired,
};

export default SimpleTabs;
