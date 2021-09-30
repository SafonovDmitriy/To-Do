import { Box } from "@mui/system";
import React from "react";
import { Button } from "../../UI";
import useStyles from "./AuthBoxStyle";
export default function AuthBox({ setIsOpenModal }) {
  const classes = useStyles();

  return (
    <Box className={classes.authBox}>
      <p className={classes.textBox}>
        Add items super fast and deal with shopping like never before
      </p>
      <Box className={classes.btns}>
        <Button
          onClick={() => setIsOpenModal("signUp")}
          className={classes.signUp}
        >
          Sign up
        </Button>
        <Button onClick={() => setIsOpenModal("signIn")}> Sign In </Button>
      </Box>
    </Box>
  );
}
