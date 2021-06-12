import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: "#fff",
      borderRadius: "100px",
      padding: "0 32px",
      fontWeight: 500,
      height: 48,
      fontSize: 16,
      backgroundImage: "linear-gradient(0deg,#248dff 0%,#79d3ed 100%)",
      textTransform: "capitalize",
    },
  })
);
