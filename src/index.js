import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './fonts/Roboto/Roboto-Thin.ttf';
import './fonts/Roboto/Roboto-Light.ttf';
import './fonts/Roboto/Roboto-Regular.ttf';
import './fonts/Roboto/Roboto-Bold.ttf';
import './fonts/Roboto/Roboto-Black.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
