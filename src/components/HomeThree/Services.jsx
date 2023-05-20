import React from 'react';
import { Link } from 'react-router-dom';
import blockchain1 from './../../assets/icons/blockchain.png';
import crytocurrancy from './../../assets/icons/cryptocurrency.png';
import nft from './../../assets/icons/nft.png';
import metaverse from './../../assets/icons/metaverse.png';
import globe from './../../assets/icons/globe.png';
import fintech from './../../assets/icons/fintech.png';
class Services extends React.Component {
    render(){
        return (
            <>
                <section id="services" className="services-area  uk-services uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>What We Do</span>
                            <h2>Industry We Serve</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-services">
                                    <div className="icon" >
                                    <img src={blockchain1}></img>
                                    </div>
                                    <h3>Blockchain</h3>

                                    {/* <i className="flaticon-right link-btn"></i> */}

                                    {/* <Link to="/BlockchainServices" className="link uk-position-cover"></Link> */}
                                </div>
                            </div>



                            <div className="item">
                                <div className="single-services">
                                    <div className="icon">
                                    <img src={crytocurrancy}></img>
                                    </div>
                                    <h3>Crypto</h3>

                                    {/* <i className="flaticon-right link-btn"></i>

                                    <Link to="/cryptoservices" className="link uk-position-cover"></Link> */}
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-services">
                                    <div className="icon">
                                    <img src={nft}></img>
                                    </div>
                                    <h3>NFT</h3>

                                    {/* <i className="flaticon-right link-btn"></i>

                                    <Link to="/nftservices" className="link uk-position-cover"></Link> */}
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-services active">
                                    <div className="icon">
                                    <img src={metaverse}></img>
                                    </div>
                                    <h3>Metaverse</h3>

                                    {/* <i className="flaticon-right link-btn"></i>

                                    <Link to="/metaverseservices" className="link uk-position-cover"></Link> */}
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-services">
                                    <div className="icon">
                                    <img src={globe}></img>
                                    </div>
                                    <h3>Web 3.0</h3>

                                    {/* <i className="flaticon-right link-btn"></i>

                                    <Link to="/web3services" className="link uk-position-cover"></Link> */}
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-services">
                                    <div className="icon">
                                    <img src={fintech}></img>
                                    </div>
                                    <h3>Fintech</h3>

                                    {/* <i className="flaticon-right link-btn"></i>

                                    <Link to="/fintechservices" className="link uk-position-cover"></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default Services;