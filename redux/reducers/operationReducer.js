import { UPDATE_LASTPAGE_OF_OPERATION, UPDATE_OPERATIONS, UPDATE_OPERATIONS_TIME, UPDATE_TASK } from "../types";

const initialState = {
  runDetails: {},
  isChanging: false,
  taskID: null
};

const operationReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_OPERATIONS:
      console.log(action.payload.isChanging)
      return {
        ...state, runDetails: action.payload.runDetails, isChanging: action.payload.isChanging
      };
    case UPDATE_OPERATIONS_TIME:
      return { ...state, estimatedHours: action.payload };
    case UPDATE_LASTPAGE_OF_OPERATION:
      return { ...state, lastPage: action.payload };
    case UPDATE_TASK:
      return { ...state, taskID: action.payload }
    default:
      return state;
  }
};

export default operationReducer;
