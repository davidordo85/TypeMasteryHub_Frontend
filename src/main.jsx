import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import storage from './utils/storage.js';
import { configureClient } from './api/client.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App isInitiallyLogged={!!accessToken} />
    </Router>
  </React.StrictMode>,
);
