import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gdata from './Gdata';

ReactDOM.render(
  <React.StrictMode>
    <Gdata>
      <App />
    </Gdata>
  </React.StrictMode>,
  document.getElementById('root'),
);
