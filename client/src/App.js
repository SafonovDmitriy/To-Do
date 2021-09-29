import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./AppStyle";
import { Header, Root, SideBar } from "./components";
import { auth } from "./firebase";
import { useToggle } from "./hooks/useToggle";
import { getUserAction } from "./redux/actions/UserActions";
import { userLoadingSelector } from "./redux/selectors";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);
  const userLoading = useSelector(userLoadingSelector);
  useEffect(() => {
    dispatch(getUserAction(user));
  }, [dispatch, user]);

  const [isOpenSideBar, flipIsOpenSideBar] = useToggle(false);

  return userLoading ? (
    <Box className={classes.app}>
      <Header flipIsOpenSideBar={flipIsOpenSideBar} />
      <SideBar
        isOpenSideBar={isOpenSideBar}
        flipIsOpenSideBar={flipIsOpenSideBar}
      />
      <Root />
    </Box>
  ) : null;
}

export default App;
