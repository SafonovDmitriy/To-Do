import { Box } from "@mui/system";
import React from "react";
import useStyles from "./NotAuthorizedStyle";
export default function NotAuthorized() {
  const classes = useStyles();
  return (
    <Box className={classes.notAutorized}>
      <h1
        children={
          "Sign in using any of the convenient methods to continue using the application."
        }
      />
    </Box>
  );
}
