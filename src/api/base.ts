import axios from 'axios'
const baseURL = import.meta.env.VITE_EP_URL;
const secure = import.meta.env.VITE_EP_SECURE;

export const api = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
        'secure': secure
    }   
})
