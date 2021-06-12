import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      height: 20,
      minWidth: "auto",
      fontWeight: "bold",
      color: "#222c47",
      padding: "16px ",
      textTransform: "capitalize",
      fontSize: 16,
    },
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: "3px",
      "& > div": {
        maxWidth: 24,
        height: "3px",
        width: "100%",
        backgroundColor: "#222c47",
        // backgroundColor: theme.palette.primary.main,
      },
    },
  })
);
