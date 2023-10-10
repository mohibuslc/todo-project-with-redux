
import {applyMiddleware, createStore} from 'redux' ; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMil from "redux-thunk"
import rootReducer from './rootReducer';


const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunkMil))); 

export default store ; 
