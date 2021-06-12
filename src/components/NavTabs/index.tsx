import React, { useState } from "react";
import PropTypes from "prop-types";
import Router, { useRouter } from "next/router";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useOnMount, useOnUnmount } from "@/hooks/react";
import { useStyles } from "./styles";
import { NavItem } from "@/config/nav";

interface Props {
  navList: NavItem[];
  onChange?: (pathname: string) => void;
}

function SimpleTabs({ navList = [], onChange }: Props) {
  const classes = useStyles();
  const router = useRouter();

  const [value, setValue] = useState(
    isInNavList(router.pathname) ? router.pathname : false
  );

  useOnMount(() => {
    Router.events.on("routeChangeStart", onRouteChange);
  });

  useOnUnmount(() => {
    Router.events.off("routeChangeStart", onRouteChange);
  });

  function onRouteChange(pathname: string) {
    if (isInNavList(pathname)) {
      setValue(pathname);
    }
  }

  function handleChange(_: any, pathname: string) {
    setValue(pathname);
    if (onChange) onChange(pathname);
  }

  function isInNavList(pathname: string) {
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
          key={i.pathname}
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

export default SimpleTabs;
