import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="index">
      <footer>
        This project was coded by Renata Monteiro and is
      <a href="https://github.com/Renata-Monteiro/react-weather-app" target="_blank" rel="noreferrer"> open sourced on GitHub </a>
    </footer>
    </div>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
