import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter, withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useOnMount, useOnUnmount } from '@/hooks';

const useStyles = makeStyles((theme) => ({
  tab: {
    textTransform: 'none',
    minWidth: 'auto',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 24,
      width: '100%',
      backgroundColor: theme.palette.text.primary,
    },
  },
}));

function SimpleTabs({ navList = [], router, onChange }) {
  const classes = useStyles();

  const [ value, setValue ] = useState(
    isInNavList(router.pathname) ? router.pathname : false,
  );

  useOnMount(() => {
    Router.events.on('routeChangeStart', onRouteChange);
  });

  useOnUnmount(() => {
    Router.events.off('routeChangeStart', onRouteChange);
  });

  function onRouteChange(pathname) {
    if (isInNavList(pathname)) {
      setValue(pathname);
    }
  }

  function handleChange(event, pathname) {
    setValue(pathname);
    // router.push(pathname);
    if (onChange) onChange(pathname);
  }

  function isInNavList(pathname) {
    return navList.findIndex((i) => i.pathname === pathname) !== -1;
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      classes={{
        indicator: classes.indicator,
      }}
      TabIndicatorProps={{ children: <div /> }}
    >
      {navList.map((i) => (
        <Tab
          key={i.key || i.label}
          label={i.label}
          value={i.pathname}
          classes={{ root: classes.tab }}
        />
      ))}
    </Tabs>
  );
}

SimpleTabs.propTypes = {
  navList: PropTypes.array.isRequired,
};

export default withRouter(SimpleTabs);
