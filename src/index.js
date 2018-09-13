import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './styles/index.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
