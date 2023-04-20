import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './assets/styles/index.css';
import 'notyf/notyf.min.css';

const IS_WIDTH_768px = window.screen.width <= 768;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default IS_WIDTH_768px;