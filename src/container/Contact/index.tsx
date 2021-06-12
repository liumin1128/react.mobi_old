import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Image from "@/components/Image";
import { useStyles } from "./styles";

function SimpleTabs() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      color="#fff"
      className={classes.root}
      pt={10}
      pb={10}
      borderRadius={10}
    >
      <Typography variant="h2" color="inherit">
        Get More Than Just Trendy Products!
      </Typography>
      <Box p={1}></Box>
      <Typography variant="body1" color="inherit">
        Dowch's services make your B2C business no more hassle.
      </Typography>
      <Box p={2}></Box>

      <Button variant="contained" className={classes.button}>
        Contact Us Now!
      </Button>
    </Box>
  );
}

export default SimpleTabs;
