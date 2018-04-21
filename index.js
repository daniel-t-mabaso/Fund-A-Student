import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Institutions from './App';
import Body from './Body';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Institutions />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById('body'));
registerServiceWorker();
