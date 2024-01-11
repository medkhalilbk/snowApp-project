import { UPDATE_LASTPAGE_OF_OPERATION, UPDATE_OPERATIONS, UPDATE_OPERATIONS_TIME } from "../types";

const initialState = {
  runDetails : {} 
};

const operationReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case UPDATE_OPERATIONS:   
      return {
        ...state,runDetails: action.payload,
      };
    case UPDATE_OPERATIONS_TIME:
      return { ...state, estimatedHours: action.payload };
    case UPDATE_LASTPAGE_OF_OPERATION:
      return { ...state, lastPage: action.payload };
    default:
      return state;
  }
};

export default operationReducer;
