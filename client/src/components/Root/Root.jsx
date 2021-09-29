import { Box, useMediaQuery } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ListsPage } from "..";
import { LISTS_PAGE } from "../../utils/rootPath";
import useStyles from "./RootStyle";
import clsx from "clsx";
const Root = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <Box
      className={clsx(
        classes.root,
        matches ? classes.sideBarOpen : classes.sideBarClose
      )}
    >
      <Switch>
        <Route exact path={LISTS_PAGE} component={ListsPage} />
        <Redirect to={LISTS_PAGE} />
      </Switch>
    </Box>
  );
};

export default Root;
