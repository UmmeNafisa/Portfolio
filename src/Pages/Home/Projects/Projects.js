import React from 'react';
import Slider from "./swiper";
import './swiper.css';
import img from '../../../image/IMG_3730-removebg-preview.png'


const Projects = () => {
    const settings = {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 2,
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 40, // Stretch space between slides (in px)
            depth: 300, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            slideShadows: false // Enables slides shadows
        }
    };

    return (
        <div id="projects">
            <div className="slider">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <Slider settings={settings}>

                    <img src={img} alt="swipe" />

                </Slider>
            </div>
        </div>
    );
};

export default Projects;