import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../../assets/images/logo2.png';
import './singleBlog.css';
class SingleBlogNavx extends React.Component {
    render(){
        return (
            <>
            
             
            <header>
          
            <div class="topnav" id="myTopnav">

            <div className="uk-container">
            <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left" style={{width:'500px',Height:'27px'}}>
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
                                <nav className="uk-navbar-container">
                                    <ul className="uk-navbar-nav">
                                        <li >
                                            <a
                                                // href="/home"
                                                // offset={() => 100}
                                                href="/"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                // offset={() => 100} 
                                                href="/about"
                                            >
                                                About
                                            </a>
                                            </li>
                                            <li>
                                            <a 
                                                href="/Process"
                                                // offset={() => 100}
                                            >
                                                Process
                                            </a>

                                            </li>
                              
                                       
                                        <li>
                                        
                                        <div className="dropdown">
    <AnchorLink className="dropbtn">Services 
    </AnchorLink>
    <div className="dropdown-content">  
      <div className="row">
        <div className="columnNav">
            <div className='parentLink'>
            <a>Blockchain Consultant <i class="fa fa-caret-down"></i></a>
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
            <a>Crypto Nft Marketing <i class="fa fa-caret-down"></i></a>
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
            <a>Blockchain Development <i class="fa fa-caret-down"></i></a>  
          
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
                   <button  className="buttonzn"><a href='/bookingform'>Book A Call</a> </button>
                    </div>
                  
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  </div> 
                                           

                                        </li>
                                        {/* <li>
                                            <a
                                                href="/clients"
                                                // offset={() => 100}
                                            >
                                                Clients
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                            href="/team"
                                            // offset={() => 100}
                                            >Team</a>
                                        </li> */}
                                        <li>
                                            <a 
                                            href="/blog"
                                            // offset={() => 100}
                                            >Blog</a>
                                        </li>
                                        <li>
                                            <a 
                                            href="/contact"
                                            // offset={() => 100}
                                            >Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </header>
          
            </>
        );
    }
}
 
export default SingleBlogNavx;