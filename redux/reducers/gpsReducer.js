import { UPDATE_LOCATION } from "../types";

const initialState = {
  cords:null
};

const gpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return { ...state, cords: action.payload };
    default:
      return state;
  }
};

export default gpsReducer;
