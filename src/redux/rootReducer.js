import { combineReducers } from "redux";
import usersSlice from "./usersSlice.js";

const appReducer = combineReducers({
  users: usersSlice,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
