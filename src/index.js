import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dome from './Dome-ex';
import Out from './Outer.js';
import Cla from './Class.js';
import Pro from './Props.js';
import UseSt from './UseState.js'
import UseCon from './Usecontext.js'
import UseEff from './UseEffect.js'
import UseRe from './UseRef.js'
import Lifecyl from './Lifecyle.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lifecyl/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




