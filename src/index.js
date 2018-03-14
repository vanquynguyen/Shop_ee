import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/style.css'
import registerServiceWorker from './registerServiceWorker';
import Root from './router/index';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
