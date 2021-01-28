import { 
    HTTP_REQUEST_STATE, 
    HTTP_REQUEST_SUCCESS, 
    HTTP_REQUEST_FAILED } from "../types";

const initialState = {
    loading: false,
    isLoggedIn: sessionStorage.getItem('isLoggedIn') ?? false,
    authToken: sessionStorage.getItem('authToken') ?? '',
    user: sessionStorage.getItem('user') ?? '',
    error: '' 
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case HTTP_REQUEST_STATE:
            return {
                ...state,
                loading: true,
            }

        case HTTP_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: sessionStorage.getItem('isLoggedIn'),
                authToken: sessionStorage.getItem('authToken'),
                user: sessionStorage.getItem('user')
            }
        
        case HTTP_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                user: [],
                error: action.payload
            }
    
        default:
            return state
    }
}