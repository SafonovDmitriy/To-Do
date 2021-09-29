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
import { Avatar, SignModalForm } from "..";
import { useToggle } from "../../hooks/useToggle";
import { isUserSelector } from "../../redux/selectors";
import { Button, Modal } from "../UI";
import useStyles from "./HeaderStyles";

const Header = ({ flipIsOpenSideBar }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:990px)");
  const [isOpenModal, setIsOpenModal] = useToggle(false);
  const isUser = useSelector(isUserSelector);
  useEffect(() => {
    if (isUser) {
      setIsOpenModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUser]);
  return (
    <AppBar className={classes.header}>
      <Modal open={isOpenModal} onClose={setIsOpenModal}>
        <SignModalForm />
      </Modal>
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
