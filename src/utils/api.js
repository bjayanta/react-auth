import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.coderill.com/api/',
    withCredentials: true
})

export default api;