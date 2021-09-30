import { Box } from "@mui/system";
import React, { useState } from "react";
import formGenerator from "../../../utils/formGenerator";
import { required, validateEmail } from "../../../utils/validation";
import useStyles from "./ForgotPasswordFormStyle";
export default function ForgotPasswordForm() {
  const classes = useStyles();
  const onSubmit = (e) => {};

  const [form, setValue] = useState([
    {
      name: "forgotPassword",
      value: "",
      validationFunc: [
        { func: required, message: "Field is Required" },
        { func: validateEmail, message: "Error with Email" },
      ],
      any: { label: "E-mail to send password" },
    },
  ]);
  const [error, setError] = useState({});
  return (
    <Box className={classes.forgotWrapper}>
      {formGenerator({
        onSubmit,
        form,
        setValue,
        error,
        setError,
        submitText: "Change password",
        className: classes.form,
      })}
      {/* <form onSubmit={onSubmit} className={classes.form}>
        <TextField {...forgotPassword} label={"E-mail to send password"} />
        <Button type="submit" children={"Change password"} />
      </form> */}
    </Box>
  );
}
// name: String(*),
//     value: String(*),
//     group:Number
//     validationFunc: [{ func: func, message: String,any:{anyPropsForValidation} }],
//     any: { anyProps },
