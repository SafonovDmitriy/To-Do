import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./HomePageStyle";
const HomePage = () => {
  const classes = useStyles();

  return <Box className={classes.home}></Box>;
};

export default HomePage;