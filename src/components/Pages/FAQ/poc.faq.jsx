import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class PocFaq extends React.Component {
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
                <p className="faq-heading">What is the value of proof of concept?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Developing a proof of concept can help a product owner to identify potential technical and logistical issues that might interfere with success. It also provides the opportunity for an organization to solicit internal feedback about a promising product or service, while reducing unnecessary risk and exposure and providing the opportunity for stakeholders to assess design choices early in the development cycle.</p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">Steps to write a proof of concept?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Many industries, including the software, hardware, drug discovery, manufacturing, science and engineering sectors, use the proof-of-concept process to pursue ideas before approving them for further testing and, eventually, full-scale production.</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">How do you show proof of concept</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text"> To show proof of concept, you create a demonstration or document that describes how you can produce and sell the product or service you have proposed.</p>
              </label>
            </div>
            </div>
            </>
                    );
                }
            }
 
export default PocFaq;