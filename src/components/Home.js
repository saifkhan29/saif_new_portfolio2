import React, {useRef, useEffect} from 'react';
import './Home.css';
import Saif from '../images/saif.png';
import box1 from '../images/homeBox1.png';
import box2 from '../images/homeBox2.png';
import box3 from '../images/homeBox3.png';
import box4 from '../images/homeBox4.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import icon7 from '../images/icon7.png';
import {TweenMax, Power3} from 'gsap';

export default function Home() {

    let text_1 = useRef()
    let text_2 = useRef(null)
    let mainImg = useRef(null)
    let SMtext_1 = useRef(null)
    let SMtext_2 = useRef(null)
    

    useEffect(() => {
        
        TweenMax.to(
            text_1,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )

    }, [])
    useEffect(() => {
        TweenMax.to(
            text_2,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .08
            }
        )

    }, [])
    useEffect(() => {
        
        TweenMax.to(
            SMtext_1,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )

    }, [])
    useEffect(() => {
        TweenMax.to(
            SMtext_2,
            2,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .08
            }
        )

    }, [])
    useEffect(() => {
        TweenMax.to(
            mainImg,
            3,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: .08
            }
        )

    }, [])


    return (
        <div id='home'>
            <div className="container">
                <h1 ref={el => {text_1 = el}}>Front End Developer , UI UX Designer , Programmer</h1>
                <h2 className='home_main_SM' ref={el => {SMtext_1 = el}} >UI UX Designer <br /> Front End Developer <br /> Programmer</h2>
                <h3 ref={el => {text_2 = el}}>I love to design and build amazing applications</h3>
                <img  ref={el => {mainImg = el}} src={Saif} className='saif'/>
                <h4 className='home_main_SM' ref={el => {SMtext_2 = el}} >I love to design and build <br /> amazing applications</h4>
                <img src={box1} className='homeBox1' />
                <img src={box2} className='homeBox2' />
                <img src={box3} className='homeBox3' />
                <img src={box4} className='homeBox4' />
                <img src={icon1} className='icon1' />
                <img src={icon2} className='icon2' />
                <img src={icon3} className='icon3' />
                <img src={icon4} className='icon4' />
                <img src={icon5} className='icon5' />
                <img src={icon6} className='icon6' />
                <img src={icon7} className='icon7' />
            </div>   
        </div>
    )
}
