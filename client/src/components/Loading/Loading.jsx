import { LinearProgress } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      <h1>Loading ...</h1>
      <LinearProgress />
    </Box>
  );
}
