import { SET_LISTS } from "../actionTypes";
export const setListsAction = (list) => {
  return {
    type: SET_LISTS,
    payload: list,
  };
};

export const createNewListAction = (titleNewList) => {
  return async (dispatch) => {
    try {
      // dispatch(setListsAction({ title: titleNewList, itemsInList: [] }));
    } catch (error) {
      //   dispatch(checkErrors(error));
    }
  };
};
