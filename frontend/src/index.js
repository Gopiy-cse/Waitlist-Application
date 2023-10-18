import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Referal_log from './Referal_log';
import Admintable from './Admintable';
import Adminlogin from './Adminlogin';
import Update from './Update';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/R_log' element={<Referal_log/>}></Route>
      <Route path='/Admintable' element={<Admintable/>}></Route>
      <Route path='/Adminlogin' element={<Adminlogin/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
