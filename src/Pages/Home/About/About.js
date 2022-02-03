import React from 'react';
import './About.css';
import Typewriter from 'typewriter-effect';
import profilePic from '../../../image/blue-dress-pic.png'

const About = () => {
    return (
        <div id="about" className="about-bg" >
            <h1 className="about-header" > About Me </h1>
            <h4 className="about-who"> Who Am  I ! </h4>
            <div className='dotted-line'> -------------- </div>
            <div className="about-section" >
                <div>
                    <img src={profilePic} className="profile-pic" alt="" data-aos="fade-up"
                        data-aos-duration="3000" />
                </div>

                <div>
                    <h1 className="about-text-header">I'm Nafisa and I'm
                        <span className="typewrite-about">
                            <Typewriter
                                options={{
                                    strings: [' a Web Developer', " a Web Designer", " an Engineer", " a Coder"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>
                    <h4 className="about-text" > I am a Full stack Web Developer. I live in Bangladesh. I am also an Engineer. I have been learning web development for the last couple of years. During my learning process, I have gained proficiency in HTML, CSS, JavaScript, Bootstrap, Tailwind, React-web, Node js, Express js, API, DOM, MongoDB, Firebase.I have developed three full-fledged projects. These projects can be found on my Github profile.I solved numerous problems of javascript on the codewars.
                        I like to learn and explore new things  </h4>
                </div>
            </div>
        </div>
    );
};

export default About;