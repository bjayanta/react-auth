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

            // update state
            dispatch({
                type: HTTP_REQUEST_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: HTTP_REQUEST_FAILED,
                payload: error.message
            })
        }
        

    }
}