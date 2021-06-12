import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { useStyles } from "./styles";

interface RouteItem {
  title: string;
  pathname: string;
}

interface Props {
  routes: RouteItem[];
  title: string;
  onChange?: (pathname: string) => void;
}

function SimpleTabs({ routes, title }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>

      <Breadcrumbs aria-label="breadcrumb">
        {routes.map((i) => {
          return (
            <Link
              key={i.pathname}
              color="inherit"
              href={i.pathname}
              // onClick={() => {}}
            >
              {i.title}
            </Link>
          );
        })}
        {/* <Link color="inherit" href="/" onClick={() => {}}>
          Material-UI
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={() => {}}
        >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography> */}
      </Breadcrumbs>
    </div>
  );
}

export default SimpleTabs;
