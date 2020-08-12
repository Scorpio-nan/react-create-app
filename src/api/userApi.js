import { Ajax } from './index';

/**
 * 用户登录
 * @param {*} params 
 */
export async function Login(params){
    return await Ajax.post('/Login',params);
}





