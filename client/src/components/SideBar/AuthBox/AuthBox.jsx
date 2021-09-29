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
        <Button className={classes.signUp}> Sign up </Button>
        <Button onClick={setIsOpenModal}> Sign In </Button>
      </Box>
    </Box>
  );
}
