import { UPDATE_OPERATIONS } from "../../types"; 
export function updateOperationsAction(operationsArray) { 
  return {
    type: UPDATE_OPERATIONS,
    payload: operationsArray,
  };
}
