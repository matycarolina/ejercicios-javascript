import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ConstVarLet from './ConstVarLet';
import TemplateString from './TemplateString';
import Desestructuracion from './Desestructuracion';
import Flecha from './Flecha';
//import Callbacks from './Callbacks';
import CallbackHell from './CallbackHell';
import Promesas from './Promesas';
import AsyncAwait from './AsyncAwait';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ConstVarLet />
    <TemplateString />
    <Desestructuracion/>
    <Flecha/>
    {/* <Callbacks/> */}
    <CallbackHell/>
    <Promesas/>
    <AsyncAwait/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
