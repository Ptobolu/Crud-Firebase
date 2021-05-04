import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import {
BrowserRouter as Router, Swith, Route,Link} from "react-router-dom";
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';


function App() {
  return (
   <Router>
     <div>
       
        <Route path="/" component={Dashboard} />
        {/* <Route path="/" component={Login} />
        <Route path="/" exact component={Register} /> */}
        </div>
   </Router>
   
  );
}

export default App;
