import { SET_LOADING_USER, SET_USER } from "../actionTypes";
export const setUserAction = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
export const setLoadingAction = (flag) => {
  return {
    type: SET_LOADING_USER,
    payload: { loading: flag },
  };
};

export const getUserAction = (user) => {
  return async (dispatch) => {
    try {
      if (user) {
        const _user = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
        };
        dispatch(setUserAction(_user));
      }
    } catch (error) {
      //   dispatch(checkErrors(error));
    } finally {
      dispatch(setLoadingAction(true));
    }
  };
};
