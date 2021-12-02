import React, { useEffect } from 'react'
import './Services.css';
import hexa from '../../images/Polygon_1.png'
import line from '../../images/line1.png'
import Aos from 'aos';  
import 'aos/dist/aos.css';

export default function Services() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (

        <div className='services_main' id='services_nav' >
            <h2>Services <span>Offered</span> </h2>
        <div data-Aos="fade-up" className='services_container'>
       



            <div className="services_inner_container">

               
                <img src={line} alt="" className='services_box'  />
                <img src={line} alt="" className='services_box2'  />
                <img src={line} alt="" className='services_box3'  />

              

               

                {/* start of services sub content */}

                <div className="services_sub_cont">
                    <div className='services_hexa'>

                        <img src={hexa} alt="" />
                        <h3>Web Developer</h3>
                        <p>I am a Front End Developer and I build 100% responsive websites according to the clients requirements.</p>

                    </div>
                </div>
                {/* start of services sub content */}
                
                {/* start of services sub content */}

                <div className="services_sub_cont">
                    <div className='services_hexa'>

                        <img src={hexa} alt="" />
                        <h3>UI UX Designer</h3>
                        <p>I use Figma and Illustrator to design and built the inferface and experience of the website.</p>

                    </div>
                </div>
                {/* start of services sub content */}
                
                {/* start of services sub content */}

                <div className="services_sub_cont">
                    <div className='services_hexa'>

                        <img src={hexa} alt="" />
                        <h3>Web Design</h3>
                        <p>I have more than a year experience on building creative website designs.</p>

                    </div>
                </div>
                {/* start of services sub content */}
               
                {/* start of services sub content */}

                <div className="services_sub_cont">
                    <div className='services_hexa'>

                        <img src={hexa} alt="" />
                        <h3>SEO</h3>
                        <p>While building websites I also take care of SEO aspect and code the website SEO friendly.</p>

                    </div>
                </div>
                {/* start of services sub content */}
                
                

            </div>
            
        </div>
        </div>
    )
}
