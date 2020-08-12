// @ts-nocheck
import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Home from '../pages/Home';

function getComponent() {
    const files = require.context('../pages',true, /\.js$/);
    const pages = [];
    files.keys().forEach( key => {
        let origin = key.replace(/(\.\/|\.js)/g, '');
        let Comp = files(key).default;
        let path = origin.indexOf('/index') !== -1 ? origin.split('/index')[0] : origin;

        pages.push({
            path,
            component:Comp,
            origin
        });
    });
    return pages;
}


const Routes = () => {
    const pages = getComponent();
    console.log("自动注册路由~",pages);
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Home }/>
                {
                    pages.length > 0 && pages.map((item,index) => {
                        return (
                            <Route
                                key = {index}
                                exact
                                path = {`/${item.path}`}
                                component = { item.component }
                            />
                        )
                    })
                }
            </Switch>
        </BrowserRouter>
    )
}

export default  Routes;

