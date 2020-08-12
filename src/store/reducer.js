import * as status from './state';
import * as types from './action';

export default {
    userInfo(state = { ...status.userInfoState },action){
        switch(action.type){
            case types.ISLOGIN:
                return {
                    ...status.userInfoState,
                    userState: !state.userState
                }
            default:
                return state;
        }
    },
    webSiteConfig(state = { ...status.webSiteState },action){
        switch(action.type){
            case "incorment":
                console.log(action)
                return {
                    userState:true
                }
            default:
                return state;
        }
    },
    isLogin(state =  status.isLogin, action){
        return state;
    }
}