import { makeStyles } from "@material-ui/core";

export default makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    "& button:disabled": {
      backgroundColor: "grey",
    },
  },
});
