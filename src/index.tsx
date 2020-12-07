import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/reset.scss';
import './styles/global.scss';

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
