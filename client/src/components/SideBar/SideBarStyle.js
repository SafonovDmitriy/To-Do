import { makeStyles } from "@material-ui/core";

export default makeStyles({
  sidebar: {
    display: "flex",

    backgroundColor: "#7b757a52",
    "& .MuiDrawer-paper": {
      width: 260,
    },
  },
  desktop: {
    "& .MuiDrawer-paper": {
      top: 64,
    },
  },

  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },

  listItem: {
    "& *": {
      color: "#313030de",
    },
  },
});
