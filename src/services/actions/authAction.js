import { 
    HTTP_STATUS,
    HTTP_SUCCESS,
    HTTP_FAILED
 } from "../types";
import API from "../../utils/api";

export const login = (credential) => {
    return async (dispatch) => {
        try {
            // loading
            dispatch({type: HTTP_STATUS})

            // axios
            let response = await API.post('login', credential)
            console.log(response.data);

            // get response data
            let token = response.data.token,
                isLogged = true,
                username = response.data.user.name,
                email = response.data.user.email;
            
            // create session
            sessionStorage.setItem("token", token)
            sessionStorage.setItem("isLogged", isLogged)
            sessionStorage.setItem("username", username)
            sessionStorage.setItem("email", email)

            // payload
            dispatch({
                type: HTTP_SUCCESS,
                token: token,
                isLogged: isLogged,
                username: username,
                email: email,
                message: ''
            })
        } catch (error) {
            dispatch({
                type: HTTP_FAILED,
                payload: error.message
            })
        }
    }
}

// logout
export const logout = () => {
    return async (dispatch) => {
        try {
            // loading
            dispatch({type: HTTP_STATUS})

            // config
            let config = {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem('token')
                }
            }

            // axios
            let response = await API.post('logout', null, config)
            console.log(response.data);

            // clear session
            sessionStorage.clear()

            // payload
            dispatch({
                type: HTTP_SUCCESS,
                token: '',
                isLogged: false,
                username: '',
                email: '',
                message: 'You are logged out.'
            })
        } catch (error) {
            dispatch({
                type: HTTP_FAILED,
                payload: error.message
            })
        }
    }
}

export const registration = (credential) => {
    return async (dispatch) => {
        try {
            // loading
            dispatch({type: HTTP_STATUS})

            // axios
            let response = await API.post('register', credential)
            console.log(response.data);

            // payload
            dispatch({
                type: HTTP_SUCCESS,
                token: '',
                isLogged: false,
                username: '',
                email: '',
                message: 'Your registration successfully done.'
            })
        } catch (error) {
            dispatch({
                type: HTTP_FAILED,
                payload: error.message
            })
        }
    }
}