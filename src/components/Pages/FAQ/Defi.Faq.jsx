import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class DefiFaq extends React.Component {
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
                <p className="faq-heading">What is defi?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">By merging the principles of finance and technology, Decentralized Finance (DeFi) is given through a blockchain network. It's open-source, and it's designed to increase accessibility by serving as a viable alternative to established financial services. Operations are automated without the use of a middleman</p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">What Defi benefits?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">What is the Benefits of DeFi?
Decentralized Finance (DeFi) has numerous advantages. It ensures that transactions are processed quickly and at a reasonable cost. In the absence of third parties, complete automation assures great anonymity.</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">What is Defi Secure?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Blockchain technology is transparent and non-hackable which makes it secure.</p>
              </label>
              <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">What Are the Defi Apps?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">DeFi apps represent Decentralized Finance Apps. these are apps built on the blockchain like Uniswap, Pancakeswap etc</p>
              </label>
            </div>
            </div>
            </>
                    );
                }
            }
 
export default DefiFaq;