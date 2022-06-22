import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />}/>
      <Route path="SignUp" element={<SignUp />}/>
      <Route path="SignIn" element={<SignIn />}/> 
      <Route path="Landing" element={<Landing />}/> 
      <Route path="Landing" element={<Dashboard />}/> 
      <Route path="Products" element={<Products />}/> 

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
