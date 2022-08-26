import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancer);
export default store;