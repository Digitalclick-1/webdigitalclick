import React from 'react';
import { Link } from 'react-router-dom';
import NavigationFour from '../../Navigation/NavigationFour';
import OwlCarousel from 'react-owl-carousel3';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Collapsible from 'react-collapsible';
import VideoSlider from '../../Common/videoSlider';
// import blogImage from '../../../assets/images/blog-details.jpg';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import BookingForm from '../../Common/bookingCall';
import FaqPage from '../../Pages/FAQ/FaqPage';
import Sidebar from '../../Sidebar/sidebar';
import '../../../assets/css/layout.css';
import { useRef } from 'react';
import '../../Pages/FAQ/faq.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown, faDriversLicense} from '@fortawesome/free-solid-svg-icons';// import './influncermarketing.css';
import bannerpic from '../../../assets/images/influencerbannerpic.png';
import bannerpicx from '../../../assets/images/influencermarketingx.png';
import bannerpicxx from '../../../assets/images/influncermarketing2.jpg';
import bannerpicxxs from '../../../assets/images/influencermarketingxxs.png';
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons';
import {faRobot} from '@fortawesome/free-solid-svg-icons';
import {faPerson} from '@fortawesome/free-solid-svg-icons';
import {faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import {faIndustry} from '@fortawesome/free-solid-svg-icons';
import {faTimesSquare} from '@fortawesome/free-solid-svg-icons';
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
 
class InfluncerMarketing extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Influencer Marketing</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>We are the Leading Database Marketers.</li>
                            <div className='p-text' id='p-text'>

                        
                            <p>Our team has been creating a community of the strongest organizations in crypto 
and NFTs for year. We've spent a significant amount of money over years to build 
our network. We are proud to put that your startup will sky-rocket with us as our 
marketing strategies have the best reach.</p>
</div>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/influncermarketing" className="navbarlink active">influencer Marketing  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/investormarketing">Investor Marketing    <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/contentmarketing">Creative Service And Content Marketing   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="videoproduction">Video Production    <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/strategicpartnership">Strategic Partnership   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlinksocial" to="/socialmediamanagment">Social Media and Community Managment   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Book a Call Now!</h3>
                            <p>Our company provides a filled to the brim services to its clients. We are all-
inclusively store that includes Twitter and YouTube influencers, podcast 
sponsorships, conferences, events and much more. Choose the desired one!</p>
                            {/* <AnchorLink className='button' offset={() => 100} href="#form">Book a Call</AnchorLink> */}
                            {/* <button className="fill"   >Book a Call</button> */}
                            <Link to="/bookingform" className="uk-button uk-button-default">Book a Call</Link>


                          

                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                            <img src={bannerpicx}></img>
                                            </div>

                                            <div className="item">
                                                <img src={bannerpicxxs} alt="img" />
                                            </div>
                                        </OwlCarousel>
                                        <div class="row">

                                        <div class="column" >
                                        <h3>Why Choose This Service</h3>
                                        <p></p>

                                        <ul className="services-features-list">
                                            <li><FontAwesomeIcon icon={faRobot} style={{color:'#B92200',fontSize:'22px'}}/> Great Technology</li>
                                            <li><FontAwesomeIcon icon={faBusinessTime} style={{color:'#B92200',fontSize:'22px'}}/> Delivery On Time</li>
                                            <li><FontAwesomeIcon icon={faPerson} style={{color:'#B92200',fontSize:'22px'}}/> Expert Engineers</li>
                                            <li><FontAwesomeIcon icon={faPaintBrush} style={{color:'#B92200',fontSize:'22px'}}/> Creative Architecture</li>
                                            <li><FontAwesomeIcon icon={faIndustry} style={{color:'#B92200',fontSize:'22px'}}/> Industrial Construction</li>
                                            <li><FontAwesomeIcon icon={faTimesSquare} style={{color:'#B92200',fontSize:'22px'}}/> 24/7 Support</li>
                                        </ul>


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Get connected with the Prevalent Influencers of the World</h3>
                                        <p>Our team specializes in influencer marketing. Numerous of campaigns have been 
successfully completed by us. We know to whom we should contact, understand 
what to say and can act as a third party to ensure they bring on what you're 
attempting to communicate.</p>
                                        </div>
                                        </div>
                                        <div class="columnpic" >
                                        <img src={bannerpicxx} ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Crypto/NFT PR and Influencer Marketing Services</h3>
                                        <p>We are a prestigious NFT and Crypto marketing firm that gains your endeavour 
exposure and awareness through endorsers and PR media sources. We have great 
intellectuals and creative thinkers that can benefit your project growth. </p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
           
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default InfluncerMarketing;