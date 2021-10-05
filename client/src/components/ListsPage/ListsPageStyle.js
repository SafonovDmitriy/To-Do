import { makeStyles } from "@material-ui/core";

export default makeStyles({
  lists: {
    width: "calc(100vw - 260px)",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 40,
    alignItems: "center",
    flexDirection: "column",
  },
  createListModal: {
    padding: 25,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: 500,
  },
  listsBox: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    width: "100%",
    padding: "0 30px",
    boxSizing: "border-box",
    minWidth: 310,
  },

  emptyList: {
    display: "flex",
    width: 415,
    gap: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& img": {
      height: 250,
    },
    "& h2": {
      fontSize: 20,
      lineHeight: "1.2",
      textAlign: "center",
      color: "rgba(0,0,0,.54)",
    },
  },
});
