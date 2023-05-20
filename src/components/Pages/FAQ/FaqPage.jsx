import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class FaqPage extends React.Component {
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
                <p className="faq-heading">What kind of companies need white papers?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Any B2B vendor selling anything relatively new, relatively complex, or relatively expensive could likely benefit from a white paper. </p>
              </label>
              <input id='faq-b' type='checkbox'/>
              <label for='faq-b'>
              <p className="faq-heading">How do I get my white paper?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">After submitting your contact information, you will receive an e-mail at the address you provided. In that e-mail, there will be a link to access/download the white paper. </p>
                  </label>
              <input id='faq-c' type='checkbox'/>
              <label for='faq-c'>
                <p className="faq-heading">How Are Whitepapers Different From Blog Posts and Ebooks?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Speaking of what a whitepaper isn't ... if you're looking for a quick and interactive way to present your value to the industry, a whitepaper is not your only option. There are also ebooks and blog posts -- both of which have various differences from a whitepaper.</p>
              </label>
              <input id='faq-d' type='checkbox'/>
              <label for='faq-d'>
                <p className="faq-heading">Whitepaper Examples for Lead Generation?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">if whitepapers are so boring, why do marketers create them? Well, they're a great resource for your prospects and sales team, and they help you build credibility and trust with your readers. </p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">White paper distribution?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">after following the tips in this guide, you create an engaging, informative white paper that inspires readers to take action and deepen their relationship with your company. You mid-gate (or semi-gate) it to capture readers’ information and gain valuable insight into the interests and demographics of your consumer base</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">Handling your white paper leads?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Once you've properly gated your white paper and set up a solid distribution strategy, it's time to think about how you'll handle the leads that come in. If not properly tracked and nurtured, leads will quickly become cold and won't lead to increased sales for your company.</p>
              </label>
            </div>
            </div>
            </>
                    );
                }
            }
 
export default FaqPage;