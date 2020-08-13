import { getWebSiteConfig } from '../api/userApi';
import * as Types from './types';

export const getWebConfig = (data) => {
    /**
     * data 为页面如果需要提供参数过来就放在data里面, 如: dispatch("result");
     */
    return async (dispatch,getState)=>{
        const res = await getWebSiteConfig();
        dispatch({type:Types.WEBSITECONFIG,data:res});
    }
}

