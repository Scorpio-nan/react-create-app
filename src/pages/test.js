import React, { Component } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';


class Test extends Component{

    render(){
        console.log(this.props);
        console.log(window.lib);
        const { userInfo ,dispatch } = this.props;
        return(
            <>
                <div>
                    {
                        userInfo.userState.toString()
                    }
                </div>
               <Button type="primary" onClick={ ()=> { dispatch({type : 'incorment'}) } }>incorement</Button><WhiteSpace /> 
               <Button type="primary" onClick={ ()=> { dispatch({type : 'decorment'}) } }>decorement</Button><WhiteSpace /> 
            </>
        )
    }
}

export default connect(
    state => ( { ...state } )
)(Test);
