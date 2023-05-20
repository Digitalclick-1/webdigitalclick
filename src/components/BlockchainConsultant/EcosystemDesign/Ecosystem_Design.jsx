import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';

import FaqPage from '../../Pages/FAQ/FaqPage';

import bannerpic from '../../../assets/images/ecosystemdesignbannerpic.png';



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
 
const EcosystemDesign =()=> {
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                
                <section className="page-title-area uk-page-title" style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                       <h1>Ecosystem Design</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Blockchain ecosystems?</li>
                            

                            <div className='p-text' id='p-text' >
                            <p>Ecosystems basically points to a group of elements capable of interacting with each other and the surrounding world for creating an environment with desired special features.</p>
</div>
                        </ul>
                    </div>
                
                </section>
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/marketinvestment" className="navbarlink">Market Investment <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink " to="/compliance"> Compliance <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/ecosystemdesign"> Ecosystem Design <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        {/* <h3 >Growth is driven by compliance.</h3> */}
                            <p>Blockchain is a decentralized ledger innovation that enables the storage of data in 
information blocks, with each component comprising sets of exchanges from a 
single point in time. Blockchain's transparent, decentralised, and safe nature 
enables it to obstruct conventional management systems.
Blockchain has the capability to disrupt the ecosystem by being an essential 
component of our daily lifestyles. Recognizing the core technology and its 
implications is critical for those hoping to profit from this new era. The blockchain 
ecosystem is the platform of all blockchain participants in the network who connect 
the same business process and goals. It may offer data integrity, decentralisation, 
increased flexibility, and expandability.</p>
                          

                          
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
                                        <h3>Blockchain Ecosystem Components</h3>
                                        <p>The following are the key logical elements of the blockchain ecosystem:</p>
                                        <h4>Node implementation</h4>
                                        <p>A particular online application that every computer with an 
                                            internet connection must download in order to participate in a cryptocurrency 
                                            world. A user joins the blockchain network after installing the node application. 
                                            When a node application has been placed, it can partake in the ecosystem.</p>
                                            <h4>distributed ledger</h4>
                                            <p>The distributed ledger is the rational parts and data structure managed within the 
                                                node application. Once the node app has been installed, the corresponding ledger 
                                                components from that ecosystem can be viewed. You can operate as many node 
                                                requests as you want and are allowed to be using, and each will engage in their 
                                                corresponding blockchain ecosystems.</p>
                                                <h4>Consensus algorithms</h4>
                                                <p>The consensus algorithm is employed as a component of the
                                                    node been using in the cryptocurrency ecosystem. They propose the game rules for 
                                                    how the ecosystem will show up at the complete view of the ledger. Different 
                                                    ecosystems reach consensus in diverse ways. There are various consensus 
                                                    algorithms, such as PoW and PoS, and each technique entitles nodes as honest in its
                                                    own way before they participate in the consensus protocol.</p>
                                                    <h4>virtual machine</h4>
                                                    <p>A virtual machine is a portrayal of a computerized environment formed by a 
                                                                computer programme and operated using language-programmed instructions. The 
                                                                virtualized implementation occurs concurrently with the node application.</p>
                                        </div>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Ecosystem business proportion</h3>
                                        <p>This defines the overarching goal of ecosystem 
actions. Some considerations to make include: What challenges does the suggested 
ecosystem solution address?
What influence would the blockchain ecosystem have on the individual participants?</p>
                                        <h3>Expected participants</h3>
                                        <p>It entails a planning session with the expected 
                                            participants to ascertain why they desire to participate the blockchain. Some 
                                            concerns to think about include: Who are the predicted participants, and why would 
                                            they would like to participate the ecosystem? What are the rewards for each of the 
                                            anticipated blockchain ecosystem participants to participate?</p>
                                        <h3>Ecosystem model</h3>
                                        <p>The organisation will determine which collaborative project 
                                                model is best suited to their needs. The organisation should think about the 
                                                following issues:
                                                What is the right model for a single-party led, partnership, or governmental 
                                                blockchain ecosystem?
                                                How might the framework need to evolve over time?</p>
                                        </div>
                                        <h3>
                                        Ecosystem management
                                        </h3>
                                        <p>This is the foremost essential step because it is 
essential to think about who will function and regulate the network. Some of the 
queries that should be addressed in this step are as follows:
What kind of governance will be necessary for bringing the ecosystem to existence?
How will the blockchain ecosystem's worth and price be apportioned equitably?</p>
                                

                                        </div>
                                        
                                        </div>
                                        
                                </div>
                                <div>
                            
                                </div>

                           
                        </article>
                    </div>
                </section>  
                {/* <FaqPage/> */}
           
               
             
          
{/*                
                <Footer /> */}
            </>
        );
    }
 
export default EcosystemDesign;