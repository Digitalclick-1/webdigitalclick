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
import {faBusinessTime, faCircleDown, faHandshake, faRobot} from '@fortawesome/free-solid-svg-icons';// import './influncermarketing.css';
import bannerpic from '../../../assets/images/strategicbannerpic.png';
import bannerpicx from '../../../assets/images/influencermarketingx.png';
import bannerpicxx from '../../../assets/images/influncermarketing2.jpg';
import bannerpicxxs from '../../../assets/images/influencermarketingxxs.png';
import {faChess} from '@fortawesome/free-solid-svg-icons';

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
 
class StrategicPartnership extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Strategic Partnership</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>What Is Strategic Partnership?</li>
                            <div className='p-text' id='p-text'>

                        
                            <p>A strategic partnership is a business partnership that involves the sharing of resources between two or more individuals or companies to help all involved succeed.</p>
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
                                            <li><Link className="navbarlink active" to="/strategicpartnership">Strategic Partnership   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlinksocial " to="/socialmediamanagment">Social Media and Community Managment   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Work with us on this.</h3>
                            <p>Sometimes we devise a plan and then fully implement it. Across many cases, 
various agencies will be involved in the execution of larger, more complex 
strategies, including design, public relations, community building, and advertising 
companies.
So, if you require assistance in creating a portion Marketing Strategy for your task, 
you can contact us Now!</p>
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
                                        <h3>6 specific critical success factors for strategic partnership.</h3>
                                        <p></p>

                                        <ul className="services-features-list">
                                            <li><FontAwesomeIcon icon={faChess} style={{color:'#B92200',fontSize:'22px'}}/> Strategic alignment</li>
                                            <li><FontAwesomeIcon icon={faHandshake} style={{color:'#B92200',fontSize:'22px'}}/> Collaborative governance</li>
                                     
                                            <li><FontAwesomeIcon icon={faBusinessTime} style={{color:'#B92200',fontSize:'22px'}}/> Business outcomes</li>
                                            <li><FontAwesomeIcon icon={faRobot} style={{color:'#B92200',fontSize:'22px'}}/> Technology as a business enabler</li>
                                           
                                        </ul>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Experienced Crypto Marketers' Marketing Strategy</h3>
                                        <p>We've created many marketing strategies for cryptocurrency projects ranging from 
                                                NFT launches to smart contracts games, crypto financing portals and transactions, 
                                                mining reservoirs, virtual service providers, and much more. We've witnessed and 
                                                participated in the evolvement of the crypto industry for the past many years. 
                                                Strategies that ended up working in the past no longer work or have limited 
                                                capacity, and many people seem to forget about the basics of Digital Marketing.</p>
                                        </div>
                                        </div>
                                        <div class="columnpic" >
                                        <img src={bannerpicxx} ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Create a Marketing Strategy</h3>
                                        <p>We use the service or product being initiated, and gain a better sense about how it 
                                                will be publicised. With this information, we create a pragmatic, actionable, and 
                                                quantifiable Marketing Strategy document, complete with supporting research. We 
                                                also have intricate research datasets that can be employed to classify primary state
                                                and language markets, as well as essential secondary markets, that are worth 
                                                investigating organically through effort and time activities.</p>
                                                <h3>Providing NFT Consulting Services</h3>
                                                <p>We also work on projects involving non-fungible tokens. Digital strategy, 
                                                decentralised autonomous organisations, eco-system developing, entertainment, 
                                                sporting events, and metaverse growth are some of the services we offer. We have 
                                                vast experience in all of these regions and can assist you in creating the ideal 
                                                customer experience.</p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  

               
             
          
{/*                
                <Footer /> */}
            </>
        );
    }
}
 
export default StrategicPartnership;