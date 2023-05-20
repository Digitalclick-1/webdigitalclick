import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class Web3Faq extends React.Component {
    render(){
        return (
          <>
         
          <div className='divwhole' style={{marginTop:'10px'}}>  
            <div className='faq'>
              <div className='headerx'>
              <h3 className='headerx-text'>FAQ</h3>
              </div>
            
              <input id='faq-a' type='checkbox'/>
              <label for='faq-a'>
                <p className="faq-heading">Is Web3.0 is more secure than web2.0?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Yes, web 3.0 is more secure than web 2.0 as web 3.0 is a decentralized blockchain technology that provides new levels of protection not available in web 2.0.</p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">can we convert existing website to web3.0?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Yes, you can convert any type of existing website into a decentralized website.</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">Which technology support web3.0?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Which technology supports web 3.0?
Technologies that support web 3.0 are Blockchain, Artificial Intelligence, Machine Learning and others.</p>
              </label>
            </div>
            </div>
            </>
                    );
                }
            }
 
export default Web3Faq;