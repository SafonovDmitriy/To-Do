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
    height: "100%",
    boxSizing: "border-box",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 400,
    paddingTop: 10,
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  box: {
    padding: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreen: { display: "block" },
  partScreen: { flexBasis: "50%" },
  footer: {
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
  textRight: { justifyContent: "end" },
  textCenter: { justifyContent: "center" },
  forgotBtn: {
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#448aff08",
    },
    "& .MuiButton-label": {
      color: "black",
    },
  },
});
