import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundSize: "cover",
      width: "100%",
      height: 0,
    },
  })
);
