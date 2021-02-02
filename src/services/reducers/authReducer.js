import { 
    HTTP_STATUS,
    HTTP_SUCCESS,
    HTTP_FAILED
 } from "../types";

const initialState = {
    loading: false,
    token: sessionStorage.getItem('token') ?? '',
    isLogged: sessionStorage.getItem('isLogged') ?? false,
    username: sessionStorage.getItem('username') ?? '',
    email: sessionStorage.getItem('email') ?? '',
    message: '',
    error: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case HTTP_STATUS:
            return {
                ...state,
                loading: true
            }

        case HTTP_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.token,
                isLogged: action.isLogged,
                username: action.username,
                email: action.email,
                message: action.message
            }
        
        case HTTP_FAILED:
            return {
                ...state,
                loading: false,
                token: '',
                isLogged: false,
                username: '',
                email: '',
                message: '',
                error: action.payload
            }
    
        default:
            return state
    }
}