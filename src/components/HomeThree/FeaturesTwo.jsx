import React from 'react';
 
class FeaturesTwo extends React.Component {
    render(){
        return (
            <section className="uk-features uk-dark features-area">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m">
                        <div className="uk-item" >
                           
                            <div className="single-features-box">
                            <a href='/BlockchainConsultantService'>
                                <div className="icon">
                                <i class="fa-solid fa-people-carry-box"></i>
                                    {/* <img src={require("../../assets/images/blockchain.consultant.png")} alt="dot" className="color-dot" style={{color:"#ffffff"}} /> */}
                                 

                                </div>
                                <h3>Blockchain Consultant</h3>
                                <div className="bar"></div>
                                <p>We help you to achieve your blockchain goals and provide most cutting-edge blockchain solutions.Developing, measuring, and vindicating novel ideas.Reliable and secure decentralized technologies will help you to explore more 
business models. </p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                                </a>
                            </div>

                        </div>

                        <div className="uk-item">
                            <div className="single-features-box active">
                            <a href='/CryptoNftService'>
                                <div className="icon">
                                <i className="flaticon-shout"></i>
                                </div>
                                <h3>Crypto & Nft Brand Marketing</h3>
                                <div className="bar"></div>
                                <p>We offer to optimize your contents for search engine optimization as we know which key phrases investors use. Allow the experts to layout your business model so that you can fixate on what you desire.
</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                                </a>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box">
                            <a href='/BlockchainDevelopmentService'>
                                <div className="icon">
                                <i class="fa-solid fa-code"></i>
                                </div>
                                <h3>Blockchain Development</h3>
                                <div className="bar"></div>
                                <p>If you are searching for a reliable blockchain development partner, Digital Click has a solution.

As a part of the Digital Click agency, highly experienced crypto developers have worked in the company for so many years.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FeaturesTwo;