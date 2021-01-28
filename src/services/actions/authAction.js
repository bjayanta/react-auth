import { 
    HTTP_REQUEST_STATE,
    HTTP_REQUEST_SUCCESS,
    HTTP_REQUEST_FAILED } from "../types";
import api from "../../utils/api";

export const login = (credential) => {
    return async (dispatch) => {
        try {
            // loading
            dispatch({type: HTTP_REQUEST_STATE})

            // axios
            let response = await api.post('login', credential)
            console.log(response.data);

            if(response.data.status_code === 200) {
                // data
                let isLoggedIn = true,
                    authToken = response.data.token,
                    user = JSON.stringify({
                        "user": response.data.user.name,
                        "email": response.data.user.email
                    });
                
                // session storage
                sessionStorage.setItem("isLoggedIn", isLoggedIn);
                sessionStorage.setItem("authToken", authToken);
                sessionStorage.setItem("user", user);
                
                // update state
                dispatch({
                    type: HTTP_REQUEST_SUCCESS,
                    payload: user
                })
            }
        } catch (error) {
            dispatch({
                type: HTTP_REQUEST_FAILED,
                payload: error.message
            })
        }
        

    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            // loading
            dispatch({type: HTTP_REQUEST_STATE})

            // config
            const config = {
                headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` }
            };

            // axios
            let response = await api.post('logout', null, config)
            console.log(response.data);
            
            // clear session storage
            sessionStorage.clear();
            
            // update state
            dispatch({
                type: HTTP_REQUEST_SUCCESS,
                payload: ''
            })
        } catch (error) {
            dispatch({
                type: HTTP_REQUEST_FAILED,
                payload: error.message
            })
        }
        

    }
}