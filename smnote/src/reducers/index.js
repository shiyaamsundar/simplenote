import { combineReducers } from "redux";
import counterReducer from "./counter";
import notesReducer from "./detailreducer";
import toggleReducer from "./toggler";



const allReducers=combineReducers({
    toggle:toggleReducer,
    counter:counterReducer,
    notes:notesReducer
})

export default allReducers