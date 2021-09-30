import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./AppStyle";
import { Header, Root, SideBar, SignModalForm } from "./components";
import { Modal } from "./components/UI";
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
  const [isOpenSignModalForm, setIsOpenSignModalForm] = useToggle(false);
  const [typeSignModal, setTypeSignModalForm] = useState();
  const getTypeSignModal = (type) => {
    setTypeSignModalForm(type);
    setIsOpenSignModalForm();
  };
  return userLoading ? (
    <Box className={classes.app}>
      <Modal open={isOpenSignModalForm} onClose={setIsOpenSignModalForm}>
        <SignModalForm initialTabValue={typeSignModal} />
      </Modal>
      <Header
        flipIsOpenSideBar={flipIsOpenSideBar}
        setIsOpenModal={getTypeSignModal}
      />
      <SideBar
        isOpenSideBar={isOpenSideBar}
        flipIsOpenSideBar={flipIsOpenSideBar}
        setIsOpenModal={getTypeSignModal}
      />
      <Root />
    </Box>
  ) : null;
}

export default App;
