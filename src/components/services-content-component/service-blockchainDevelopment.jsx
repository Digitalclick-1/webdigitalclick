import React from 'react';
import { Link } from 'react-router-dom';
import marketplace from './../../assets/icons/marketplace.png';
import exchange from './../../assets/icons/exchange.png';
import development from './../../assets/icons/development.png';
import defi from './../../assets/icons/defi.png';
import smartcontract from './../../assets/icons/smartcontract.png';
import web3 from './../../assets/icons/web3.png';
class Sevrice_BlockchainDevelopment extends React.Component {
    render(){
        return (
            <section className="services-area uk-services uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                <img src={development}></img>
                                </div>
                                <h3><Link to="/webdappdevelopment">Web & Dapp Development</Link></h3>
                                <div className="bar"></div>
                                <p>Dapp Development helps you in constructing decentralized packages with backend 
code going for walks on a decentralized peer-to-peer network...</p>

                                <Link to="/webdappdevelopment" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                <img src={exchange}></img>
                                </div>
                                <h3><Link to="/coinexchangedevelopment">Coin & Exchange Development</Link></h3>
                                <div className="bar"></div>
                                <p>We help in Building merchandise for any use case. We give the maximum 
dependable manner to construct your personal cryptocurrency exchange...</p>

                                <Link to="/coinexchangedevelopment" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                 <img src={marketplace}></img>
                                </div>
                                <h3><Link to="/nftmarketplace">NFT Market Place</Link></h3>
                                <div className="bar"></div>
                                <p>We power all components of advertising and marketing techniques via way of 
means of putting in disruptive strategies... </p>

                                <Link to="/nftmarketplace" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                <img src={defi}></img>
                                </div>
                                <h3><Link to="/defidevelopment">Defi Development</Link></h3>
                                <div className="bar"></div>
                                <p>You need to get a effective DeFi platform a good way to make your earnings soar...</p>

                                <Link to="/defidevelopment" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                <img src={smartcontract}></img>
                                </div>
                                <h3><Link to="/smartcontract">Smart Contract</Link></h3>
                                <div className="bar"></div>
                                <p>The solidity-primarily based totally non-editable mutual agreements function the 
complicated shape of the DeFi gadget without a conflict...</p>

                                <Link to="/smartcontract" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                <img src={web3}></img>
                                </div>
                                <h3><Link to="/web3.0">Web3 Development</Link></h3>
                                <div className="bar"></div>
                                <p>The gain of Web3 is the ability to get entry to information from everywhere, 
particularly because of the huge use of smartphones and cloud applications... </p>

                                <Link to="/web3.0" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="pagination-area">
                        <ul className="uk-pagination uk-flex-center">
                            <li><Link to="#"><span className="flaticon-back"></span></Link></li>
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li className="uk-active"><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#"><span className="flaticon-right"></span></Link></li>
                        </ul>
                    </div> */}
                </div>
            </section>
        );
    }
}
 
export default Sevrice_BlockchainDevelopment;