import CardMedia from "@material-ui/core/CardMedia";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import { useStyles } from "./styles";
import NavTabs from "@/components/NavTabs";
import Button from "@/components/Button";
import NavList from "@/config/nav";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <img
            width={140}
            height={48}
            src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/common/common-footer-logo.jpg"
            alt=""
          />
          <div className={classes.nav}>
            <Hidden smDown>
              <NavTabs navList={NavList} />
            </Hidden>
          </div>
          <Button>Contcat</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
