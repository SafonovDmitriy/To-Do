import { Box } from "@mui/system";
import clsx from "clsx";
import React from "react";
import useStyles from "./GreenRectangleStyle";
export default function GreenRectangle({ className = {}, children, ...props }) {
  const classes = useStyles();
  return <Box className={clsx(className, classes.box)}>{children}</Box>;
}
