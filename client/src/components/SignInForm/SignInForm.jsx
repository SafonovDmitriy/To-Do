import { useState } from "react";
import { auth } from "../../firebase";
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
      any: { label: "Email" },
    },
    {
      name: "password",
      value: "",
      validationFunc: [{ func: required, message: "Field is Required" }],
      any: { label: "Password", type: "password" },
    },
  ]);
  const [error, setError] = useState({});
  const [formError, setFormError] = useState();

  const onSubmit = (form) => {
    auth
      .signInWithEmailAndPassword(form.login, form.password)
      .then((user) => user)
      .catch(({ message }) => {
        setFormError(message);
      });
  };
  return formGenerator({
    onSubmit,
    form,
    setValue,
    error,
    setError,
    submitText: "Sign In",
    className: classes.form,
    formError,
  });
};
export default SignInForm;
