import React from 'react'
import './Contact.css'
import contact from '../../images/contact.png'
import right_arrow from '../../images/right_arrow.png'
import cont1 from '../../images/cont1.png'
import cont2 from '../../images/cont2.png'
import cont3 from '../../images/cont3.png'
import cont4 from '../../images/cont4.png'
import cont5 from '../../images/cont5.png'
import cont6 from '../../images/cont6.png'
import cont7 from '../../images/cont7.png'

export default function Contact1() {
    return (
        <div className="contact_cont" id='contact_nav'>
            <div className="contact_1">
                {/* start of contact 1 side 1 */}
                <div className="contact_side_1">
                <div className="contact_2_line"></div>
                    <h4>Saif's <span>Portfolio</span></h4>
                    <p>Thank you! <br /> for visiting my <br /> portfolio</p>
                    <img src={contact} alt="" />

                </div>
                {/* start of contact 1 side 1 */}
                {/* start of contact 1 side 2 */}
                <div className="contact_side_2">
                <h4>Quick <span>Links</span></h4>
                
                {/* ----------------------------------- */}
                <div className="contact_side_2_cont">
                    <img src={right_arrow} alt="" className='right_cont' />
                    <h5><a href="#home">Home</a></h5>
                </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                <div className="contact_side_2_cont">
                    <img src={right_arrow} alt="" className='right_cont' />
                    <h5><a href="#about_22">About</a></h5>
                </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                <div className="contact_side_2_cont">
                    <img src={right_arrow} alt="" className='right_cont' />
                    <h5><a href="#projects_nav">Projects</a></h5>
                </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                <div className="contact_side_2_cont">
                    <img src={right_arrow} alt="" className='right_cont' />
                    <h5><a href="#skills_nav">Skills</a></h5>
                </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                <div className="contact_side_2_cont">
                    <img src={right_arrow} alt="" className='right_cont' />
                    <h5><a href="#services_nav">Services</a></h5>
                </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                <div className="contact_side_2_cont">
                    <img src={right_arrow} alt="" className='right_cont' />
                    <h5><a href="#youtube_nav">Youtube</a></h5>
                </div>
                {/* ----------------------------------- */}
                {/* ----------------------------------- */}
                <div className="contact_side_2_cont">
                    <img src={right_arrow} alt="" className='right_cont' />
                    <h5><a href="#contact_nav">Contact</a></h5>
                </div>
                {/* ----------------------------------- */}
                </div>
                {/* start of contact 1 side 2 */}
                {/* start of contact 1 side 3 */}
                <div className="contact_side_3">
                <div className='contact_3_line'></div>
                <h4>Contact <span>Info</span></h4>
                {/* ============================== */}
                <div className="contact_side_3_cont">
                    <img src={cont1} alt="" />
                    <h5>thecoderguy22@gmail.com</h5>
                </div>
                {/* ============================== */}
                {/* ============================== */}
                <div className="contact_side_3_cont">
                    <img src={cont7} alt="" />
                    <h5>Mumbai , 400102</h5>
                </div>
                {/* ============================== */}
                {/* ============================== */}
                <div className="contact_side_3_cont">
                    <img src={cont3} alt="" />
                    <h5><a target='_blank' href="https://www.instagram.com/_thecoderguy_/">_thecoderguy_</a></h5>
                </div>
                {/* ============================== */}
                {/* ============================== */}
                <div className="contact_side_3_cont">
                    <img src={cont3} alt="" />
                    <h5><a target='_blank' href="https://www.instagram.com/designgallery01/">designgallery01</a></h5>
                </div>
                {/* ============================== */}
                {/* ============================== */}
                <div className="contact_side_3_cont">
                    <img src={cont4} alt="" />
                    <h5><a target='_blank' href="https://www.behance.net/saif_khan_">saif_khan_</a></h5>
                </div>
                {/* ============================== */}
                {/* ============================== */}
                <div className="contact_side_3_cont">
                    <img src={cont5} alt="" />
                    <h5><a href="#">saifkhan22</a></h5>
                </div>
                {/* ============================== */}
                {/* ============================== */}
                <div className="contact_side_3_cont">
                    <img src={cont6} alt="" />
                    <h5><a target='_blank' href="https://www.linkedin.com/in/saif-khan-67a8ba1ba/">Saif Khan</a></h5>
                </div>
                {/* ============================== */}

                </div>
                {/* start of contact 1 side 3 */}
            </div>
            <div className="contact_2">
                <span className='contact_line'></span>
                <h5>Made By Saif Khan</h5>
            </div>
        </div>
    )
}
