import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Menu } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "..";
import { isAnonymousUserSelector, isUserSelector } from "../../redux/selectors";
import { Button } from "../UI";
import useStyles from "./HeaderStyles";
import { Link } from "react-router-dom";
import { LISTS_PAGE } from "../../utils/rootPath";
const Header = ({ flipIsOpenSideBar, setIsOpenModal }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:990px)");

  const isUser = useSelector(isUserSelector);
  const isAnonymous = useSelector(isAnonymousUserSelector);

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.container}>
        <Box className={classes.logoBox}>
          {!matches && (
            <IconButton onClick={flipIsOpenSideBar}>
              <Menu />
            </IconButton>
          )}
          <Link
            to={LISTS_PAGE}
            children={
              <Typography variant="h6" component="div">
                To-Do List
              </Typography>
            }
          />
        </Box>
        <Box className={classes.controleBtns}>
          {!isUser || isAnonymous ? (
            <Button onClick={() => setIsOpenModal("signIn")}>Sign In</Button>
          ) : null}

          {isUser ? <Avatar /> : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
