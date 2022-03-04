import { createStore, combineReducers, applyMiddleware} from "redux";
import counter_reducer from "./reducers/counter_reducer";
import thunk from 'redux-thunk';
const store = createStore(
  counter_reducer
, applyMiddleware(thunk));
export {store};