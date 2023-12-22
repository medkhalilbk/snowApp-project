import { UPDATE_OPERATIONS, UPDATE_OPERATIONS_TIME } from "../types";

const initialState = {
  operationsList: [],
  estimatedHours: 0,
};

const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OPERATIONS:
      return { ...state, operationsList: action.payload };
    case UPDATE_OPERATIONS_TIME:
      return { ...state, estimatedHours: action.payload };
    default:
      return state;
  }
};

export default operationReducer;
