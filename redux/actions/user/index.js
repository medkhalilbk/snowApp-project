import { LOGIN_ACTION , UPDATE_TOKEN} from "../../types"

export function updateTokenAction(tokens) {
  return {
    type: UPDATE_TOKEN,
    payload: tokens,
  };
}
 
export function loginAction(userInofmrations) { 
    return {
      type: LOGIN_ACTION,
      payload: userInofmrations,
    };
}