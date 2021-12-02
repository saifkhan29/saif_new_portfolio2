import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData';
import './Certificates.css'

export default function Certificate() {
    return (
        <div className='certificate_container'>
            <h2>My <span>Certificates</span></h2>
            <ImageSlider slides={SliderData}/>
            
        </div>
    );
};
