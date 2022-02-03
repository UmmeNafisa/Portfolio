import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import { Grid } from '@mui/material';
import Typewriter from 'typewriter-effect';
import About from '../Home/About/About';
import Contacts from '../Home/Contacts/Contacts';
import Projects from '../Home/Projects/Projects';
import Skills from '../Home/Skills/Skills';
import ScrollToTop from "react-scroll-to-top";

const Navbar = () => {


    return (
        <>
            <ScrollToTop smooth color="rgb(241, 102, 241)" />
            <div className="home-bg">
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <Grid xs={12} md={2}>
                        <div class="wrapper">
                            <h1 className="header-name"> Nafisa's Portfo<span className="rest-part">lio</span></h1>
                            <div class="button">
                                <Link to="/home">
                                    <div class="icon">
                                        <i class="fas fa-home"></i>
                                    </div>
                                    <span>Home</span>
                                </Link>
                            </div>
                            <div class="button">
                                <HashLink to="/home#about">
                                    <div class="icon">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <span>About</span>
                                </HashLink>
                            </div>
                            <div class="button">
                                <HashLink as={HashLink} to="/home#projects">
                                    <div class="icon">
                                        <i class="fas fa-window-restore"></i>
                                    </div>
                                    <span>Projects</span>
                                </HashLink>
                            </div>
                            <div class="button">
                                <HashLink as={HashLink} to="/home#skills">
                                    <div class="icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <span>Skills</span>
                                </HashLink>
                            </div>
                            <div class="button">
                                <HashLink as={HashLink} to="/home#contact">
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <span>Contacts</span>
                                </HashLink>
                            </div>

                        </div>
                    </Grid>
                    <Grid xs={12} md={10}>
                        <div className="caption">
                            <h1 className="caption-header"> I'M UMME NAFISA </h1>
                            <div className="typewrite">
                                <Typewriter
                                    options={{
                                        strings: ['Full Stack Web Developer', "React Developer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>

                            <div className='button-cm'>
                                <a href="https://drive.google.com/file/d/145RvUyS-fsMqxEBQlwWXotbiWPh1HXf5/view?usp=sharing" target="_blank" >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Resume
                                </a>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </div>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contacts></Contacts>
        </>
    );
};

export default Navbar;