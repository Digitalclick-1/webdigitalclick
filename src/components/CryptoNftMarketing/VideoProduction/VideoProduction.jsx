import React from 'react';
import { Link } from 'react-router-dom';
import NavigationFour from '../../Navigation/NavigationFour';
import OwlCarousel from 'react-owl-carousel3';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import BookingForm from '../../Common/bookingCall';
import '../InvestorMarketing/InvestorMarketing.css';
import '../../Sidebar/sidebar.css';
import bannerpic from '../../../assets/images/videobannerpic.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {faFileVideo} from '@fortawesome/free-solid-svg-icons';
import {faClapperboard} from '@fortawesome/free-solid-svg-icons';
import {faVideoCamera} from '@fortawesome/free-solid-svg-icons';
import {faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons';
import {faCameraRetro} from '@fortawesome/free-solid-svg-icons';
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
 
class VideoProduction extends React.Component {
    render(){
        return (
            <>
            {/* <NavigationFour /> */}
            {/* <NavigationTwo/> */}
            
            <section className="page-title-area uk-page-title" style={{backgroundImage: `url(${bannerpic})`}}>
                <div className="uk-container">
                   <h1>Video Production</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Achieve more with video</li>
                        <div className='p-text' id='p-text'>

                      
                        <p>Don’t compromise. Use content that engages your audience, inspires action, and leads to results.</p>
                        </div>
                    </ul>
                </div>
            
            </section>
            <nav className="navbarx">
    <div className="navbar-container containerx">
        <ul className="menu-itemsx">
        <li><Link to="/influncermarketing" className="navbarlink">Influencer Marketing <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                        <li><Link className="navbarlink " to="/investormarketing">Investor Marketing  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                        <li><Link className="navbarlink" to="/contentmarketing">Creative Service And Content Marketing <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                        <li><Link className="navbarlink active" to="/videoproduction">Video Production  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                        <li><Link className="navbarlink" to="/strategicpartnership">Strategic Partnership <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                        <li><Link className="navbarlinksocial" to="/socialmediamanagment">Social Media and Community Managment <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                    <h3 >We Create Videos that help you raise more Money</h3>
                        <p>If you think that appointing any videographer is enough then you may be wrong. We
can guide you better that what content does an audience want to hear and watch. 
We work with the world's poshest investment managers who will help you to 
achieve your goal.</p>
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
                                    <h3>Video Production Services</h3>
                                    <p></p>

                                    <ul className="services-features-list">
                                        <li><FontAwesomeIcon icon={faFilm} style={{color:'#B92200',fontSize:'22px'}}/> Corporative Video Production</li>
                                        <li><FontAwesomeIcon icon={faVideoCamera} style={{color:'#B92200',fontSize:'22px'}}/> Animated Videos</li>
                                        <li><FontAwesomeIcon icon={faPhotoVideo} style={{color:'#B92200',fontSize:'22px'}}/> Promotion Videos</li>
                                        <li><FontAwesomeIcon icon={faVideoCamera} style={{color:'#B92200',fontSize:'22px'}}/> Communication Videos</li>
                                        <li><FontAwesomeIcon icon={faPhotoVideo} style={{color:'#B92200',fontSize:'22px'}}/> Training Video Production</li>
                                        <li><FontAwesomeIcon icon={faFileVideo} style={{color:'#B92200',fontSize:'22px'}}/> Video Content Marketing</li>
                                        <li><FontAwesomeIcon icon={faCameraRetro} style={{color:'#B92200',fontSize:'22px'}}/> 3D Videos</li>
                                        <li><FontAwesomeIcon icon={faClapperboard} style={{color:'#B92200',fontSize:'22px'}}/> Whiteboard Animation Video</li>
                                    </ul>


                                    <div className="our-work-benefits" id='buttoncheck'>
                                    <h3>How do you raise more money?</h3>
                                    <p>Previously, raising money was not that easy, it was done personally at nifty investor
meals or face-to-face conversations. Now that we live in the digital realm, how will 
you get record breaking success?   Videos are the most efficient method to 
involve and enlighten your investors, as well as your team, regarding your 
company's objectives, proven record, and power.</p>
                                    </div>
                                    </div>
                                    <div class="column" >
                                    <iframe width="550" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
                                    </div>

                                    </div>
                                    
                                    </div>
                                    
                            </div>
                            <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h4>1: Know what they want</h4>
                                    <p>When designing investor visual content, the most crucial component to consider is 
strategic approach. We participate a few of the nation's biggest investor forums and
pay heed to what matters to them. We have a tried-and-true procedure and 
template for determining what will pique your investor's attraction. </p>
                                    </div>
                                    <div className="benifits-of-our-work" style={{marginTop:'10px'}}>
                                    <h4>2: Perfect your pitch</h4>
                                    <p>A visual must be completely obvious, precise, and entertaining. Most investing clips 
are just a guy speaking before a camera; they look plain and less entertainment. 
We assist you in developing a statement that investors will understand. We assist 
you in telling your story. </p>
                                    </div>
                                    <div className="benifits-of-our-work" style={{marginTop:'10px'}}>
                                    <h4>3: Get valuable feedback</h4>
                                    <p>Prior to actually investing, it is really essential to get feedback over what 
investor thinks and any reservations they may have. For this reason we make 
strong content with our clients in order to constantly enlighten and connect them. </p>
                                    </div>

                       
                    </article>
                </div>
            </section>  

       
           
         
      
           
            {/* <Footer /> */}
        </>
        );
    }
}
 
export default VideoProduction;