import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/images/logo2.png';
 
class SingleBlogNav extends React.Component {
    render(){
        return (
            <>
                {/* Start Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                
                        <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                            <ul className="uk-navbar-nav">
                                <li >
                                    <a
                                    //  offset={() => 100}
                                     href="/">Home</a>
                                </li>
                                <li>
                                    <a 
                                    // offset={() => 100}
                                     href="/about">About
                                     </a>
                                </li>
                                <li className="uk-active">
                                    <AnchorLink
                                    //  offset={() => 100} 
                                     href="/services">Services</AnchorLink>
                                </li>
                                <li>
                                    <a
                                    //  offset={() => 100}
                                      href="#Process">Process</a>
                                </li>
                                <li>
                                    <a 
                                    // offset={() => 100}
                                    href="/clients">Clients
                                    </a>
                                </li>
                                <li>
                                    <a 
                                    // offset={() => 100}
                                     href="/team">Team
                                    </a>
                                </li>
                                <li>
                                    <a
                                    //  offset={() => 100}
                                     href="/blog">Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                    //  offset={() => 100} 
                                     href="/contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area uk-dark" data-uk-sticky="animation: uk-animation-slide-top;">
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
                                <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
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
                                        <li 
                                        // className="uk-active"
                                        >
                                            <a 
                                                href="/services"
                                                // offset={() => 100}
                                            >
                                                Services
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
                                        </li>
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
                </header>
                {/* End Navbar Area */}
            </>
        );
    }
}
 
export default SingleBlogNav;