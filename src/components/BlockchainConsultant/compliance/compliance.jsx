import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';

import bannerpic from '../../../assets/images/comlianceBannerpic.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import '../../Common/popup.css';
import ComplianceFaq from '../../Pages/FAQ/compliance.faq';
const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true
}
 
const Compliance =()=> {
    const [buttonpopup,setbuttonpopup]=useState(false);
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                
                <section className="page-title-area uk-page-title" style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                       <h1>Compliance</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>What Do We Do?</li>
                            

                            <div className='p-text' id='p-text' >
                            <p>We offer blockchain analytics to help with cryptoasset compliance. Allow your audit 
to monitor and manage across 500+ cryptocurrency assets while meeting legal 
standards</p>
</div>
                        </ul>
                    </div>
                
                </section>
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/marketinvestment" className="navbarlink">Market Investment <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/compliance"> Compliance <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/ecosystemdesign"> Ecosystem Design <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/listings"> Listings  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink " to="/whitepaper">Whitepaper  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/poc">Proof Of Concept <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
            </ul>
            
        </div>
    </nav>
                                    
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <section className="services-details-area uk-services-details uk-section"  >
                    

                    <div className="uk-container">
                        <article className="uk-article services-details">
                            
                                <div className="inner uk-width-expand">
                                    <div className="services-details-desc">
                                        <h3 >Growth is driven by compliance.</h3>
                            <p>Compliance gives a competitive edge by fostering trust among policymakers, 
consumers, and associates. It is crucial to use the most precise AML monitoring 
solutions, as well as to invest in your team to develop the skills necessary to stay 
compliant.</p>
                              <div>
                            <Link to="/bookingform" className="uk-button uk-button-default" style={{marginBottom:'10px'}}>Book a Call</Link>
                            </div>

                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={'https://datateam.com.tr/wp-content/uploads/2022/06/MicrosoftTeams-image-11.jpg'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://www.pscconsulting.com/wp-content/uploads/Compliance-Quality-Control.jpg'} alt="img" />
                                            </div>
                                        </OwlCarousel>
                                     
                                        <div class="row">

                            


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>The Most Reliable Blockchain Dataset</h3>
                                        <p>You can be confident that you're creating compliance decisions on the highest and 
                                            perhaps most precise blockchain dataset ever built. We've been gathering evidence
                                            and have connected hundreds of thousands of cryptoasset addresses to known 
                                            firms. It boosts operational effectiveness by lowering false alarms, allowing your 
                                            compliance team to focus on investigation.</p>
                                        </div>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Increase Your Crypto Possibilities</h3>
                                        <p>We provide the clarity you ought to supervise hazard wherever it appears, with over
                                            100 billion pieces of data trying to cover 98% of the crypto market. We are 
                                            dedicated to realizing the full potential of cryptoassets. That is why we are 
                                            constantly expanding and intensifying our coverage in order to produce the best 
                                            standard dataset on the economy.</p>
                                        <h3>Scores of Actionable Risk</h3>
                                        <p>Give your compliance teams the threat insights they have to work swiftly. Our multi-
                                            asset platform calculates danger scores at the payment, or wallet level using 
                                            refined data science and deep learning. It provides a single risk assessment 
                                            throughout all cryptoassets that can be accessed via a web application or a 
                                            powerful API.</p>
                                        <h3>Risk Rules are Configurable</h3>
                                        <p>We provide transaction and wallet management information system include 
                                                customizable risk rules, allowing you to customise them to your specific risk 
                                                tolerance. To get you launched probability of default guidelines for restrictions and 
                                                prevalent typologies are also available.</p>
                                        </div>
                                        <h3>
                                        APIs for Automation of Compliance
                                        </h3>
                                        <p>Streamline compliance transactions by testing transfers and wallets in bulk via our 
                                                API and directly feeding the results into the other business systems. Our Developer 
                                                Center ensures that programmers have the resources they need to rapidly and fully 
                                                integrate.</p>
                                                <h3>Crypto compliance assets, training, and coaching</h3>
                                                <p>Improve your teams' performance to create an effective and efficient compliance 
                                                function. It recognizes organisations' unique needs and provides tailored training to 
                                                their phase in the crypto path.</p>
                                

                                        </div>
                                        
                                        </div>
                                        
                                </div>
                                <div>
                            
                                </div>

                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h2>Crypto Compliance Automation</h2>
                                        <h3>Reduce the expense of Compliance</h3>
                                        <p>Optimize compliance with our payment, pocket, and VASP vetting solutions to scale 
                                            up processes without introducing additional headcount as volumes grow.</p>
                                        </div>
                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Reduce False Positives</h3>
                                        <p>We've connected tens of millions of cryptocurrency accounts to known entities in 
                                                order to reduce false positives and allow your team to concentrate on elevated 
                                                alerts.
                                            </p>
                                        </div>
                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Accelerate risk reporting</h3>
                                        <p>Locate activity back across strands of exchanges to the destination or source of 
                                            funds, and conveniently extract this audit trail for use in SARs.
                                            </p>
                                        </div>
                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Use Crypto Experts</h3>
                                        <p>Professionals in cryptocurrency regulatory oversight and technology are available 
                                            for training, professional development, and sharing studies on laundering money 
                                            categorisations and regulation trends.
                                                                                        </p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
                <ComplianceFaq/>
           
               
             
          
{/*                
                <Footer /> */}
            </>
        );
    }
 
export default Compliance;