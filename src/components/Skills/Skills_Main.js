import React, { useEffect } from "react";
import "./Skills_Main.css";
import Skills_2 from './Skills_2';
import skills_icon from '../../images/skills_icon.png'
import Aos from 'aos';  
import 'aos/dist/aos.css';

export default function Skills_Main() {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div className="skills_main_cont" id='skills_nav'>
      <h2>
        My <span>Skills</span>{" "}
      </h2>

      <div className="skills_cont">
        <div data-Aos="fade-right" className="skills_side_1">
          <img src={skills_icon} alt="" />
        </div>
        <div data-Aos="fade-left" className="skills_side_2">
          <Skills_2/>
        </div>
      </div>
    </div>
  );
}
