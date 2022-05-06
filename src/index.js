import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomeSlider from './components/HomeSlider';
import About from './components/About';
import Menu from './components/Menu';
import CustomerComment from './components/CustomerComment';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <HomeSlider/>
    <About/>
    <Menu menu1="10 TL" menu2="15 TL"/>
    <CustomerComment/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
