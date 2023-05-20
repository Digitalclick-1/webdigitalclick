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
import bannerpic from '../../../assets/images/contentbannerpic.png';
import bannerpicx from '../../../assets/images/influencermarketingx.png';
import contentmarketingpic2 from '../../../assets/images/CONTENTMARKETING2.jpg';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faChess} from '@fortawesome/free-solid-svg-icons';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
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
 
class ContentMarketing extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Creative service and Content Marketing</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {/* <li></li> */}
                            <div className='p-text' id='p-text'>

                        
                            <p>We provide a content that your company will be famed for. You'll be fully 
pleased with the outcomes. We offer Optimization links, Strategies, Designs and 
much more. 
All content marketing services are offered under one ceiling.</p>
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
                                            <li><Link className="navbarlink active" to="/contentmarketing">Creative Service And Content Marketing   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Content scheme</h3>
                            <p>The science comes first, followed by the fun.  We improve your textual experience 
with website design optimizations that can increase results by up to 50%. Following 
that, we dissect your vertical to identify top profile possibilities and prominent 
content that data shows you can outperform. We also provide you with a battle plan
based on achievable ROI and the capacity to generate organic links.  I t cannot 
be built without being ranked.</p>
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
                                                <img src={'https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-2.png'} alt="img" />
                                            </div>

                                       
                                        </OwlCarousel>
                                        <div class="row">

                                        <div class="column" >
                                        <h3>Why Choose This Service</h3>
                                        <p></p>

                                        <ul className="services-features-list">
                                            <li><FontAwesomeIcon icon={faBook} style={{color:'#B92200',fontSize:'22px'}}/> Content Research</li>
                                            <li><FontAwesomeIcon icon={faChess} style={{color:'#B92200',fontSize:'22px'}}/> Content Strategy</li>
                                            <li><FontAwesomeIcon icon={faClipboardList} style={{color:'#B92200',fontSize:'22px'}}/> Content Creation</li>
                                            <li><FontAwesomeIcon icon={faSearchPlus} style={{color:'#B92200',fontSize:'22px'}}/> SEO</li>
                                        </ul>


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Making Content</h3>
                                        <p>"Good content" is insufficient.
We create branded investments that surpass the best content in your niche, from 
composing and styling to graphics and interactives.</p>
                                        </div>
                                        <blockquote className="blockquote">
                                            <p>“Make it simple. Make it memorable. Make it inviting to look at. Make it fun to 
read.”( Leo Burnett)</p>
                                        </blockquote>
                                        </div>
                                        <div class="column" >
                                        <img src={contentmarketingpic2} ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                


                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>Link with Scalability Acquisition</h3>
                                        <p>&#8226; Untouchable connections.</p>
                                       <p> &#8226; Excellent content.</p>
                                      <p>  &#8226; Highest offer.</p><p>
We score our clients for leading terms that create thousands of links per month 
using a patented technology method that specifies passive link subjects and keeps 
getting them performing time after time. They are the links that Google wishes to 
reward on a large scale.</p>
                                        </div>
                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                        <h3>SEO Consulting</h3>
                                        <p>&#8226; Increase your return on investment.</p>
                                        <p>&#8226; Don't let on-site problems undermine off-site progress.</p>
                                        <p>We'll collaborate with you to address the issues that are preventing you from 
succeeding and provide data-driven SEO suggestions that will actually make a 
difference.</p>
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
 
export default ContentMarketing;