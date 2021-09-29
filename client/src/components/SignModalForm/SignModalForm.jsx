import { Google } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import { GreenRectangle, SignInForm } from "..";
import { auth, firebase } from "../../firebase";
import { Button } from "../UI";
import useStyles from "./SignModalFormStyle";
export default function SignModalForm() {
  const classes = useStyles();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <Box className={classes.signModalForm}>
      <GreenRectangle>
        <Box className={classes.header}>
          <h3 className={classes.title}>The Smart Shopping List</h3>
        </Box>
      </GreenRectangle>
      <Box className={classes.content}>
        <Box className={classes.box}>
          <SignInForm />
        </Box>
        <Box className={classes.box}>
          <Button
            color="secondary"
            className="sign-in"
            onClick={signInWithGoogle}
            startIcon={<Google />}
          >
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
