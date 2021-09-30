import { useState } from "react";
import formGenerator from "../../utils/formGenerator";
import { required, validateEmail } from "../../utils/validation";
import useStyles from "./SignInFormStyle";
const SignInForm = () => {
  const classes = useStyles();

  const [form, setValue] = useState([
    {
      name: "login",
      value: "",
      validationFunc: [
        { func: required, message: "Field is Required" },
        { func: validateEmail, message: "Error with Email" },
      ],
      any: { label: "Username or email" },
    },
    {
      name: "password",
      value: "",
      validationFunc: [{ func: required, message: "Field is Required" }],
      any: { label: "Password", type: "password" },
    },
  ]);
  const [error, setError] = useState({});
  const onSubmit = (form) => {
    console.log(`form`, form);
  };
  return formGenerator({
    onSubmit,
    form,
    setValue,
    error,
    setError,
    submitText: "Sign In",
    className: classes.form,
  });
  // <form className={classes.form} onSubmit={onSubmit}>
  //   <TextField {...login} label="Username or email" />
  //   <TextField {...password} label="Password" />

  //   <Button
  //     disabled={!password.value.length || !login.value.length}
  //     type="submit"
  //   >
  //     Sign In
  //   </Button>
  // </form>
};
export default SignInForm;
