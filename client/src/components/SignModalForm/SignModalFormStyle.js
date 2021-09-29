import { makeStyles } from "@material-ui/core";

export default makeStyles({
  signModalForm: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 400,
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  box: {
    padding: 25,
    display: "flex",
    justifyContent: "center",
    flexBasis: "50%",
  },
});
