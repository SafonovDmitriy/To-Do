import { TextField } from "@material-ui/core";
import React from "react";
import useInput from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Button, Checkbox } from "../UI";
import useStyles from "./SignInFormStyle";
const SignInForm = () => {
  const classes = useStyles();
  const login = useInput("");
  const password = useInput("");
  const [temps, setTemps] = useToggle(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const _obj = {
      login: login.value,
      password: password.value,
      checked: temps,
    };
    console.log(`_obj`, _obj);
  };
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <TextField {...login} label="Login" />
      <TextField {...password} label="Password" />
      <Checkbox
        checked={temps}
        onChange={setTemps}
        label={`I understand and agree with Listonic.com Terms \n Conditions. I have read the Privacy Policy and acknowledge my rights as a user.`}
      />
      <Button
        disabled={!password.value.length || !login.value.length}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};
export default SignInForm;
