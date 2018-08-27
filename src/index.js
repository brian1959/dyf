import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.css'
import { unregister } from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
import {HashRouter} from 'react-router-dom';

ReactDOM.render( 
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'));
unregister();

