import { Box } from "@material-ui/core";
import useStyles from "./AppStyle";
import { Header, Root, SideBar } from "./components";

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.app}>
      <Header />
      <SideBar />
      <Root />
    </Box>
  );
}

export default App;
