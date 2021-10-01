import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./AppStyle";
import { Header, Loading, Root, SideBar, SignModalForm } from "./components";
import { Modal } from "./components/UI";
import { auth } from "./firebase";
import { useToggle } from "./hooks/useToggle";
import { getUserAction } from "./redux/actions/UserActions";
import { isUserSelector, userLoadingSelector } from "./redux/selectors";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [user, loading] = useAuthState(auth);

  const isUser = useSelector(isUserSelector);
  const userLoader = useSelector(userLoadingSelector);
  useEffect(() => {
    if (!loading) {
      dispatch(getUserAction(user));
    }
  }, [dispatch, loading, user]);

  const [isOpenSideBar, flipIsOpenSideBar] = useToggle(false);
  const [isOpenSignModalForm, setIsOpenSignModalForm] = useToggle(false);
  const [typeSignModal, setTypeSignModalForm] = useState();
  const getTypeSignModal = (type) => {
    setTypeSignModalForm(type);
    setIsOpenSignModalForm();
  };

  if (userLoader) {
    return (
      <Box className={classes.app}>
        {!isUser ? (
          <Modal open={isOpenSignModalForm} onClose={setIsOpenSignModalForm}>
            <SignModalForm initialTabValue={typeSignModal} />
          </Modal>
        ) : null}
        <Header
          flipIsOpenSideBar={flipIsOpenSideBar}
          setIsOpenModal={getTypeSignModal}
        />
        <Box display="flex">
          <SideBar
            isOpenSideBar={isOpenSideBar}
            flipIsOpenSideBar={flipIsOpenSideBar}
            setIsOpenModal={getTypeSignModal}
          />
          <Root />
        </Box>
      </Box>
    );
  }

  return <Loading />;
}

export default App;
