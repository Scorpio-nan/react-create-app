import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component{

    render(){
        const {isLogin, location , login} = this.props;
        
        // 拿到 PrivatePage 上给路由扩展的参数, 点击登录 登录成功之后需要重定向到登录之前的页面;
        const { redirect = '/' } = location.state || {};
        if(isLogin){
            return <Redirect to={ redirect }/>
        }else{
            return( 
                <div>
                    <h3>Login Page</h3>
                    <button onClick={ login }>登录</button>
                </div>
            )
        }
    }
}

export default connect(state => ( {...state} ) )(Login);
