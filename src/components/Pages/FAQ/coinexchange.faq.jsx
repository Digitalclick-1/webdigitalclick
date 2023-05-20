import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class CoinExchangeFaq extends React.Component {
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
                <p className="faq-heading">How much does it cost to make your own cryptocurrency coin ?
</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">How much does it cost to make your own cryptocurrency coin ?
</p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">How much time will it take to develop my coin?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">our team can develop your coins within weeks.</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">How do you charge for the services?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">After discussing everything with our expert team our customer representative will discuss all the payment methods and billing details with you.</p>
              </label>
              <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">What Tech-stack do we use ?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">NextJS (ReactJS Framework), Express JS/Node JS ,MongoDB/Mysql, AWS/Vercel/Azure</p>
              </label>
            </div>
            </div>
            </>
                    );
                }
            }
 
export default CoinExchangeFaq;