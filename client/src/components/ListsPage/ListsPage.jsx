import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./ListsPageStyle";
const ListsPage = () => {
  const classes = useStyles();

  return <Box className={classes.home}>home</Box>;
};

export default ListsPage;
