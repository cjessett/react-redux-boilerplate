import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('root')); // eslint-disable-line

if (module.hot) module.hot.accept();
