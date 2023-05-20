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
import {faBarsProgress, faCircleDown, faComment, faHandshake, faVolumeHigh} from '@fortawesome/free-solid-svg-icons';// import './influncermarketing.css';
import bannerpic from '../../../assets/images/socialmediabannerpic.png';
import bannerpicx from '../../../assets/images/influencermarketingx.png';
import bannerpicxx from '../../../assets/images/influncermarketing2.jpg';
import bannerpicxxs from '../../../assets/images/influencermarketingxxs.png';

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
 
class SocialMediaManagment extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Social Media and Community Managment</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>What Is social media community management?</li>
                            <div className='p-text' id='p-text'>

                        
                            <p>Social media community management defines a process by which your business engages with its audience on social media.</p>
</div>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/influncermarketing" className="navbarlink ">Influencer Marketing  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/investormarketing">Investor Marketing    <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/contentmarketing">Creative Service And Content Marketing   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="videoproduction">Video Production    <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/strategicpartnership">Strategic Partnership   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlinksocial active" to="/socialmediamanagment">Social Media and Community Managment   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Do you wish Social Media Marketing of your Projects?</h3>
                            <p>We've been in the blockchain space for years and understand what kind of social 
                                    media contents users seek. We've generated a proprietary structure after working 
                                    on numerous projects such as yours. We manage almost every social media 
                                    networks and know how to bring your projects at the top through marketing</p>
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
                                        <h3>4 keys to building a community management</h3>
                                        <p></p>

                                        <ul className="services-features-list">
                                            <li><FontAwesomeIcon icon={faHandshake} style={{color:'#B92200',fontSize:'22px'}}/> Acquisition</li>
                                            <li><FontAwesomeIcon icon={faComment} style={{color:'#B92200',fontSize:'22px'}}/> Social customer care</li>
                                     
                                            <li><FontAwesomeIcon icon={faBarsProgress} style={{color:'#B92200',fontSize:'22px'}}/> Crisis management</li>
                                            <li><FontAwesomeIcon icon={faVolumeHigh} style={{color:'#B92200',fontSize:'22px'}}/> Advocacy</li>
                                           
                                        </ul>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Posts on twitter, insta and other platforms you shall comply</h3>
                                        <p>We have supported some of the most prominent Web 3, NFT and Crypto projects by 
establishing and expanding their social media advertising networks.  We have 
collection of frameworks that we discovered to be the most efficient for 
communicating what your venture accomplishes, erecting hype, widening your 
reach, procuring more consumers, involving shareholders and purchasers. In a 
nutshell, you will be achieving your overarching campaign goals. 
 We are here to assist you 24/7 if you need any kind of marketing help like content 
production, development and posting schedule.</p>
                                        </div>
                                        </div>
                                        <div class="columnpic" >
                                        <img src={bannerpicxx} ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Our Social Media Promotion Strategy</h3>
                                        <p>We have expertise in the most prevalent NFT, Crypto, and Web3 endeavours. We've
constructed a specialised channel of largest investors, pioneers, content producers, 
creators, programmers, and trendsetters that we use to learn what works on a 
regular basis. We tell you the secrets to get on the top! </p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default SocialMediaManagment;