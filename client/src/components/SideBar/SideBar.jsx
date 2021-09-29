import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import { GradingSharp, Delete, Settings, Help } from "@mui/icons-material";

import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthBox } from "..";
import { isUserSelector } from "../../redux/selectors";
import {
  HELP_PAGE,
  LISTS_PAGE,
  SETTINGS_PAGE,
  TRASH_PAGE,
} from "../../utils/rootPath";
import useStyles from "./SideBarStyle";
const SideBar = ({ isOpenSideBar, flipIsOpenSideBar, setIsOpenModal }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:990px)");
  const isUser = useSelector(isUserSelector);
  const menu = [
    { title: "Shopping lists", href: LISTS_PAGE, icon: <GradingSharp /> },
    { title: "Trash", href: TRASH_PAGE, icon: <Delete /> },
    {},
    { title: "Settings", href: SETTINGS_PAGE, icon: <Settings /> },
    { title: "Help", href: HELP_PAGE, icon: <Help /> },
  ];
  return (
    <Drawer
      anchor="left"
      open={isOpenSideBar}
      onClose={flipIsOpenSideBar}
      className={clsx(classes.sidebar, matches && classes.desktop)}
      variant={matches ? "permanent" : "temporary"}
    >
      <List subheader={!isUser && <AuthBox setIsOpenModal={setIsOpenModal} />}>
        {menu.map((menuItem, idx) =>
          Object.keys(menuItem).length ? (
            <Link to={menuItem.href} key={idx}>
              <ListItem button className={classes.listItem}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.title} />
              </ListItem>
            </Link>
          ) : (
            <Divider key={idx} />
          )
        )}
      </List>
    </Drawer>
  );
};

export default SideBar;
