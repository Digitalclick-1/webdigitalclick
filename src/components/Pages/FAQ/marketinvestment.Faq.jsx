import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class MarketInvestmentFaq extends React.Component {
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
                <p className="faq-heading">WHAT IS AN INVESTMENT?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">An investment is a way of putting money away, with the hope that the amount will increase over time.  </p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">WHAT INVESTMENT IS BEST FOR ME?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">The best investment for an individual depends on their personal finances and circumstances. Choosing the right product is a crucial part of creating a robust investment plan so it’s important that the investor seeks quality financial advice.</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">HOW LONG WILL IT TAKE FOR ME TO PROFIT FROM MY INVESTMENT?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text"> There is no guarantee that you will make a profit when you make an investment,<br/><br/> but it is recommended that you invest for as long a period of time as possible to increase your chances as much as possible.</p>
              </label>
            </div>
            </div>
            </>
                    );
                }
            }
 
export default MarketInvestmentFaq;