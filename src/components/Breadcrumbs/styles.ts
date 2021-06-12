import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 370,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);
