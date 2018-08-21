import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
import App from "@/router"
import Fetch from './utils/fetchData'

 
window.Fetch = Fetch;


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


registerServiceWorker();
