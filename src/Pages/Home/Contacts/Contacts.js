import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
        <div id="contact" className="about-bg">
            <h1 className="big-header"> CONTACT </h1>
            <h1 className="small-header"> GET IN <span>TOUCH</span></h1>
            <div className="contacts">
                <div className="contacts-details" >
                    <h2>DON'T BE SHY !</h2>
                    <p className="paragraph">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className=" custom-span-contact position-relative"><i class="fa fa-map position-absolute icons"></i> <p className='contact-info'> <span className="d-block">Address Point : </span>  Pallabi, Mirpur, Dhaka, Bangladesh</p> </div>
                    <div className=" custom-span-contact position-relative"><i class="fa fa-envelope-open position-absolute icons"></i> <p className='contact-info'> <span className="d-block">mail me : </span>  <a href="mailto:ummenafisa.aust@gmail.com" > ummenafisa.aust@gmail.com</a></p>  </div>
                    <div className=" custom-span-contact position-relative"><i class="fa fa-phone-square position-absolute icons"></i> <p className='contact-info'> <span className="d-block">call me : </span>  <a href="Tel: +880-1670098731" >     +880-1670098731 (BD)</a></p>  </div>
                </div>

                <form action="https://formsubmit.co/pappanafisa@gmail.com" method="POST" className="contactForm">
                    <div class="form-group"><input type="text" name="name" required placeholder="Your Name" /> </div>
                    <div class="form-group"> <input type="email" name="email" placeholder="Your Email" required /> <br /> </div>
                    <div class="form-group"> <input type="subject" name="_subject" placeholder="Subject" /> <br /> </div>
                    <div class="form-group"> <textarea name="message" placeholder="Your Message"></textarea> <br /> </div>
                    <button type="submit" className="button-contact"><span class="button-contact-text">Send Message</span><span class="button-contact-icon"><i class="fas fa-paper-plane"></i></span></button>
                </form>
            </div >
        </div >
    );
};

export default Contacts;