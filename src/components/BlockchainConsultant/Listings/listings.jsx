import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Collapsible from 'react-collapsible';
// import VideoSlider from '../../Common/videoSlider';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import FaqPage from '../../Pages/FAQ/FaqPage';
// import '../../../assets/css/layout.css';
import bannerpic from '../../../assets/images/listings.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import '../../../components/Sidebar/sidebar.css';
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
 
class Listings extends React.Component {

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
                       <h1>Listings</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Open up your project for the Crypto market!</li>
                            <div className='p-text' id='p-text'>

                        
                            <p>With us the process of passing through listing criteria would be easier as possible. We will provide all the necessary guidelines for listing your token without supposed difficulties.</p>
</div>
                        </ul>
                    </div>
                
                </section>
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/marketinvestment" className="navbarlink">Market Investment <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink " to="/compliance">Compliance <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/ecosystemdesign">Ecosystem Design <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="videoproduction">Listings <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Do you want to be one of the top crypto leaders?</h3>
                            <p>Reach us to go over all of the requirements for listing and to help you navigate thru 
the mangled wreck!</p>
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

                            


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Listing on cryptocurrency websites</h3>
                                        <p>We shall help you in price-tracking websites that aggregate all cryptocurrency 
market valuation, costs, turnover ratio, and so on in one spot. Let yourself Gain 
more confidence and consideration from the crypto community, and establish a 
good stream of appeal for fresh investors and traders to your proposal.</p>
                                        </div>
                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Listing process</h3>
                                        <h4>Step 1</h4>
                                        <h5>Your proposal's regulatory evaluation</h5>
                                        <h4>STEP 2</h4>
                                        <h5>Technical Parameters must be prepared  in order to integrate with CMC</h5>
                                        <h4>Step 3</h4>
                                        <h5>Examining the completion of CMC specifications</h5>
                                        <h4>Step 4</h4>
                                        <h5>Process simplification that provides a quick listing without challenges and bureaucracy</h5>
                                        <h4>Step 5</h4>
                                        <h5>Control of outcomes</h5>
                                        </div>
                            

                                        </div>
                                        
                                        </div>
                                        {/* <div>
                                            <Steps/>
                                        </div> */}
                                        
                                </div>
                                <div>
                            
                                </div>

                                
                           
                        </article>
                    </div>
                </section>  
                {/* <FaqPage/> */}
           
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default Listings;