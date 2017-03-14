// c9.io 용
if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);