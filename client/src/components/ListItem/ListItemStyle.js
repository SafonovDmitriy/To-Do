import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export default makeStyles({
  listItem: {
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
  listItemBody: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lengthItems: {
    color: green[500],
  },
});
