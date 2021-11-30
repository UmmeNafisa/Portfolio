import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import { Grid } from '@mui/material';
import Typewriter from 'typewriter-effect';

const Navbar = () => {

    return (
        <div className="home-bg">
            <Grid container spacing={{ xs: 2, md: 3 }} >
                <Grid xs={2} md={2}>
                    <div class="wrapper">
                        <h1 className="header-name"> Nafisa's Portfo<span className="rest-part">lio</span></h1>
                        <div class="button">
                            <Link as={HashLink} to="/home">
                                <div class="icon">
                                    <i class="fas fa-home"></i>
                                </div>
                                <span>Home</span>
                            </Link>
                        </div>
                        <div class="button">
                            <Link as={HashLink} to="/home#about">
                                <div class="icon">
                                    <i class="fas fa-user"></i>
                                </div>
                                <span>About</span>
                            </Link>
                        </div>
                        <div class="button">
                            <Link as={HashLink} to="/home#projects">
                                <div class="icon">
                                    <i class="fas fa-window-restore"></i>
                                </div>
                                <span>Projects</span>
                            </Link>
                        </div>
                        <div class="button">
                            <Link as={HashLink} to="/home#contact">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <span>Contacts</span>
                            </Link>
                        </div>

                    </div>
                </Grid>
                <Grid xs={10} md={10}>
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
                        <a href="https://drive.google.com/file/d/145RvUyS-fsMqxEBQlwWXotbiWPh1HXf5/view?usp=sharing" target="_blank" className="button-rgl"> RESUME  </a>
                    </div>

                </Grid>


            </Grid>


        </div>
    );
};

export default Navbar;