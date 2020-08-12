import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import routes from './routes';
import './App.scss';

function App() {
    return (
        <Provider store={ store }>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        {
                            routes.length && routes.map((item,index)=>{
                                return (
                                    <Route
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
        </Provider>
    );
}

export default App;
