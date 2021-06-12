import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "0 2px 5px 0 rgb(0 0 0 / 10%)",
      color: " rgba(34,44,71,.6)",
      fontFamily: "poppins,sans-serif",
      fontWeight: 500,
      fontStyle: "normal",
    },
    toolbar: {
      padding: 0,
      height: 90,
    },
    media: {
      height: 48,
      width: 140,
      //   paddingTop: "56.25%", // 16:9
    },
    nav: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      margin: "0 48px",
    },
  })
);
