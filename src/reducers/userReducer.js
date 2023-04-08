import {LOGIN_REQUEST,LOGOUT_REQUEST, SUCCESS, FAILURE} from "../actions/types";

const initialState = {
    isLoggedIn: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action)
{
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state
            }
        case LOGOUT_REQUEST:
            return{
                    ...state
            }
        case SUCCESS:
            return{
                isLoggedIn: action.payload
            }
        case FAILURE:
            return{ isLoggedIn: action.payload}
        default:
            return state;
    }
};