import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (window.location.pathname === '/thank_you') {
  root.render(
    <React.StrictMode>
      <h1 style={{marginLeft: "auto", marginRight: "auto", textAlign: "center", marginTop: "20%", fontSize: "300%"}}>Thank you for your interest</h1>
    </React.StrictMode>
  )
}
else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
