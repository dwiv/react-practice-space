import React  from 'react';
import ReactDOM from 'react-dom';

import 'leaflet/dist/leaflet.css';
import App from './App';
import styles from './App.module.css'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <div className={styles.router}>
  <BrowserRouter>
    <App />
  </BrowserRouter></div>
), document.getElementById('root'));