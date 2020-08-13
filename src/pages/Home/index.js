// @ts-nocheck
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { getWebConfig } from '../../store/action';

class Home extends Component{

    componentDidMount(){
        const { webSiteConfig } = this.props;
        console.log(webSiteConfig);
    }

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

export default connect(
    (state) => ({ webSiteConfig: state.webSiteConfig }),
    (dispatch,ownProps) => (
        {
            dispatchWebConfig(data){
                dispatch(getWebConfig(data));
            }
        }
    )
)(Home);