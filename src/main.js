import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
import App from "@/router"


ReactDOM.render(
    <App/>,
=======
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import Router from "@/router"


ReactDOM.render(
    <Router/>,
>>>>>>> 07e5dcb8a2640a950eee88325cbadeac2bfd52c3
    document.getElementById('root')
);

registerServiceWorker();
