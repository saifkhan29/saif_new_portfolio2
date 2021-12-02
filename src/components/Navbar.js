import "./Navbar.css";
import icon from "../images/icon.png";
import cancel2 from "../images/cancel.png";
import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import {  Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Navbar = () => {

  

  const [isOpen, setIsOpen] = useState(true);

 

  return (
    <div>
      <nav className='Navbar'>
        <h2 className="navLogo">Saif Khan</h2>
        <ul className={isOpen ? "" : "show"}>
          
          
          <li><a href="#home">Home</a></li>
          <li> <a href="#about_22">About</a></li>
          <li><a href="#projects_nav">Projects</a></li>
          <li><a href="#skills_nav">Skills</a></li>
          <li><a href="#services_nav">Services</a></li>
          <li><a href="#youtube_nav">Youtube</a></li>
          <li><a href="#contact_nav">Contact</a></li>
        </ul>
        <img
          className={isOpen ? "navImg" : "navImg hideHam"}
          onClick={() => setIsOpen(!isOpen)}
          src={icon}
        />
        <img
          className={isOpen ? "navImg2 " : "navImg navImg22"}
          src={cancel2}
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>
      
        
    </div>
  );
};



export default Navbar;
