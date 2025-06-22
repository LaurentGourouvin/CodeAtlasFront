import axios, { type AxiosInstance } from 'axios';

const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true, 
    headers: {
        'Content-Type': 'application/json'
    }
})

export default defaultAxiosInstance;