import todoReducer from "./Todo/reducer";
import { combineReducers } from 'redux'; // Corrected import
import reducer from "./filters/reducer";


const rootReducer = combineReducers({

    todos:todoReducer, 
    filters:reducer
})
export default rootReducer;
