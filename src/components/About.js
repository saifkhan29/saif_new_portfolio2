import './About.css';
import AboutPage from '../images/AboutPage.png'
import React, {useRef, useEffect} from 'react';
import Aos from 'aos';  
import 'aos/dist/aos.css';


export default function About() {

    let illust_1 = useRef()

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    

    
    return (
        <div id='about_22'>
            <div className="AboutContainer">
                <h2>About <span>Me</span></h2>
                <div className="aboutMain">
                    <div data-Aos="fade-up-right" className="about-main-side-1 d-flex-c">
                        <p>Hey , my name is Saif Khan , I am a front end <br /> developer and a UI / UX Designer . I build <br /> amazing looking websites with cool graphics <br /> and animations. </p>
                        <p>I like to code things from scratch, and enjoy <br /> bringing ideas to life in the browser.</p>
                        <div className="about-buttons">
                            <button>Download CV</button>
                            <button>Contact</button>
                        
                        </div>
                    </div>
                    <div className="about-main-side-2 d-flex-c">
                        <img data-Aos="fade-down-left" src={AboutPage} alt="illustration" />
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}
