import CardMedia from "@material-ui/core/CardMedia";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
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
          <CardMedia
            className={classes.media}
            image="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/common/common-navigation-logo.jpg"
            title="Paella dish"
          />
          <div className={classes.nav}>
            <NavTabs navList={NavList} />
          </div>
          <Button>Contcat</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
