import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';

import bannerpic from '../../../assets/images/pocbannerpic.png';
import 'reactjs-popup/dist/index.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import '../../Common/popup.css';
import PocFaq from '../../Pages/FAQ/poc.faq';
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
 
const ProofOfConcept =()=> {
    const [buttonpopup,setbuttonpopup]=useState(false);
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                
                <section className="page-title-area uk-page-title" style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                       <h1>Proof Of Concept</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>POC</li>
                            

                            <div className='p-text' id='p-text' >
                            <p>The blockchain PoC is the process of verifying that the idea has the potential in a real-world situation. Its aim is to determine whether the project is feasible and will function as planned.</p>
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
                                            <li><Link className="navbarlink " to="/whitepaper">Whitepaper  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/poc">Proof Of Concept <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >What is POC?</h3>
                            <p>When you are looking for a vision, the PoC ('Proof of Concept') is usually regarded 
                                        as the best way to begin the execution of your ideas. Simply put, the blockchain 
                                        Proof of Concept is the method used to determine whether or not a hunch has real-
                                        world potential. Its objective is to assess whether the project is achievable and will 
                                        perform as expected. This can be executed as a prototype or as a Minimum Viable 
                                        Product.</p>

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

                                        </OwlCarousel>
                                     
                                        <div class="row">

                            


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Overview - Proof of Concept</h3>
                                        <p>Proof of concept (POC) is a modern method for assessing the program's status and 
                                                        performance characteristics flow so that it is operable and optimised in the live 
                                                        situation. There must be a question in this moment as to why this cannot be 
                                                        accomplished thru the regular verification process.
                                                        Of course, POC/MVP is a type of validation principle that allows professionals to 
                                                        establish unit tests to investigate project items. This greatly aids validation 
                                                        professionals in assessing the task in the most efficient and cost-effective manner.</p>
                                        </div>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>The POC's Detailed Process</h3>
                                        <p>Once the venture has concluded its growth phase, the POC will be developed in 
                                            conjunction with evaluation professionals, and the survey will be generated and 
                                            submitted for testing purposes. This study will be a potent tool for developing unit 
                                            tests in order to carry out a successful assessment. In general, POC will cover all 
                                            aspects required to carry out the testing.
                                            We provide this efficient assistance to businesses in order to help them unveil their 
                                            corporate network in a robust and free manner. We have a group of professionals 
                                            with deep knowledge of the POC process who will ensure impeccable outcomes and 
                                            endeavour operability.</p>
                                        <h4>&#x2022;Fundamental strategy</h4>
                                        <p>This section describes in detail how you intend to carry out your venture from the 
                                        planning phase to reaching the end. It is the heart of your whitepaper founding, and
                                        it requires the greatest brains.</p>
                                        </div>
                                

                                        </div>
                                        
                                        </div>
                                        
                                </div>
                                <div>
                            
                                </div>

                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>The Advantages of Proof of Concept Offerings</h3>

                                        <p>Eliminate unexpected outcomes and added expenses by testing your remedy 
                                                through the appropriate Proof of Concept solution with our skilled PoC offerings. 
                                                With a well-crafted Proof of Concept in hand, you can vibrantly prove your specialist
                                                motives to stakeholders, check your notion in the ground, and amaze the 
                                                preliminary TA right away, all while growing steadily your solution into a completely 
                                                hit</p>
                                        <h4>&#x2022;Excellent Proof of Concept Project Manager</h4>
                                        <p>Our project managers oversee anything from threats and 
                                                increase team performance.</p>
                                         <h4>&#x2022;Business Analys</h4>
                                         <p> A knowledgeable expert who will thoroughly examine your 
                                                    company's operations and niche market, identify key issues, and recommend 
                                                    effective opportunities and solutions.</p>
                                          <h4>&#x2022;UI/UX Designe</h4>
                                          <p>- A dedicated creator of instinctive, attainable user interface design 
                                                        with the objective of creating a flawless, lucrative, and goal-oriented user 
                                                        experience.
                                                        System Architect - a creative director of your operating system to be incorporated 
                                                        as a traditional structured and basic software and widget layout who will also assist 
                                                        you in adequately identifying needs, handling bugs, and maintaining the system design.</p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
                <PocFaq/>
           
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
 
export default ProofOfConcept;