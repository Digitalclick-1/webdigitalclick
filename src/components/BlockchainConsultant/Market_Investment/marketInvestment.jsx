import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import MarketInvestmentFaq from '../../Pages/FAQ/marketinvestment.Faq';
import bannerpic from '../../../assets/images/whitepaper.png';
import sliderx from '../../../assets/images/marketinvestmentsliderx.png';
import sliderxx from '../../../assets/images/marketinvestmentsliderxx.png';
import Popup from 'reactjs-popup';
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
 
const MarketInvestment =()=> {
    const [buttonpopup,setbuttonpopup]=useState(false);
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                
                <section className="page-title-area uk-page-title" style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                       <h1>Market Investment</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Investing in the Market</li>
                            <div className='p-text' id='p-text'>

                        
                            <p>We provide multiple investing options to bring your venture to the top notch. With 
our innovative equity research techniques and trustable consulting, you can 
strengthen your weak points, become investor-ready, and increase traction</p>
</div>
                        </ul>
                    </div>
                
                </section>
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/marketinvestment " className="navbarlink active">Market Investment <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink " to="/compliance"> Compliance <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Workflow for Investor Outreach</h3>
                            <p>You want to build your venture creation groundwork with very well benchmarks as 
the pioneer of a startup. Our hands-on strategy and expert knowledge are 
accompanied by strong funding suggestions and evaluation of performance.</p>
                     
                            <div>
                            <Link to="/bookingform" className="uk-button uk-button-default" style={{marginBottom:'10px'}}>Book a Call</Link>
                            </div>


                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={'https://static.seekingalpha.com/uploads/2022/2/7/saupload_Capture_9.png'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://static.seekingalpha.com/uploads/2022/1/10/saupload_Capture_5.png'} alt="img" />
                                            </div>
                                        </OwlCarousel>
                                     
                                        <div class="row">

                            


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Company Evaluation and Recommendations</h3>
                                        <p>Auditing is a multi-layered assessment of the viability of your project. You may need
to start preparing your key metrics and technical roadmap concurrently to avoid
wasting your financial and/or throughout assets on the investment phase.
Our   experienced   team   can   assist   your   venture   in   determining   and   reducing
potential risks to your shareholders. We conduct cross-departmental engagement to
examine and assess your token economic principles, route map, operating model,
and total market analysis. Your fundraising strategy will gain traction by modeling
optimistic/pessimistic circumstances and conducting technical due diligence.</p>
                                        </div>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Investor Selection and Outreach</h3>
                                        <p>The   investor-relations   market   has   become   saturated   as   a   result   of   ongoing
competitive pressure among startups looking for potential funding options at the
beginning of their business launches. Join forces with us to connect with opinion
makers and marketers in your industry and open the door to a plethora of financial
assets. Reach out to a specific group of investors to increase your chances of
closing a funding round. Vertical orientation, regional orientation, and fundraising
round orientation are among our targeting criteria.</p>
                                       </div>

                                       <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Investor Nurturing/Development</h3>
                                        <p>It's never simple to gain trust from the start, so we nourish investors with frequent
updates, headlines, and key milestones. Your startup's entire focus on financing is
not a winning strategy. 
Reach out to a specific investor group to boost your odds of shuttering a funding
round.  Linear  orientation,  provincial  orientation,  and  soliciting  donations round
orientation are among our targeting criteria</p>
                                       </div>
                                

                                        </div>
                                        
                                        </div>
                                        
                                </div>


                           
                        </article>
                    </div>
                </section>  
                <MarketInvestmentFaq/>
           
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
 
export default MarketInvestment;