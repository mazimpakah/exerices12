import { combineReducers } from "redux";
import { customerReducer } from "./customer/reducers";
import { userReducer } from "./user/reducers";

export const rootReducer = combineReducers({
  customer: customerReducer,
  user: userReducer
});