import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import footerShape from '../../assets/images/footer-shape1.png';
 
const Newsletter =()=> {
    const [email, setEmail] = useState();
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
    

          setEmail('');

        };
 
        return (
            <section className="subscribe-area uk-section  uk-subscribe bg-gray">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <h3>Subscribe to our newsletter</h3>
                        </div>

                        <div className="item">
                            <form 
                            ref={form}
                                className="newsletter-form"
                                onSubmit={sendEmail}
                            >
                                <input 
                                    type="email" 
                                    className="uk-input" 
                                    name='email'
                                    id="email"
                                    placeholder="name@gmail.com" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                                <button 
                                    type="submit" 
                                    className="uk-button uk-button-default"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="shape">
                    <img src={footerShape} alt="shape" />
                </div>
            </section>
        );
    }
 
export default Newsletter;