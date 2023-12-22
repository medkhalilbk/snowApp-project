import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import gpsReducer from "./reducers/gpsReducer";
import operationReducer from "./reducers/operationReducer";
const initialState = {};

const rootReducer = combineReducers({
  user: userReducer,
  gps: gpsReducer ,
  operations : operationReducer , 
})

export const store = createStore(rootReducer);

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
