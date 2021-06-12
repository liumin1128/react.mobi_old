import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundSize: "cover",
      backgroundImage:
        "url(https://www.dowch.com/wp-content/themes/mml-theme/dist/img/common/common-cta-bg.jpg)",
    },
    button: {
      borderRadius: "100px",
      padding: "0 32px",
      fontWeight: 900,
      height: 54,
      fontSize: 18,
      textTransform: "capitalize",
      background: "#fff",
      color: "#48aaf7",
    },
  })
);
