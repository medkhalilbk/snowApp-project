import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import gpsReducer from "./reducers/gpsReducer";

const initialState = {};

const rootReducer = combineReducers({
  user: userReducer,
  gps : gpsReducer
})

const store = createStore(rootReducer);

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
