import { UPDATE_LASTPAGE_OF_OPERATION, UPDATE_OPERATIONS } from "../../types"; 
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