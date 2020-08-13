import { Ajax } from './axios';

/**
 * 用户登录
 * @param {*} params 
 */
export async function Login(params){
    return await Ajax.post('/Login',params);
}

/**
 * 获取网站基础配置
 */
export async function getWebSiteConfig(){
    return await Ajax.get('/api/web/GetAllBasicWebsiteConfiguration');
}

/**
 * 获取优惠活动
 */
export async function getActWebList(){
    return await Ajax.get('/api/Act/GetActWebActivityList');
}

