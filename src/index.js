import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import AboutUs from './AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import CakeMaker from './CakeMaker/CakeMaker';
import OrderPage from './OrderPage/OrderPage';
import CakePage from './CakePage/CakePage';
import CakePageOrder from './CakePageOrder/CakePageOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/cakemaker" element={ <CakeMaker/>}/>
        <Route path="/about-us" element={ <AboutUs/>}/>
        <Route path="/order-page" element={ <OrderPage/> }/>
        <Route path="/cake" element={ <CakePage/> }/>
        <Route path="/buy-page" element={ <CakePageOrder/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
