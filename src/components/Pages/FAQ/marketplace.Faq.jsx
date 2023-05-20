import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class NftMarketplaceFaq extends React.Component {
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
                <p className="faq-heading">How much does it cost to Launch an NFT marketplace ?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">At times, Digitalclick network can be overwhelmed which is why in such a case, it is recommended to try minting an NFT a little bit later.</p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">How soon can we Launch the NFT marketplace ?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">will be delivered in next 30 days</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">What Tech-stack do we use ?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">NextJS (ReactJS Framework), Express JS/Node JS ,MongoDB/Mysql, AWS/Vercel/Azure</p>
              </label>
              <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              
            </div>
            </div>
            </>
                    );
                }
            }
 
export default NftMarketplaceFaq;