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
import {
  isAnonymousUserSelector,
  isUserSelector,
  userLoadingSelector,
} from "./redux/selectors";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [user, loading] = useAuthState(auth);

  const isUser = useSelector(isUserSelector);
  const userLoader = useSelector(userLoadingSelector);
  const isAnonymous = useSelector(isAnonymousUserSelector);
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
        {!isUser || isAnonymous ? (
          <Modal open={isOpenSignModalForm} onClose={setIsOpenSignModalForm}>
            <SignModalForm initialTabValue={typeSignModal} />
          </Modal>
        ) : null}
        <Header
          flipIsOpenSideBar={flipIsOpenSideBar}
          setIsOpenModal={getTypeSignModal}
        />
        <Box className={classes.contentWrapper}>
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
