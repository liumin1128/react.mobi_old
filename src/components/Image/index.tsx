import React from "react";
import { useStyles } from "./styles";

interface Props {
  src: string;
  style?: object;
}

function SimpleTabs({ src, style }: Props) {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: "url(" + src + ")", ...style }}
    >
      {/* {src} */}
    </div>
  );
}

export default SimpleTabs;
