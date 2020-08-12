import React from 'react';

export default function asyncComponent(importComponent){
    class AsyncComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                component:null
            }
        }
        
        componentDidMount(){
            importComponent().then(mod =>{
                this.setState({
                    component: mod.default ? mod.default : mod
                })
            })
        }

        render(){
            const Cmp = this.state.component;
            return Cmp ? <Cmp {...this.props}/> : null;
        }
    }
    return AsyncComponent;
}

