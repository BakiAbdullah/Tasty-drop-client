
import axios from 'axios';
import { useEffect } from 'react';
const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_LIVE_URL}`
})


const useAxiosSecure = () => {
    useEffect(()=>{
        axiosSecure.interceptors.request.use((req)=>{
            const token = localStorage.getItem('access_token')
            if(token){
                req.headers.Authorization = `Bearer ${token}`
            }
            return req
        })

    },[])
    return axiosSecure 
};

export default useAxiosSecure;