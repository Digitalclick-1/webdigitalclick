import React,{useState} from "react";
import './bookingcall.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const BookingForm=()=>{

const [userName,setUserName]=useState();
const [email, setEmail] = useState();
const [Message, setMassage] = useState();
const [company, setCompany] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_go70juu', 'template_da1p90q', form.current, '6fQS4UE2P3vnjGNy4')
      .then((result) => {
          console.log(result.text);
          
          alert('Thank you for getting in touch!');
          console.log("msg successful");
      }, (error) => {
          console.log(error.text);
      });

      setUserName('');
      setEmail('');
      setMassage('');
      setCompany('');
    };
    return(


      <div class="row-whole">
      <div class="row">
       

                                        <div class="column" id="columnx">
                                          <div className="text-Area" id='text-centerx'>
                                          {/* <h1 id="title" class="text-center">Digital Click</h1> */}
    <p id="description" class="description text-center">
    GET 

    </p>
    <p id="description" class="description text-center">
      IN TOUCH
    </p>
    <p id="descriptionx" class="description text-center">
      WITH US
    </p>
    <p id="title" class="description text-center">
    Contact us to get your first consultation
    </p>
                              

                                          </div>
                                          
                                        </div>
                                        <div class="column" id="columnxx">
                                        <div className="formwhole" style={{marginTop:'0px'}}>
        <div class="container" id='formcontainer' style={{marginTop:'0px'}}>
  <header class="header">

  </header>
  <form ref={form} className="survey-form" id="survey-form" onSubmit={sendEmail}>
    <div class="form-group">
      <label id="name-label" for="name">Full Name</label>
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        value={userName}
        placeholder="Enter your full name"
        onChange={e => setUserName(e.target.value)}
        required
      />
    </div>
    <div class="form-group">
      <label id="email-label" for="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        value={email}
        placeholder="Enter your E-mail"
        onChange={e => setEmail(e.target.value)}
        required
      />
    </div>
    <div class="form-group">
      <label id="name-label" for="name">Company or Project Name</label>
      <input
        type="text"
        name="company"
        id="comapny"
        class="form-control"
        value={company}
        placeholder="Enter your Company/Project Name"
        onChange={e => setCompany(e.target.value)}
        required
      />
    </div>

    <div class="form-group">
      <label id="comment-label">Describe your request in detail</label>
      <textarea
        id="comments"
        class="input-textarea"
        name="comment"
        value={Message}
        placeholder="Describe your request in detail here..."
        onChange={e => setMassage(e.target.value)}
      ></textarea>
    </div>

    <div class="form-group">
      <button type="submit" id="submit" class="submit-button">
        Submit
      </button>
    </div>
  </form>
</div>
</div>

                                        </div>
                                        </div>
                                        </div>

     

    );
}
export default BookingForm;