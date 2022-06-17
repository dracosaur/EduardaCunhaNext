import axios from "axios";

const api = axios.create({
    baseURL: "https://api-fono-eduarda-cunha.herokuapp.com/"
});

export default api;