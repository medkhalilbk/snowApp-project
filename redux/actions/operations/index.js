import { UPDATE_LASTPAGE_OF_OPERATION, UPDATE_OPERATIONS, UPDATE_TASK } from "../../types"; 
export function updateOperationsAction(operationsArray) { 
 
  return {
    type: UPDATE_OPERATIONS,
    payload: operationsArray,
  };
}
export function updateOperationsPagesAction(lastPage) {  
  return {
    type: UPDATE_LASTPAGE_OF_OPERATION,
    payload: lastPage,
  };
}

export function updateTaskInRedux(adresse){
  return{
    type:UPDATE_TASK,
    payload : adresse
  }
}