import axios from "axios";

export const checkAuth = () => {
    return localStorage.getItem('token');
}

export const getAuthMethod = async () => {
    return await axios.get(process.env.API_URL+'users').then((res) => res);
}