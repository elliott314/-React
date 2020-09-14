import React , {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Card, value} from '../card/Card';
  
class Nav extends Component {
    render(){
        return(
            <div>
          <Link to = "home">Home</Link>
          <Card title = "test"/>
       <Link to = "about">About</Link>
       <Link to = "what">What We Do</Link>
       <Link to = "/">Login</Link>
       <Link to = "/patient">Patient</Link> 
       <Link to = "/services">Emergency Services</Link> 

            </div>
        );
    }
}
export default Nav;


