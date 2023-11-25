import { LOGIN_ACTION, UPDATE_TOKEN } from "../types";

const initialState = {
    informations: {id:1}, 
    tokens:null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_ACTION:
            return { ...state, informations: action.payload }; 
        case UPDATE_TOKEN:
            return {...state,tokens:action.payload}
        default:
            return state;
    }
    
};

export default userReducer;
