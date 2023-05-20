import React from 'react';
import './faq.css';
import FormBanner from '../bookingForm/formBanner';
class ComplianceFaq extends React.Component {
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
                <p className="faq-heading">What is our advantage if we are compliant?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Compliance is necessary for a sustainable business – having a clean Compliance record
supports continued business and profitability.
A strong Compliance program instils trust in our customers, (potential) employees,
investors and the authorities, and can be an effective marketing tool.
Compliance protects all of us and our business.</p>
              </label>
              <input id='faq-e' type='checkbox'/>
              <label for='faq-e'>
                <p className="faq-heading">What are risks of non-compliant behavior?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Non-compliant behaviour creates considerable risks to Brainlab. Potential sanctions
include: exclusion from tenders or requests for proposals, damage claims from customers
Page 2
and competition, penalties from authorities and lawyer fees associated with defending
against such sanctions...all of this can result in multi-million payments.</p>
              </label>
                <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">Who is responsible for Compliance?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">Everyone working for Organization is responsible for following national and international laws
and regulations <br/><br/> as well as Organization internal policies, guidelines and procedures,
including the Code of Conduct.</p>
              </label>
              <input id='settings' type='checkbox'/>
              <input id='faq-f' type='checkbox'/>
              <label for='faq-f'>
                <p className="faq-heading">Whom can I contact for a question or a report of non-compliant behavior?</p>
                <div className='faq-arrow'></div>
                  <p className="faq-text">If you have a Compliance related question/suggestion, you are not sure how to behave in
a certain situation, or you want to report a well founded concern about serious noncompliant behavior or a criminal offense, please contact your supervisor, Human
Resources representative, Compliance Officer or the Legal department as early as
possible so that we can pro-actively minimize any risk through proper investigation and
action.</p>
              </label>
            </div>
            </div>
            </>
                    );
                }
            }
 
export default ComplianceFaq;