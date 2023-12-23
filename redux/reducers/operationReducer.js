import { UPDATE_LASTPAGE_OF_OPERATION, UPDATE_OPERATIONS, UPDATE_OPERATIONS_TIME } from "../types";

const initialState = {
  operationsList: [],
  estimatedHours: 0,
  lastPage:1,
  currentPage:1
};

const operationReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case UPDATE_OPERATIONS:
      return { ...state, operationsList: action.payload };
    case UPDATE_OPERATIONS_TIME:
      return { ...state, estimatedHours: action.payload };
    case UPDATE_LASTPAGE_OF_OPERATION:
      return { ...state, lastPage: action.payload };
    default:
      return state;
  }
};

export default operationReducer;
