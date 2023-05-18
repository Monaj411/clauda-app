import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component.jsx/home';

import NavBar from './component.jsx/navBar';
import Login from './component.jsx/loginForm';
import { Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>     
      <NavBar />
      <Login />

    </React.Fragment>

  
  );
}

export default App;
