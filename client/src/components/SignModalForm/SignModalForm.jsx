import { Google } from "@mui/icons-material";
import { Box } from "@mui/system";
import clsx from "clsx";
import React from "react";
import { GreenRectangle, SignInForm, SignUpForm } from "..";
import { auth, firebase } from "../../firebase";
import { useTabs } from "../../hooks/useTabs";
import { useToggle } from "../../hooks/useToggle";
import ForgotPasswordForm from "../SignInForm/ForgotPasswordForm/ForgotPasswordForm";
import { Button, Tabs } from "../UI";
import useStyles from "./SignModalFormStyle";
export default function SignModalForm({ initialTabValue }) {
  const classes = useStyles();
  console.log(`initialTabValue`, initialTabValue);
  const tabBtns = [
    { label: "Sign In", value: "signIn" },
    { label: "Sign Up", value: "signUp" },
  ];
  const [forgot, flipForgot] = useToggle(false);
  const tabs = useTabs(initialTabValue || tabBtns[0].value);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const isSignIn = tabs.value === tabBtns[0].value;
  return (
    <Box className={classes.signModalForm}>
      <GreenRectangle>
        <Box className={classes.header}>
          <h3 className={classes.title} children="The Smart Shopping List" />
          <Tabs tabs={tabs} tabBtns={tabBtns} />
        </Box>
      </GreenRectangle>
      <Box
        className={clsx(
          classes.content,
          forgot && isSignIn ? classes.fullScreen : null
        )}
      >
        <Box
          className={clsx(
            classes.box,
            isSignIn && forgot ? classes.fullScreen : classes.partScreen
          )}
        >
          {isSignIn ? (
            forgot ? (
              <ForgotPasswordForm flipForgot={flipForgot} />
            ) : (
              <SignInForm />
            )
          ) : (
            <SignUpForm />
          )}
        </Box>
        {isSignIn && forgot ? null : (
          <Box className={clsx(classes.box, classes.partScreen)}>
            <Button
              color="secondary"
              className="sign-in"
              onClick={signInWithGoogle}
              startIcon={<Google />}
              children={
                isSignIn ? "Sign in with Google" : "Sign up with Google"
              }
            />
          </Box>
        )}
      </Box>
      {isSignIn ? (
        <Box
          className={clsx(
            classes.footer,
            forgot ? classes.textRight : classes.textCenter
          )}
        >
          <Button
            children={forgot ? "Back" : "FORGOT PASSWORD?"}
            className={classes.forgotBtn}
            onClick={flipForgot}
          />
        </Box>
      ) : null}
    </Box>
  );
}
