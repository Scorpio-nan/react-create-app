// @ts-nocheck
import axios from 'axios';
import { getItem } from '../common/util';

const Axios = axios.create({
    baseURL: window.lib.baseUrl
});

Axios.interceptors.request.use(async config=>{
    const token = getItem("token");
    if(token) config.headers.common['Authorization'] = token;

    // 给 get 请求添加上随机数
    if(config.method == "get"){
        config.url = config.url.indexOf('?') > 0 ? config.url + "&rd=" + Math.random() : config.url + "?rd=" + Math.random();
    }

    return config;
})

Axios.interceptors.response.use(async res =>{
    let { data } = res;
    return data;
})

export const Ajax = Axios;
