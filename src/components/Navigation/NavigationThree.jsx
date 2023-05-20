import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import LaxButton from '../Common/LaxButton';
import './navthree.css';
 
class Navigation extends React.Component {
    render(){
        return (
            <>
                {/* Start Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                
                        <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active">
                                    <AnchorLink offset={() => 100} href="#home">Home</AnchorLink>
                                </li>
                                <li>
                                <AnchorLink offset={() => 100} href="#about">About</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset={() => 100} href="#blog">Blog</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset={() => 100} href="#Process">Process</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset={() => 100} href="#contact">Contact</AnchorLink>
                                </li>
                                  
<li className="uk-active dropdown">


                                    <div className="dropdown">
    <AnchorLink className="dropbtn">Services <i class="fa fa-caret-down"></i>
    <div className="dropdown-content">  
      <div className="row">
        <div className="columnNav">
            <div className='parentLink'>
            <a href='/BlockchainConsultantService'>Blockchain Consultant <i class="fa fa-caret-down"></i></a>
            </div>
          <div className='sub-links'>
          <a href="/marketinvestment">Market Investment</a>
          <a href="/compliance">Compliance</a>
          <a href="/listings">Listings</a>
          <a href="/ecosystemdesign">Ecosystem Design</a>
          <a href="/whitepaper">Whitepaper</a>
          <a href="/poc">Proof Of Concept</a>
          </div>

        </div>
        <div class="columnNav">
        <div className='parentLink'>
            <a href='/CryptoNftService'>Crypto Nft Marketing <i class="fa fa-caret-down"></i></a>
            </div>
            <div className='sub-links'>
          <a href="/influncermarketing">Influencer Marketing </a>
          <a href="/investormarketing">Investor Marketing </a>
          <a href="/contentmarketing">Creative Service & Content Marketing </a>
          <a href="/videoproduction">Video Production </a>
          <a href="/strategicpartnership">Strategic Partnership </a>
          <a href="/socialmediamanagment">Social media Commuinty & Managment </a>
          </div>
        </div>
        <div class="columnNav">
        <div className='parentLink'>
            <a href='/BlockchainDevelopmentService'>Blockchain Development <i class="fa fa-caret-down"></i></a>  
          
            </div>
            <div className='sub-links'>
          <a href="/webdappdevelopment">Web & Dapp Development</a>
          <a href="/coinExchangeDevelopment">Coin & Exchange Development</a>
          <a href="/nftmarketplace">NFT Marketplace</a>
          <a href="/defidevelopment">Defi Development</a>
          <a href="/smartcontract">Smart Contract</a>
          <a href="/web3.0">Web3.0 Development</a>
          </div>
        </div>
      </div>
    </div>
    </AnchorLink>

  </div> 
  </li>






                                {/* <li>
                                    <AnchorLink offset={() => 100} href="#clients">Clients</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink offset={() => 100} href="#team">Team</AnchorLink>
                                </li> */}

                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area uk-dark" data-uk-sticky="animation: uk-animation-slide-top;">
                    <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a 
                                    href="/"
                                >
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>

                            <div className="uk-navbar-toggle" id="navbar-toggle" uk-toggle="target: #offcanvas-flip">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="navbar uk-navbar-right">
                                <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                                    <ul className="uk-navbar-nav">
                                        <li className="uk-active">
                                            <AnchorLink
                                                href="#home"
                                                offset={() => 100}
                                            >
                                                Home
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                offset={() => 100} 
                                                href="#about"
                                            >
                                                About
                                            </AnchorLink>
                                        </li>
                                        <li>
                                        
                                        <div className="dropdown">
    <AnchorLink  offset={() => 100} 
                                                 className="dropbtn">Services 
    </AnchorLink>
    <div className="dropdown-content">  
      <div className="row">
        <div className="columnNav">
            <div className='parentLink'>
            <a href='/BlockchainConsultantService'>Blockchain Consultant <i class="fa fa-caret-down"></i></a>
            </div>
          <div className='sub-links'>
          <a href="/marketinvestment">Market Investment</a>
          <a href="/compliance">Compliance</a>
          <a href="/listings">Listings</a>
          <a href="/ecosystemdesign">Ecosystem Design</a>
          <a href="/whitepaper">Whitepaper</a>
          <a href="/poc">Proof Of Concept</a>
          </div>

        </div>
        <div class="columnNav">
        <div className='parentLink'>
            <a href='/CryptoNftService'>Crypto Nft Marketing <i class="fa fa-caret-down"></i></a>
            </div>
            <div className='sub-links'>
          <a href="/influncermarketing">Influencer Marketing </a>
          <a href="/investormarketing">Investor Marketing </a>
          <a href="/contentmarketing">Creative Service & Content Marketing </a>
          <a href="/videoproduction">Video Production </a>
          <a href="/strategicpartnership">Strategic Partnership </a>
          <a href="/socialmediamanagment">Social media Commuinty & Managment </a>
          </div>
        </div>
        <div class="columnNav">
        <div className='parentLink'>
            <a href='/BlockchainDevelopmentService'>Blockchain Development <i class="fa fa-caret-down"></i></a>  
          
            </div>
            <div className='sub-links'>
          <a href="/webdappdevelopment">Web & Dapp Development</a>
          <a href="/coinExchangeDevelopment">Coin & Exchange Development</a>
          <a href="/nftmarketplace">NFT Marketplace</a>
          <a href="/defidevelopment">Defi Development</a>
          <a href="/smartcontract">Smart Contract</a>
          <a href="/web3.0">Web3.0 Development</a>
          </div>
        </div>
        <div class="columnNav">
        <div className='parentLink'>
            
            </div>
            <div className='parentHead'>
                <h4>Need a Custom Marketing Plan?</h4>
                <div className='subhead'>
                    <h6>
                        Contact Us For More Information.
                    </h6>
                    <div className='BookcallBtn'>
                   <button  className="buttonzn"><a className="bookBtn" href='/bookingform'>Book A Call</a> </button>
                    </div>
                  
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  </div> 
                                           

                                        </li>
                                        <li>
                                            <AnchorLink 
                                                href="#Process"
                                                offset={() => 100}
                                            >
                                                Process
                                            </AnchorLink>
                                        </li>
                                        {/* <li>
                                            <AnchorLink 
                                                href="#clients"
                                                offset={() => 100}
                                            >
                                                Clients
                                            </AnchorLink>
                                        </li> */}
                                        {/* <li>
                                            <AnchorLink 
                                            href="#team"
                                            offset={() => 100}>Team</AnchorLink>
                                        </li> */}
                                        <li>
                                            <AnchorLink 
                                            href="#blog"
                                            offset={() => 100}>Blog</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                            href="#contact"
                                            offset={() => 100}>Contact</AnchorLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Navbar Area */}
            </>
        );
    }
}
 
export default Navigation;




