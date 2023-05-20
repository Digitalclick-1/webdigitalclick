import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import mapImg from '../../assets/images/map.png';
 
const Contact = ()=> {
const [userName,setUserName]=useState();
const [email, setEmail] = useState();
const [mobileno, setmobileno] = useState();
const [subject, setsubject] = useState();
const [message, setmessage] = useState();
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_pofb6op', 'template_7odvsa6', form.current, '6fQS4UE2P3vnjGNy4')
      .then((result) => {
          console.log(result.text);
          alert('Thank you for getting in touch!');
          console.log("msg successful");
      }, (error) => {
          console.log(error.text);
      });

      setUserName('');
      setEmail('');
      setsubject('');
      setmobileno('');
      setmessage('');
    };

        return (
            <section id="contact" className="contact-area uk-contact uk-section">
                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>Let's Talk</span>
                        <h2>Get in Touch</h2>
                    </div>

                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="map-img">
                                <img src={mapImg} alt="map" />
{/* 
                                <div className="location uk-location1">
                                    <Link to="#" className="active">
                                        <div className="location-info">
                                            <h5>New York</h5>
                                            <span>198 Collective Street</span>
                                        </div>
                                    </Link>
                                </div> */}

                                <div className="location uk-location2">
                                    <a  href='https://goo.gl/maps/UjEW8xTNc3Ffqan56'>
                                        <div className="location-info">
                                            <h5>DigitalClick</h5>
                                            <span>Islamabad</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <form ref={form} id="contactForm" onSubmit={sendEmail}>
                                <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                                    <div className="item uk-margin">
                                        <input 
                                            type="text" 
                                            className="uk-input" 
                                            name="name" 
                                            id="name" 
                                            placeholder="Name" 
                                            value={userName}
                                            onChange={e => setUserName(e.target.value)}
                                            required={true}
                                        />
                                    </div>

                                    <div className="item uk-margin">
                                        <input 
                                            type="email" 
                                            className="uk-input" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Email" 
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required={true}
                                        />
                                    </div>

                                    <div className="item uk-margin">
                                        <input 
                                            type="text" 
                                            className="uk-input" 
                                            name='phone'
                                            placeholder="Phone" 
                                            value={mobileno}
                                            onChange={e => setmobileno(e.target.value)}
                                            required={true}
                                        />
                                    </div>

                                    <div className="item uk-margin">
                                        <input 
                                            type="text" 
                                            className="uk-input" 
                                            name="subject" 
                                            id="subject" 
                                            placeholder="Subject" 
                                            value={subject}
                                            onChange={e => setsubject(e.target.value)}
                                            required={true}
                                        />
                                    </div>
                                </div>

                                <div className="item">
                                    <textarea 
                                        name="message" 
                                        className="uk-textarea" 
                                        id="message" 
                                        cols="30" 
                                        rows="4" 
                                        placeholder="Your Message"
                                        value={message}
                                        onChange={e=>setmessage(e.target.value)}
                                        required={true}
                                    />
                                </div>
                                
                                <button type="submit" className="uk-button uk-button-default">Submit Message</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
 
export default Contact;