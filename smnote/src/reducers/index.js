import { combineReducers } from "redux";
import notesReducer from "./detailreducer";
import toggleReducer from "./toggler";

const allReducers = combineReducers({
  toggle: toggleReducer,
  notes: notesReducer,
});

export default allReducers;
