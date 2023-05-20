import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Collapsible from 'react-collapsible';
import VideoSlider from '../../Common/videoSlider';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import BookingForm from '../../Common/bookingCall';
import FaqPage from '../../Pages/FAQ/FaqPage';
import './InvestorMarketing.css';
import Sidebar from '../../Sidebar/sidebar';
import '../../Sidebar/sidebar.css';
import bannerpic from '../../../assets/images/investorbannerpic.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
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
 
class InvestorMarketing extends React.Component {

    constructor(props) {
        super(props);
        this.testRef = React.createRef();
      }
      scrollToElement = () => this.testRef.current.scrollIntoView();
    

    render(){

        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                
                <section className="page-title-area uk-page-title" style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                       <h1>Investor Marketing</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Leading Crypto Investor Marketing</li>
                            <div className='p-text' id='p-text' >

                        
                            <p>We are front-runners in Crypto Investor Marketing. Partnering with us will not 
make you any regret in future. With this service several rich enterprise 
proprietors and marketers have invested closely on this virtual asset.</p>
</div>
                        </ul>
                    </div>
                
                </section>
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/influncermarketing" className="navbarlink">influencer Marketing <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/investormarketing">Investor Marketing  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/contentmarketing"> creative service and Content Marketing <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="videoproduction">Video Production  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/strategicpartnership">Strategic Partnership <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlinksocial" to="/socialmediamanagment">Social Media and Community Managment  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Our Proficient Tactic toward Crypto Investor Marketing</h3>
                            <p>Our Crypto Investor Market is attractive, innovative, and promising. We have 
recognized plans that help crypto initiatives to grow, scale and evolve a 
framework as a systematic framework needs to be adapted to bring it into the 
top crypto listing. 
You just need to tell us your dreams; we will help you to make them into reality.  
We shall do the promotional process for you, developing the liquidity of your 
venture. Moreover, we will assist you to create an advantageous network vibe. 
We divide it into five stages: awareness, trust, education, engagement, and 
momentum.
The key for crypto & blockchain initiatives to develop is with the aid of using 
setting up a robust network after which letting it develop and expand the 
surroundings via decentralization of advertising efforts. In different words, you 
want to construct a network after which navigate & guide its natural boom as an 
evolving decentralized entity.</p>
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

                                            <div className="item">
                                                <img src={'https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-2.png'} alt="img" />
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
                                        <h3>Being the Part of Biggest Crypto Conference in the World</h3>
                                        <p>We attend the World’s biggest Blockchain Conferences and Exhibitions. The 
Blockchain companies co-place with the IoT Tech Expo, AI & Big Data Expo, and 
the Cyber Security & Cloud Expo so that you can discover the convergence of 
those technologies in a single place. The convention agendas will gift a sequence
of professional keynotes, interactive panel discussions and solutions of your 
problems.  This explores the important sectors which include; retail, monetary 
services, healthcare, insurance, energy, music, government, actual property and 
more.</p>
                                        </div>
                                        </div>
                                        <div class="column" >
                                        <img src='https://i.pinimg.com/564x/3a/80/9e/3a809ec448d3e91e0b277a6d47979282.jpg' ></img>
                                        </div>

                                        </div>
                                        
                                        </div>
                                        
                                </div>
                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Crypto Investor Influencer</h3>
                                        <p>Blockchain is set technology, collaboration and community. Variety of blockchain
schooling and advertising is necessary for progression. All blockchain tasks want 
to develop their ecosystem. Our Crypto influencers will not only guide you but 
help you to reach the limits of sky. Some blockchain influencers have been 
teaching for a long term. You can without difficulty discover influencers with us in
a discipline that you want to pursuit. Start your venture now! </p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
           
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default InvestorMarketing;