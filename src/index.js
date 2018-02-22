import React, { Component } from 'react';
// import './styles/App.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {App} from './App.js';
import './styles/index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();