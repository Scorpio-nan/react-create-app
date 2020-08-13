import { combineReducers } from 'redux';
import states from './state';
import * as types from './types';

export default combineReducers({
    webSiteConfig(state = states.webSiteConfig,action){
        switch(action.type){
            case types.WEBSITECONFIG:
                return action.data;
            default:
                return state;
        }
    }
})


