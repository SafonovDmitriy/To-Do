import { makeStyles } from "@material-ui/core";

export default makeStyles({
  header: {
    backgroundColor: "#54ab26",
    height: 64,
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },
  openSideBarBtn: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
  logoBox: {
    "& *": {
      color: "#fff",
    },

    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
