import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { UserAuthContextProvider } from './context/userAuthContext';

ReactDOM.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
