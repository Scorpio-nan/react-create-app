import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import RouterAuoth from './components/RouterAuoth';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

import { getWebConfig } from './store/action';

import './App.scss';

function App() {

    /**
     * 所有页面需要先读取的接口都放在这里
     */
    React.useEffect(()=>{
        store.dispatch(getWebConfig());
    },[])

    return (
        <Provider store={ store }>
            <div className="App">
                <Header/>
                    <div className="main"> 
                        <BrowserRouter>
                            <Switch>
                                {
                                    routes.length && routes.map((item,index)=>{
                                        return (
                                            // 登录鉴权, 如果需要鉴权的界面就走下面的逻辑, 不需要就直接 route
                                            !item.authority ? 
                                                <Route
                                                    key = { index }
                                                    exact
                                                    path = { item.path }
                                                    component = { item.component }
                                                />  : 
                                                <RouterAuoth
                                                    key = { index }
                                                    exact
                                                    path = { item.path }
                                                    component = { item.component }
                                                />
                                        )        
                                    })
                                }
                            </Switch>
                        </BrowserRouter>
                    </div>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
