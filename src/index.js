import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import stores from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={stores}>
    <App />
  </Provider>

);

