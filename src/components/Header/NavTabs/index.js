import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useOnMount, useOnUnmount } from '@/hooks';

import useStyles from './styles';

function NavTabs({ navList = [] }) {
  const classes = useStyles();

  const router = useRouter();

  const [ value, setValue ] = useState(
    isInNavList(router.pathname) ? router.pathname : '/',
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
  }

  function isInNavList(pathname) {
    return navList.findIndex((i) => i.pathname === pathname) !== -1;
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{ children: <div /> }}
      indicatorColor="primary"
      textColor="primary"
      classes={{
        indicator: classes.indicator,
      }}
    >
      {navList.map((i) => (
        <Tab
          key={i.key || i.label}
          label={i.label}
          value={i.pathname}
          classes={{
            root: classes.tab,
            selected: classes.selected,
          }}
        />
      ))}
    </Tabs>
  );
}

NavTabs.propTypes = {
  navList: PropTypes.array.isRequired,
};

export default NavTabs;
