import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loginpage from './Components/Loginpage';
import Header from './Components/Header';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Loginpage/>
  </React.StrictMode>
);


