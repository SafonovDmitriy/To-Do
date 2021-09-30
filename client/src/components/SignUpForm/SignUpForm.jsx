import { useState } from "react";
import { auth } from "../../firebase";

import formGenerator, { formGeneratorTypes } from "../../utils/formGenerator";
import { isChecked, required, validateEmail } from "../../utils/validation";
import useStyles from "./SignUpFormStyle";
const SignUpForm = () => {
  const classes = useStyles();

  const [form, setValue] = useState([
    {
      name: "login",
      value: "",
      validationFunc: [
        { func: required, message: "Field is Required" },
        { func: validateEmail, message: "Error with Email" },
      ],
      any: { label: "E-mail" },
    },
    {
      name: "password",
      value: "",
      validationFunc: [{ func: required, message: "Field is Required" }],
      any: { label: "Password", type: "password" },
    },
    {
      name: "temps",
      value: false,
      type: formGeneratorTypes.checkbox,
      validationFunc: [{ func: isChecked, message: "It isn't checked" }],
      any: {
        label: `I understand and agree with your Terms Conditions. I have read the Privacy Policy and acknowledge my rights as a user.`,
      },
    },
  ]);
  const [error, setError] = useState({});
  const [formError, setFormError] = useState();
  const onSubmit = (form) => {
    auth
      .createUserWithEmailAndPassword(form.login, form.password)
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
    submitText: "Sign Up",
    className: classes.form,
    formError,
  });

  // return (
  //   <form className={classes.form} onSubmit={onSubmit}>
  //     <TextField {...login} label="E-mail" />
  //     <TextField {...password} label="Password" />
  //     <Checkbox
  //       checked={temps}
  //       onChange={setTemps}
  //       label={`I understand and agree with your Terms Conditions. I have read the Privacy Policy and acknowledge my rights as a user.`}
  //     />
  //     <Button
  //       disabled={!password.value.length || !login.value.length}
  //       type="submit"
  //     >
  //       Sign Up
  //     </Button>
  //   </form>
  // );
};
export default SignUpForm;
