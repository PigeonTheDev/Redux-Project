import { combineReducers } from "redux";
import { User } from "../../userModal";
import userReducer from "./userReducer";

export type GlobalState = {
  users: User[];
};

const rootReducer = combineReducers<GlobalState>({
  users: userReducer,
});

export default rootReducer;
