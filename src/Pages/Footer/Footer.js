import React from 'react';
import './Footer.css'
import codewar from '../../image/logo.png'

const Footer = () => {
    return (
        <div className="footer-bg">
            <h2 className="copyright">Profiles</h2>

            <div class="wrapper-footer">
                <div class="button">
                    <div class="icon">
                        <a href="https://www.linkedin.com/in/umme-nafisa-349792a7/" target="_blank"> <i class="fab fa-linkedin-in"></i>  </a>
                    </div>
                    <span>Linkedin</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <a href="https://github.com/UmmeNafisa" target="_blank"> <i class="fab fa-github"></i>  </a>
                    </div>
                    <span>Github</span>
                </div>
                <div class="button">
                    <div class="icon">
                        <a href="https://www.codewars.com/users/UmmeNafisa" target="_blank"> <i class="fas fa-code"></i> </a>
                    </div>
                    <span>Codewars</span>
                </div>
            </div>
            <small className="copyright">copyright@ummenafisa-2021</small>
        </div>
    );
};

export default Footer;