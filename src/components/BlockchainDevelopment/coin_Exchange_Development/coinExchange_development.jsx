import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
// import blogImage from '../../../assets/images/blog-details.jpg';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import FaqPage from '../../Pages/FAQ/FaqPage';
import '../../../assets/css/layout.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import {faRotate}from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

// import './influncermarketing.css';
import bannerpic from '../../../assets/images/coinexchangebannerpic.png';
import '../../../assets/css/layout.css';
import CoinExchangeFaq from '../../Pages/FAQ/coinexchange.faq';
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
 
class CoinExchangeDevelopment extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Coin And Exchange Development</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Real liquidity for affordable money</li>
                            <div className='p-text' id='p-text' >
                            <p >We develop unique strategies for token’s market development to increase volume and liquidity.
Increase traffic and interest to your project by showing good liqudity pool and deal volumes</p>
</div>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/webdappdevelopment" className="navbarlink ">Web & Dapp Development <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/coinExchangeDevelopment">Coin & Exchange Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/nftmarketplace">NFT Marketplace <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/defidevelopment">Defi Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/smartcontract">Smart Contract <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/web3.0">Web 3.0 Development <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3>Cryptocurrency Development Firm</h3>
                            <p>Cryptocurrency, also referred to as digital currency, is one of the world's greatest 
and widest emerging industries, and becoming a member of it is simpler than you 
might imagine. Our professional staff is well-equipped to provide coin design 
services to help you make milestone in this industry.</p>

                            {/* <AnchorLink className='button' offset={() => 100} href="#form">Book a Call</AnchorLink> */}
                            {/* <button className="fill"   >Book a Call</button> */}
                            <div>
                            <Link to="/bookingform" className="uk-button uk-button-default" style={{marginBottom:'10px'}}>Book a Call</Link>
                            </div>
                           
                            <h3>Crypto exchange development process unveiled</h3>
                            
                            <p>Approach us for a full cycle of engineering — we are here to deliver a robust crypto exchange either from scratch or be responsible for any stage you require.</p>
                            <h4>1: Business Case Analysis and & Tech Consultings</h4>
                            <h4>2: Technical & Graphic Design</h4>
                            <h4>3: Smart Contract Development</h4>
                            <h4>4: UI/UX Design</h4>
                            <h4>5: Deploy Upgrading and Support </h4>
                            <h4>6: DevOps Implementation & Infrastructure optimazation</h4>

                          

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
                                        <h3>We create full cryptocurrency exchange infrastructure</h3>
                                        <p>Not only do we deliver crypto exchange software, we can also take care to custom-build each component for a full-blown DeFi ecosystem.</p>

                                        <ul className="services-features-list">
                                            <li> <FontAwesomeIcon icon={faRotate} style={{color:'#B92200',fontSize:'22px'}}/>  Mobile & web crypto exchange development</li>
                                            <li><FontAwesomeIcon icon={faWallet} style={{color:'#B92200',fontSize:'22px'}}/>   Cryptocurrency wallet development & integration</li>
                                            <li><FontAwesomeIcon icon={faHandshake} style={{color:'#B92200',fontSize:'22px'}}/>  OTC trading platform development</li>
                                            <li><FontAwesomeIcon icon={faMoneyCheckDollar} style={{color:'#B92200',fontSize:'22px'}}/>  Payment gateway development</li>
                                            <li><FontAwesomeIcon icon={faFileCode} style={{color:'#B92200',fontSize:'22px'}}/>  White-label STO platforms development</li>
                                        </ul>


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Our Coin Creation Services</h3>
                                        <p>We are a Blockchain development agency that focuses in the creation of public 
tokens and altcoins. If you require a Token for NFT venture or a coin as a venture, 
we are here for you. Our specialised Blockchain development squad and proven 
record of developments ranging from Simple Tokens to Full Fledged 
Cryptocurrencies provide liquidity and assurance that your proposal is in good 
hands</p>
                                        </div>
                                        </div>
                                        <div class="column" >
                                        <img src='https://lbcu.org/wp-content/uploads/Scholarships-550x450.jpeg' ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h3>Get your very own Cryptocurrency Exchange right now!</h3>
                            
                                        <p>Get in reach with us and we'll assist you in figuring out numerous options for your 
                                            corporate using our whitelable crypto trading solution!</p>
                                                                                    <h3>Why Do You Need A White Label Crypto Exchange?</h3>
                                                                                    <p>It is difficult to create an exchange from ground, so with us white label crypto 
                                            exchange is a primed item that can be customized to your specifications and simply
                                            played out to the industry. </p>
                                        <h4>Save money</h4>
                                                                                    <p>With a white label exchange customised to your preferences, you can redirect all of 
                                            your development expenditure to advertising and sales. Spend in liquidity rather 
                                            than what is already available to you.</p>
                                         <h4>Time is money.</h4>
                                                                                    <p>Rather than starting an exchange from inception to completion, engage your time in
                                            developing your trading market. Time is money, and money should be spent wisely.</p>
                                        <h4>How can you make money as an investor?</h4>
                                                                                    <p>You can make money as an investor through some Percent Commission, transaction
                                            fees, marketing and conversion charges.</p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
                <CoinExchangeFaq/>
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default CoinExchangeDevelopment;