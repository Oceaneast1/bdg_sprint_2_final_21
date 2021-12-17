/*David Temple, Gerald Bartlett and Barry Poole's Final Sprint Project for Semester 2*/ 

import React from "react";


import "./App.css";

import {
  Route,
  Routes,
  BrowserRouter as Router,
  
} from "react-router-dom";

import Home from "./Sprint_2/Home";
import NewEntry from "./Sprint_2/NewEntry";
import DisplayContents from "./Sprint_2/DisplayContents";
import Login from "./Sprint_2/Login";
import Navigation from "./Sprint_2/Navigation";
import Footer from "./Sprint_2/Footer";

export default function App(){ 

  return (
    

  
    
    <Router>

      
      <div className="App">
      <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/NewEntry" element={<NewEntry />} />
      <Route path="/DisplayContents" element={<DisplayContents />} />
    </Routes>
    <Footer />
        
        
      </div>
      
    </Router>
    
  )};
