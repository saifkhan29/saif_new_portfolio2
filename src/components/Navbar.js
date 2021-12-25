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
  console.log(isOpen)

 

  return (
    <div>
      <nav className='Navbar'>
        <h2 className="navLogo">Saif Khan</h2>
        <ul className={isOpen ? "" : "show"}>
          
          
          <li onClick={() => setIsOpen(!isOpen)}><a href="#home">Home</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#about_22">About</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#projects_nav">Projects</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#skills_nav">Skills</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#services_nav">Services</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#youtube_nav">Youtube</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#contact_nav">Contact</a></li>
        </ul>
        <img
          className={isOpen ? "navImg" : "navImg hideHam"}
          onClick={() => setIsOpen(!isOpen)}
          src="https://user-images.githubusercontent.com/79800224/147384666-7e42472d-5562-4442-9c0b-ea93aefb2980.png"
        />
        <img
          className={isOpen ? "navImg2 " : "navImg navImg22"}
          src="https://user-images.githubusercontent.com/79800224/147384667-91c735eb-31c3-4ae1-8896-616eb2c4cb7c.png"
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>
      
        
    </div>
  );
};



export default Navbar;
