import { Box } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { ListsPage, NotAuthorized, ToDoList } from "..";
import { isUserSelector } from "../../redux/selectors";
import { LISTS_PAGE, TRASH_PAGE } from "../../utils/rootPath";
import useStyles from "./RootStyle";
const Root = () => {
  const classes = useStyles();
  const isUser = useSelector(isUserSelector);

  const routes = isUser
    ? [
        { path: LISTS_PAGE, component: ListsPage },
        { path: TRASH_PAGE, component: ListsPage },
        { path: LISTS_PAGE + "/:idList", component: ToDoList },
      ]
    : [{ path: LISTS_PAGE, component: NotAuthorized }];

  return (
    <Box className={clsx(classes.root)}>
      <Switch>
        {routes.map((route) => (
          <Route exact {...route} key={route.path} />
        ))}
        <Redirect to={routes[0].path} />
      </Switch>
    </Box>
  );
};

export default Root;
