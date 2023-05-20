import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';

import FaqPage from '../../Pages/FAQ/FaqPage';

import bannerpic from '../../../assets/images/whitepaperbannerpic.png';
import 'reactjs-popup/dist/index.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import '../../Common/popup.css';
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
 
const WhitePaper =()=> {
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                
                <section className="page-title-area uk-page-title" style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                       <h1>Whitepaper</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Why do you need white paper?</li>
                            

                            <div className='p-text' id='p-text' >
                            <p>A whitepaper is a comprehensive report on the software and goals of ones 
blockchain or cryptocurrency venture. It describes your project's principle and how 
you intend to reach it to success.</p>
</div>
                        </ul>
                    </div>
                
                </section>
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/marketinvestment" className="navbarlink">Market Investment <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink " to="/compliance">  Compliance <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/ecosystemdesign"> Ecosystem Design <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/listings"> Listings  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/whitepaper">Whitepaper  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Do you want to be one of the top crypto leaders?</h3>
                            <p>Reach us to go over all of the requirements for listing and to help you navigate thru 
the mangled wreck!</p>
                            {/* <AnchorLink className='button' offset={() => 100} href="#form">Book a Call</AnchorLink> */}
                            {/* <button className="fill"   >Book a Call</button> */}



                            {/* <Link to="/bookingform" className="uk-button uk-button-default">Book a Call</Link> */}
                            <div>
                            <Link to="/bookingform" className="uk-button uk-button-default" style={{marginBottom:'10px'}}>Book a Call</Link>
                            </div>

                          

                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={'https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-2.png'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-2.png'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://www.dejero.com/hubfs/Website/Resources/Resources-Asset-Resilient-Wireless-System-Design-Whitepaper-Thumb.png'} alt="img" />
                                            </div>
                                        </OwlCarousel>
                                     
                                        <div class="row">

                            


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Business Case</h3>
                                        <p>A business case informs investors about the specifics of your project. The business 
case explains what you hope to accomplish with your endeavour and how much it 
will cost. All of this is accomplished by our team in the most skilled and 
comprehensive ways.</p>
                                        </div>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Features of Whitepaper Creation</h3>
                                        <p>There are some critical points that must be addressed clearly and unequivocally in 
                                        ones whitepaper. If any of the following elements are missing, ones whitepaper is 
                                        incomplete.</p>
                                        <h4>&#x2022;Fundamental strategy</h4>
                                        <p>This section describes in detail how you intend to carry out your venture from the 
                                        planning phase to reaching the end. It is the heart of your whitepaper founding, and
                                        it requires the greatest brains.</p>
                                        <h4>&#x2022;Market Research</h4>
                                        <p>Your investors must be aware that your proposal is market-viable, which is why 
                                         market data should be included in the whitepaper. A market research is a thorough 
                                         examination of the industry for your endeavour.</p>
                                         <h4>&#x2022;Structure of a white paper</h4>
                                         <p>It includes an overview that describes the project in detail. The whitepaper will then 
                                          dive into great detail about the project, market data, statistics, and solutions.
                                          </p>
                                          <h4>&#x2022;Product Information</h4>
                                          <p>This section contains information about your project, the implementation, and the 
                                            economic advantages to users. It also includes the creative features that set it apart
                                            from the competitors.</p>
                                            <h4>&#x2022;Unobscured vision</h4>
                                            <p>Here's what you'd like to accomplish with your venture in the future. It effectively 
                                            describes the long-run goal of your proposal to the audience.</p>
                                            <h4>&#x2022;Action plan</h4>
                                            <p>Describe the actions you'll take in order to accomplish the goal of your project. It 
                                             includes timetables for when certain tasks must be completed.</p>
                                        </div>
                                

                                        </div>
                                        
                                        </div>
                                        
                                </div>
                                <div>
                            
                                </div>

                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>For Blockchain Projects</h3>
                                        <p>A whitepaper for blockchain and cryptocurrency endeavours is a document that 
                                            describes everything about the proposal, from the software to market research, 
                                            product information, and so forth. Specific criteria must be met when creating a 
                                            whitepaper for a cryptocurrency or blockchain project. These criteria are as follows:
                                            The whitepaper must describe the issue that your project is attempting to solve.
                                            Complete design and app characterization
                                            When will the undertaking be finished?
                                            Team working skills
                                            The token's application and the way it incentives the shareholder
                                            How do you aim to finance the project?
                                            Whitepaper Notion
                                            The goal of whitepaper innovation is to inform the reader about the entire project. 
                                            Each shareholder desires to comprehend the system in which you are enticing them
                                            to spend. You must explicitly state your mission and objectives and key aim. What is
                                            unique about the project that distinguishes it from others on the market? 
                                            Remarkable projects with viable solutions have always been a huge success in the 
                                            crypto and blockchain space. 
                                            Do you want to be one of the top crypto leaders?
                                            Reach us to go over all of the requirements for listing and to help you navigate thru  </p>
                                        </div>
                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Whitepaper Notion</h3>
                                        <p>The goal of whitepaper innovation is to inform the reader about the entire project. 
                                            Each shareholder desires to comprehend the system in which you are enticing them
                                            to spend. You must explicitly state your mission and objectives and key aim. What is
                                            unique about the project that distinguishes it from others on the market? 
                                            Remarkable projects with viable solutions have always been a huge success in the 
                                            crypto and blockchain space
                                            </p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
                <FaqPage/>
           
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
 
export default WhitePaper;