import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import FaqPage from '../../Pages/FAQ/FaqPage';
import '../../../assets/css/layout.css';
import { useRef } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';

import bannerpic from '../../../assets/images/web3.00.png';
import '../../../assets/css/layout.css';
import Web3Faq from '../../Pages/FAQ/Web3.faq';
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
 
class WebThree extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Web 3.0 Development</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Web3.0</li>
                            <div className='p-text' id='p-text'>
                            <p>Web3, in the context of Ethereum, refers to decentralized apps that run on the blockchain. These are apps that allow anyone to participate without monetising their personal data.</p>
                            </div>
                         
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/webdappdevelopment" className="navbarlink ">Web & Dapp Development  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/coinExchangeDevelopment">Coin & Exchange Development    <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/nftmarketplace">NFT Marketplace  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/defidevelopment">Defi Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/smartcontract">Smart Contract  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/web3.0">Web 3.0 Development  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >What is Web 3.0</h3>
                            <p>Web 3.0 refers to the imminent 3rd generation of the internet, wherein web sites 
                                and apps may be capable of procedure facts in a clever human-like way the usage 
                                of technology inclusive of device learning (ML), Big Data, decentralized ledger 
                                technology (DLT), and so on. Web 3.0, dubbed the Semantic Web by World Wide 
                                Web creator Tim Berners-Lee, aimed to be a more autonomous, intelligent, and 
                                open internet. Web 3.0 will emerge from the natural evolution of older-generation 
                                web tools combined with cutting-edge technologies such as AI and blockchain, as 
                                well as user interconnection and increased internet usage.</p>
                            {/* <AnchorLink className='button' offset={() => 100} href="#form">Book a Call</AnchorLink> */}
                            {/* <button className="fill"   >Book a Call</button> */}
                            <Link to="/bookingform" className="uk-button uk-button-default">Book a Call</Link>


                          

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

                                        <div class="column" >
                                        <h3>How does Web 3.0 make our lives better?</h3>
                                        <h4>Experiential Education</h4>
                                        <p>Give users the choice of AR and VR games, trade, real estate investing, and other 
                                            experiences to interact with.</p>

                                       
                                        <h4>Play2Earn</h4>
                                        <p>Create play2earn to in a secure platform, that will offer income opportunities.</p>
                                        <h4>Intelligence Web</h4>
                                        <p>Web 3.0 applications can intelligently analyse media and content and provide 
                                            optimal results without the requirement for human intervention.</p>
                                            <h4>Personalization</h4>
                                        <p>Web 3.0 applications can be customised to carry out tasks like hunt, data 
                                                processing, and creating a personalised portal</p>

                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>WHY ARE WE THE Top WEB 3.0 DEVELOPMENT COMPANY?</h3>
                                        <p>With our best Web3.0 development services, you can remain one move ahead of 
                                            your competitors and flip your biz ideas into reality. 
                                            We provide complete customization.
                                            We provide entire source code, enabling you to easily modify it to fulfil your specific
                                            business needs.</p>
                                            <h4>Designed Using Snipping Technology</h4>
                                            <p>Our solution is designed with cutting-edge technology that boosts our script's 
                                                efficiency while also expanding its effectiveness and speed.</p>
                                                <h4>UI/UX that is captivating</h4>
                                                <p>We use cutting-edge technology to deliver a striking visual experience that 
                                                        enhances and strengthens the customer's experience.</p>
                                                        <h4>Global Exposure</h4>
                                                        <p>We support multiple languages and currencies, which helps with overseas markets 
                                                            and raises rates.</p>
                                        </div>
                                        </div>
                                        <div class="column" >
                                        <img src='https://i.pinimg.com/564x/3a/80/9e/3a809ec448d3e91e0b277a6d47979282.jpg' ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h3>The Advantages of Web 3 Evolution</h3>
                                        <h4>No Third Party</h4>
                                        <p>Third-party service providers are no longer required.  This helps businesses to be 
                                            able to cut costs and become more competitive.</p>
                                        <h4>Improved Regulatory Compliance</h4>
                                        <p>The blockchain is an unchanging record of transactions that is accessible to all 
                                            network participants. As a result, maintaining transparency simplifies the process 
                                            for companies to encounter their governance obligations. </p>
                                            <h4>Increased Accountability</h4>
                                        <p>However, because of the blockchain, each transaction can be tracked, enabling 
                                                companies to be held accountable for their actions. This makes it simpler for 
                                                individuals to buy products from companies with a good reputation.</p>
                                                <h4>Improved Security</h4>
                                                <p>Hackers will have a much more difficult time gaining sensitive data access with Web
                                                        3.0. Because of the blockchain's decentralised and distributed nature, there is no 
                                                        single point of failure, rendering it more challenging to crooked and impossible to 
                                                        be modified or monitored.</p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
                <Web3Faq/>
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default WebThree;