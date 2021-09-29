import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Menu } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "..";
import { isUserSelector } from "../../redux/selectors";
import { Button } from "../UI";
import useStyles from "./HeaderStyles";

const Header = ({ flipIsOpenSideBar, setIsOpenModal }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:990px)");

  const isUser = useSelector(isUserSelector);
  useEffect(() => {
    if (isUser) {
      setIsOpenModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUser]);
  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.container}>
        <Box className={classes.logoBox}>
          {!matches && (
            <IconButton onClick={flipIsOpenSideBar}>
              <Menu />
            </IconButton>
          )}
          <Typography variant="h6" component="div">
            To-Do List
          </Typography>
        </Box>
        {!isUser ? (
          <Button onClick={setIsOpenModal}>Sign In</Button>
        ) : (
          <Avatar />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
