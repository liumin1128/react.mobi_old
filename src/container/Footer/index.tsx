import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";

function SimpleTabs() {
  const classes = useStyles();
  return (
    <Box mt={16}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img
            width={140}
            height={48}
            src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/common/common-footer-logo.jpg"
            alt=""
          />
          <Box p={1}></Box>
          <Box maxWidth={300}>
            <Typography variant="body2">
              5F, Block B, Shapuwei Industrial Zone, Songgang, Bao'an, Shenzhen,
              China.
            </Typography>
          </Box>

          <Box p={1}></Box>

          <Box className={classes.links}>
            <a
              href="https://www.facebook.com/profile.php?id=100018599551530"
              target="_blank"
            >
              <IconButton style={{ color: "#747986" }}>
                <InstagramIcon />
              </IconButton>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100018599551530"
              target="_blank"
            >
              <IconButton style={{ color: "#747986" }}>
                <LinkedInIcon />
              </IconButton>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100018599551530"
              target="_blank"
            >
              <IconButton style={{ color: "#747986" }}>
                <TwitterIcon />
              </IconButton>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100018599551530"
              target="_blank"
            >
              <IconButton style={{ color: "#747986" }}>
                <PinterestIcon />
              </IconButton>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100018599551530"
              target="_blank"
            >
              <IconButton style={{ color: "#747986" }}>
                <FacebookIcon />
              </IconButton>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h4">Sign up for the next niche!</Typography>
          <Box p={2}></Box>
          <Box maxWidth={370}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h4">Contact us</Typography>
          <Box p={2}></Box>

          <Box display="flex" alignItems="center">
            <MailOutlineIcon color="inherit" style={{ color: "#747986" }} />
            <Box p={0.5}></Box>
            <Typography variant="body2">Contact@dowch.com</Typography>
          </Box>

          <Box p={1}></Box>

          <Box display="flex" alignItems="center">
            <PhoneIcon style={{ color: "#747986" }} />
            <Box p={0.5}></Box>
            <Typography variant="body2">+86 14795505065</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box p={4}></Box>
      <Divider />
      <Box p={1}></Box>
      <Typography variant="body2" align="right">
        Copyright© 2019 Shenzhen Dowch Electronics Co. ,Ltd. All Rights
        Reserved.
      </Typography>
      <Box p={1}></Box>
    </Box>
  );
}

export default SimpleTabs;
