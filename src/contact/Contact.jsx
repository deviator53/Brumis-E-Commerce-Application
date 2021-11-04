import React from 'react';
import './contact.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className="main-contact">
            <div className="contact">
            <div className="contact__container">
                    <div className="contact__container__left">
                        <h3 className="contact-header">Contact Info</h3>
                        <div className="contact__contents">
                            <div className="contact-text"><i class="fas fa-envelope"></i>
                                <a href="" className="contact-link" target="_blank">brumiscosmetics@gmail.com</a>
                            </div>
                            <div className="contact-text"><i class="fab fa-github"></i>
                                <a href="https://github.com/deviator53" className="contact-link">https://github.com</a>
                            </div>
                            <div className="contact-text"><i class="fab fa-linkedin"></i>
                                <a href="https://www.linkedin.com/in/david-bradford-651769160/" className="contact-link">https://www.linkedin.com</a>
                            </div>
                            <div className="contact-text"><i class="fas fa-phone"></i>
                                <a href="" className="contact-link">07032145887</a>
                            </div>
                            <div className="contact-text"><i class="fas fa-map-marker-alt"></i>
                                <a href="" className="contact-link">MKK Plaza, Jabi, Abuja. </a>
                            </div>

                        </div>
                    </div>
                    <div className="contact__container__right">
                        <h3 className="contact-header">Send a Message</h3>
                    <form>
                        <div className="inputBox">
                            <label for="">Name</label>
                            <input className="contact-input"  type="text" name="username"  required/>
                        </div>

                        <div className="inputBox">
                            <label for="">Email</label>
                            <input className="contact-input" type="email" name="email"  required/>
                        </div>

                        <div className="inputBox">
                            <label>Message</label>
                            <textarea className="contact-input" rows="4" cols="50" placeholder="Type your Message here..."></textarea>
                        </div>

                        <button className="button" type="submit">SEND</button>

                    </form>

                    </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;