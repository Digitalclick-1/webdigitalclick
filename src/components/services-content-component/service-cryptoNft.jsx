import React from 'react';
import { Link } from 'react-router-dom';
import influncer from './../../assets/icons/influncer.png';
import investor from './../../assets/icons/investor.png';
import content from './../../assets/icons/content.png';
import movie from './../../assets/icons/movie.png';
import strategic from './../../assets/icons/strategic.png';
import socialmedia from './../../assets/icons/socialmedia.png';
class Sevrice_CryptoNft extends React.Component {
    render(){
        return (
            <section className="services-area uk-services uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                   <img src={influncer}></img>
                                </div>
                                <h3><Link to="/influncermarketing">Influencer Marketing</Link></h3>
                                <div className="bar"></div>
                                <p>Our team mates are the influencer advertising experts. We've labored on loads of 
campaigns...</p>

                                <Link to="/influncermarketing" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

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
                                <img src={investor}></img>
                                </div>
                                <h3><Link to="/investormarketing">Invester Marketing</Link></h3>
                                <div className="bar"></div>
                                <p>We connects corporations with the main traders worldwide. We are efficient in 
constructing a community...</p>

                                <Link to="/investormarketing" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

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
                                <img src={content}></img>
                                </div>
                                <h3><Link to="/contentmarketing">Creative Service & Content Marketing</Link></h3>
                                <div className="bar"></div>
                                <p>The Blockchain Creatives community regroups highly skilled specialists such as 
showed senior experts and younger virtual natives alike...</p>

                                <Link to="/contentmarketing" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

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
                                <img src={movie}></img>
                                </div>
                                <h3><Link to="/videoproduction">Video Production</Link></h3>
                                <div className="bar"></div>
                                <p>Don’t compromise. Use content material that engages your audience, evokes 
action, and ends in results...</p>

                                <Link to="/videoproduction" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

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
                                <img src={strategic}></img>
                                </div>
                                <h3><Link to="/strategicpartnership">Strategic Partnership</Link></h3>
                                <div className="bar"></div>
                                <p>Through our strategic partnership program, we will assist cryptocurrency or 
blockchain associated initiatives in lots of one-of-a-kind ways...</p>

                                <Link to="/strategicpartnership" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

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
                                <img src={socialmedia}></img>
                                </div>
                                <h3><Link to="/socialmediamanagment">Social Media & Community Managment</Link></h3>
                                <div className="bar"></div>
                                <p>We’ve been withinside the blockchain enterprise for years and realize the social 
media content material that customers are searching for...</p>

                                <Link to="/socialmediamanagment" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

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
 
export default Sevrice_CryptoNft;