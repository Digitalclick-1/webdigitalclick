import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import bannerpic from '../../../assets/images/nftbannerpic.png';
import '../../Sidebar/sidebar.css';
import NftMarketplaceFaq from '../../Pages/FAQ/marketplace.Faq';
import {faStore} from '@fortawesome/free-solid-svg-icons';
import {faFileShield} from '@fortawesome/free-solid-svg-icons';
import {faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons';

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
 
class Nftmarketplace extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>NFT MarketPlace</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>The Technology Used For NFT Marketplace Solution</li>
                            <div className='p-text' id='p-text'>
                        
                            <p>We're a group of especially professional builders, who intends to create a custom
                                    Nft crypto Marketplace on your businesses. The blockchain technologies our 
                                    builders use to create better and smooth Market Place.</p>
                                            
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
                                            <li><Link className="navbarlink" to="/coinExchangeDevelopment">Coin & Exchange Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/nftmarketplace">NFT Marketplace <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink " to="/defidevelopment">Defi Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
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
                                        <h3 >Our Custom NFT Marketplace Is Perfect For?</h3>
                            <p>It could be one of the maximum revenue-pushed marketplaces withinside the 
                                        coming years. Develop a market in your enterprise, as our growing group is a 
                                        professional in growing custom designed market reliable with our client's 
                                        requirements. Our NFT crypto market are ideal for
                                        </p>
                                        <h5>&#x2022;Artist</h5>
                                        <h5>&#x2022;Entrepreneurs</h5>
                                        <h5>&#x2022;Collectors</h5>
                                        <h5>&#x2022;SEM's</h5>
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
                                        <h3>What We Offer</h3>
                                        <p></p>

                                        <ul className="services-features-list">
                                            <li><FontAwesomeIcon icon={faStore} style={{color:'#B92200',fontSize:'22px'}}/> Deploy NFT Marketplaces</li>
                                            <li><FontAwesomeIcon icon={faFileShield} style={{color:'#B92200',fontSize:'22px'}}/> Secure & Reliable Infrastructure</li>
                                            <li><FontAwesomeIcon icon={faMoneyBillTransfer} style={{color:'#B92200',fontSize:'22px'}}/> Unbroken NFT Transactions</li>
                                        </ul>
                                        </div>
                                        <div class="column" >
                                        <img src='https://www.hitechnectar.com/wp-content/uploads/2022/06/Robot-Locomotion-Principles-550x450.jpg' ></img>
                                        </div>
                                        


                                        </div>
                                        </div>
                                </div>
                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h3>Why Choose Our NFT Marketplace Solutions?</h3>
                                        <p>We are a specialised NFT shop improvement business enterprise that assists 
                                                        companies in developing their very own market for bidding, selling, and buying 
                                                        and selling of belongings sponsored with the aid of using Nft crypto. Our 
                                                        developer creates a whole internet site wherein any object can be tokenized, 
                                                        whether or not it is artwork, gaming cards, software program licenses, virtual 
                                                        collectibles, or real-international belongings.</p>
                                                        <h5>&#x2022;Multiple Payment Options</h5>
                                                        <h5>&#x2022;Enterprise Grade Security</h5>
                                                        <h5>&#x2022;Fully Customizable</h5>
                                                        <h5>&#x2022;User Friendly Platform</h5>
                                                        <h5>&#x2022;Rich Features and integration</h5>

                                        </div>

                           
                        </article>
                    </div>
                </section>  

               
             
          
               <NftMarketplaceFaq/>
                {/* <Footer /> */}
            </>
        );
    }
}
 
export default Nftmarketplace;