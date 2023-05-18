import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component.jsx/home';

import NavBar from './component.jsx/navBar';

import Login from './component.jsx/loginForm';
import { Route, Switch } from 'react-router-dom';
import Product from './component.jsx/product';
import About from './component.jsx/about';
import Sign from './component.jsx/signIn';
import Contact from './component.jsx/contact';

function App() {
  return (
    <React.Fragment>     
      <NavBar />
      <div className='content'>

        <Switch>
        <Route path="/product" component={Product} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/sign" component={Sign} />
      <Route path="/contact" component={Contact}/>
      <Route path="/" component={Home} />
        </Switch>
      


      </div>

    </React.Fragment>

  
  );
}

export default App;
