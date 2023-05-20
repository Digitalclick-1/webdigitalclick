import React from 'react';

import arrow from '../../assets/images/arrow.png';
import shapeImg2 from '../../assets/images/shape-img2.png';

 
 
class Process extends React.Component {
    render(){
        return (
            <>
                <section id="Process" className="process-section uk-process uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title uk-text-center">
                            <span>Process</span>
                            <h2>Easy ways to get ready your work</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="receiver"></i>
                                    </div>
                                    <h3>Reach Us Out</h3>
                                    <p>Feel free to contact us. Share your dreams and ideas with us and we will give you 
best and creative solutions. We are here to unlock your success door.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="cog"></i>
                                    </div>
                                    <h3>Free Consultation</h3>
                                    <p>We provide absolutely free consultancy. Our professional team will give you best 
ever advice you want for your project.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="cart"></i>
                                    </div>
                                    <h3>Request Order</h3>
                                    <p>Place your order whatever service you want from us. We will share the whole plan 
with you. Get satisfied first and order us your dream to make it true.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="home"></i>
                                    </div>
                                    <h3>Start Boosting Your Business</h3>
                                    <p>After getting satisfied pay us and start taking services from us. We assure you; we 
will provide you the best and satisfactory work.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="process-arrow-icon">
                                    <img src={arrow} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-circle-img2">
                        <img src={shapeImg2} alt="image" />
                    </div>
                </section>
            </>
        );
    }
}
 
export default Process;