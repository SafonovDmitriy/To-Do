import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import listsReduce from "./reducers/listsReduce";
import userReduce from "./reducers/userReduce";

const reducers = combineReducers({
  user: userReduce,
  lists: listsReduce,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
