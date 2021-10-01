import { DATA_CLEAR, SET_LISTS } from "../actionTypes";

const initialStore = {};

const listsReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_LISTS:
      return {
        ...state,
        ...action.payload,
      };

    case DATA_CLEAR:
      return initialStore;
    default:
      return { ...state };
  }
};

export default listsReduce;
