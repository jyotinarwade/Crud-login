//import logo from './logo.svg';
import './App.css';
//import React, { startTransition } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Home";
 import  Create  from "./component/Create";
import ProtectedRoutes from './services/ProctedRoutes';
import Update from "./component/Create";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ProtectedRoutes */}
          <Route path="/" element={<ProtectedRoutes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create/>} />
          <Route path="/edit/:id" element={<Update/>} />

 </Routes>
      </BrowserRouter> 
     
      {/* <Home/> */}
    </div>
  );

};

export default App;
