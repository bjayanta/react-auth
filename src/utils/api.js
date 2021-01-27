import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:8000/api/",
    baseURL: "https://api.coderill.com/api/",
    withCredentials: true
})

export default api