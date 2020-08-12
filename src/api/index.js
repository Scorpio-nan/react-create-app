// @ts-nocheck
import axios from 'axios';
import { getItem } from '../common/util';


const Axios = axios.create({
    baseURL:window.lib.baseURL
})

Axios.interceptors.request.use(async config=>{
    const token = getItem("token");
    if(token) config.headers.common['Authorization'] = token;
    return config;
})

Axios.interceptors.response.use(async res =>{
    let { data } = res;
    return data;
})

export const Ajax = Axios;
