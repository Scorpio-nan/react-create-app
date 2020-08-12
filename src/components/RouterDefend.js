import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class RouterDefend extends Component{
    render(){
        const {isLogin, path , component} = this.props;
        if(isLogin){
            return <Route path={ path } component = { component }/>
        }else{
            // 在路由的 state 上扩展一个参数, 如果登录成功之后就回到登录之前的页面上去;
            return (
                <Redirect to={{
                    pathname:"/login",
                    state:{
                        redirect: path
                    }
                }}/>
            )
        }
    }
}

export default connect(state => ({ ...state }))(RouterDefend);

