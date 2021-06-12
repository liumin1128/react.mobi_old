import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

interface Props {
  children: React.ReactChildren | React.ElementType | JSX.Element | string;
}

function SimpleTabs({ children, ...other }: Props) {
  const classes = useStyles();

  return (
    <Button className={classes.button} {...other}>
      {children}
    </Button>
  );
}

export default SimpleTabs;
