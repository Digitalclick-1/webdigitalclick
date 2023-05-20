import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import bannerpic from '../../../assets/images/defibannerpic.png';
import DefiFaq from '../../Pages/FAQ/Defi.Faq.jsx';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faFileContract} from '@fortawesome/free-solid-svg-icons';
import {faExchange} from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
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
 
class DefiDevelopment extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Defi Development</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>DeFi Development</li>
                            <div className='p-text' id='p-text'>

                          
                            <p>Decentralized finance (DeFi) includes digital financial assets
                            and   smart   contracts,   protocols,   and   decentralised   applications   constructed   on
                            Ethereum. Simply put, it is financial software that is constructed on the blockchain
                            and   can   be   linked   together.</p>
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
                                            <li><Link className="navbarlink " to="/coinExchangeDevelopment">Coin & Exchange Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/nftmarketplace">NFT Marketplace <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/defidevelopment">Defi Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Design a Blockchain and a DAPP project for your business:</h3>
                            <p>Decentralized applications, or dApps, are developed on blockchain to alleviate any 
central power over the operating system while bringing monetary and operational 
productivity gains that is not found in traditional apps. Furthermore, because they 
are distributed across hundreds of nodes and do not rely on a centralized computer,
dApps are far more protected.</p>
                            {/* <AnchorLink className='button' offset={() => 100} href="#form">Book a Call</AnchorLink> */}
                            {/* <button className="fill"   >Book a Call</button> */}
                            <Link to="/bookingform" className="uk-button uk-button-default">Book a Call</Link>


                          

                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={'https://ideausher.com/wp-content/uploads/2021/10/How-Defi-works.jpg'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://ideausher.com/wp-content/uploads/2021/10/Top-Five-DeFi-Developments.jpg'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://cryptocomes.com/sites/default/files/styles/1200x/public/2020-10/4950.jpg?itok=Q2_5axXP'} alt="img" />
                                            </div>
                                        </OwlCarousel>
                                        <div class="row">

                                        <div class="column" >
                                        <h3>Our Decentralized Applications Services</h3>
                                        <p></p>

                                        <ul className="services-features-list">
                                            <li><FontAwesomeIcon icon={faUser} style={{color:'#B92200',fontSize:'22px'}}/> User Interference</li>
                                            <li><FontAwesomeIcon icon={faFileContract} style={{color:'#B92200',fontSize:'22px'}}/> Smart contract</li>
                                            <li><FontAwesomeIcon icon={faArrowCircleUp} style={{color:'#B92200',fontSize:'22px'}}/> Dapp upgrade</li>
                                            <li><FontAwesomeIcon icon={faExchange} style={{color:'#B92200',fontSize:'22px'}}/> Decentralized exchange Development</li>
                                            <li><FontAwesomeIcon icon={faDatabase} style={{color:'#B92200',fontSize:'22px'}}/> Decentralized storage</li>
                                            <li><FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'#B92200',fontSize:'22px'}}/> Dapp testing</li>
                                        </ul>


                                        <div className="our-work-benefits" id='buttoncheck'>
                                        <h3>Ready to develop your own Blockchain and DAPP?</h3>
                                        <p>Our most experienced squad provides a wide variety of software development 
services. We will provide you the best results and guide you step by step. We are 
excited to fulfill our clients’ anticipations and to build consumer experience 
solutions. </p>
                                        </div>
                                        </div>
                                        <div class="column" >
                                        <img src='https://www.hitechnectar.com/wp-content/uploads/2022/06/Robot-Locomotion-Principles-550x450.jpg' ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h3>Build and Deploy Cutting-Edge Blockchain Solution</h3>
                                        <h4>Custom Blockchain Development:</h4>
                                        <p>Blockchain-based businesses have their own business marketplaces for things like 
online identity management, logistics, big data collection and storage, authenticity 
and integrity tracking, and so on </p>
                                        <h4>Wallet Development</h4>
                                        <p>App wallets offer a stable and sound method of storing digital assets. You can 
integrate a safe and consumer friendly multi-coin crypto wallet within your own 
crypto product. Using a reputable development services ensures that you will 
receive a perfectly polished product that enrages the right balance among both 
function and form. </p>
<h4>DAAP Development</h4>
                                        <p>All it requires from oneself is simply an idea and we will craft it. We can create and 
help in handling decentralised applications. You can start from scratch or use an 
existing blockchain.</p>
                                        </div>

                           
                        </article>
                    </div>
                </section>  
               <DefiFaq/>
           
               
             
          
               
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default DefiDevelopment;