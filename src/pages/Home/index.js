import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

class Home extends Component{
    render(){
        console.log(this.props);
        return(
            <>
                <Button onClick={ ()=>{
                    this.props.history.push('/Login');
                }}>default</Button>
            </>
        )
    }
}

export default connect(state => ( {...state} ) )(Home);