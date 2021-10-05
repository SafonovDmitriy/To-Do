import { makeStyles } from "@material-ui/core";

export default makeStyles({
  toDoItem: {
    border: "1px solid black",
    padding: "20px 30px",

    boxShadow: "1px 1px 1px 0 black",
    borderRadius: 5,
    transition: "all 0.5s",
    background: "#fff",
    "&:hover": {
      boxShadow: "2px 2px 5px 0 black",
    },
  },

  toDoWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    width: "100%",
    padding: "0 30px",
    boxSizing: "border-box",
    minWidth: 310,
  },
  toDoList: {
    width: "calc(100vw - 260px)",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 40,
    alignItems: "center",
    flexDirection: "column",
  },
});
