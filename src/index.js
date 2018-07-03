import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './containers/App';

const app = ( 
	<App />
);

ReactDOM.render(app, document.getElementById('root'));