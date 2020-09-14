import React from 'react';


import './App.css';
import Home from './cmp/Home'
import What from './cmp/What'
import About from './cmp/About'
import Auth from './cmp/Auth'
import Patient from './cmp/Patient'
import Services from './cmp/Services'
import Create from './cmp/create.component'
import Index from './cmp/index.component'
import Login from './cmp/Login'
import Jumbotron from 'react-bootstrap/Jumbotron';

import Button from 'react-bootstrap/Button';


import {
  MemoryRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";



const App = () => (
  
  <MemoryRouter className="mem">
   <Jumbotron className="jum jumbotron">
    <h2 className="header"> Welcome To Kidney Donation
      </h2>
      <h2>
          <Button size="lg"  className="custom-btn-toolbar">
          <Link to="/home">
              <Button>Home</Button>
            </Link>
           

            
            <Link to="/what">
              <Button>What We Do</Button>
            </Link>
           
            <Link to="/about">
              <Button>About</Button>
            </Link>
            <Link to="/login">
              <Button>ForLogin</Button>
            </Link>
            <Link to="/create">
              <Button>Patient Form</Button>
            </Link>
            
            
            <Link to="/services">
              <Button>Emergency Services</Button>
            </Link>
            <Link to="/index">
              <Button>Patient</Button>
            </Link>
            <Link to="/">
              <Button>Login</Button>
            </Link>
          </Button>
        </h2>
       
          <Switch>
            <Route path="/about">
              <About />
            </Route>
             <Route path="/patient">
              <Patient />
              </Route>
              <Route path="/create">
              <Create />
              </Route>
              <Route path="/index">
              <Index />
            </Route> 
            <Route path="/what">
              <What />
            </Route>
            <Route path="/home">
            
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/login">
            <Login/>
            </Route>
           
            <Route path="/">
              <Auth />
            </Route>
          </Switch>
       
          </Jumbotron>   
      
    
  </MemoryRouter>
);
export default App;
