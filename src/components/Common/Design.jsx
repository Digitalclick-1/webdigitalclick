import React from "react";
import './design.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Design=()=>{
    const [show ,setShow] =useState({

      one:true,
     
      three:false,
      four:false,
      five:false,
      six:false,
      seven:false,
    })
    return(
 <div className="wrapper" 

 >
  <div className="one"      
     onMouseEnter={() => setShow({

      one:true,
     
      three:false,
      four:false,
      five:false,
      six:false,
      seven:false,
    })}
         
        >
            <h2 className="headerxyz"> Market Investment </h2>
            <div class="arrow-down">
            <Link to='/marketinvestment'> <FontAwesomeIcon icon={faCircleDown} /> </Link>
            </div>
            

  </div>
  {show.one && (
  <div className="two">
    
    <h3 className="panel-info-title"  >
    <h3 className="panel-info-title">
    
        market investment                         
      </h3>
                     
    </h3>
    <p className="panel-info-description p">
    We provide multiple investing options to bring your venture to the top notch. With our innovative equity research techniques and trustable consulting, you can strengthen your weak points, become investor-ready, and increase traction..
    </p>
    <Link to="/marketinvestment" className="link-btnx"><span>Read More</span> <i className="flaticon-right"></i></Link>
  </div>
        )} 
  <div className="three"      onMouseEnter={() =>  setShow({

one:false,
three:true,
four:false,
five:false,
six:false,
seven:false,
})}
  >
     <h2 className="headerxyz">Compliance </h2>
     <div class="arrow-down">
     <Link to='/compliance'> <FontAwesomeIcon icon={faCircleDown} /> </Link>
            </div>
  </div>
  {show.three && (
  <div className="two" >
        <h3 className="panel-info-title">
        Compliance                         
      </h3>
      <p className="panel-info-description p">
  
      We offer blockchain analytics to help with cryptoasset compliance. Allow your audit to monitor and manage across 500+ cryptocurrency assets while meeting legal standards..
      </p>
      <Link to="/compliance" className="link-btnx"><span>Read More</span> <i className="flaticon-right"></i></Link>
  </div>
        )} 
  <div className="four"
    onMouseEnter={() =>  setShow({

      one:false,
 
      three:false,
      four:true,
      five:false,
      six:false,
      seven:false,
    })}
 
  > <h2 className="headerxyz">Ecosystem Design</h2>
              <div class="arrow-down">
              <Link to='/ecosystemdesign'> <FontAwesomeIcon icon={faCircleDown} /> </Link>
            </div>
  </div>
  {show.four && (
  <div className="two" >
        <h3 className="panel-info-title">
      
        Ecosystem Design                               
      </h3>
      <p className="panel-info-description p">
  
      Integrating innovation and creativity, strategies, and methods from the start of 
ecosystem development will enable businesses to create embedded ecosystem...
      </p>
      <Link to="/ecosystemdesign" className="link-btnx"><span>Read More</span> <i className="flaticon-right"></i></Link>
  </div>
        )} 

  <div className="five"     onMouseEnter={() =>  setShow({

one:false,
three:false,
four:false,
five:true,
six:false,
seven:false
})}
 
    >
       <h2 className="headerxyz">Listings</h2>
       <div class="arrow-down">
       <Link to='/listings'> <FontAwesomeIcon icon={faCircleDown} /> </Link>
            </div>
    </div>
    {show.five && (
  <div className="two" >
      <h3 className="panel-info-title">
      Listings                              
      </h3>
      <p className="panel-info-description p">
  
      With us the process of passing through listing criteria would be easier as possible. We will provide all the necessary guidelines for listing your token without supposed difficulties.
      </p>
      <Link to="/listings" className="link-btnx"><span>Read More</span> <i className="flaticon-right"></i></Link>
  </div>
        )} 
  <div className="six"
  onMouseEnter={() =>  setShow({

    one:true,
    three:false,
    four:false,
    five:false,
    six:true,
    seven:false
  })}
  >
     <h2 className="headerxyz">Whitepaper </h2>
     <div class="arrow-down">
          <Link to='/whitepaper'> <FontAwesomeIcon icon={faCircleDown} /> </Link>
            </div>
     </div>
    {show.six && (
  <div className="two" >
       <h3 className="panel-info-title">
      
     Whitepaper                                
      </h3>
      <p className="panel-info-description p">
  
      A whitepaper is a comprehensive report on the software and goals of ones blockchain or cryptocurrency venture. It describes your project's principle and how you intend to reach it to success.
      </p>
      <Link to="/whitepaper" className="link-btnx"><span>Read More</span> <i className="flaticon-right"></i></Link>
  </div>
        )} 
  <div className="seven"   onMouseEnter={() =>  setShow({

one:true,
three:false,
four:false,
five:false,
six:false,
seven:true
})}
  > <h2 className="headerxyz">Proof Of Concept </h2>
              <div class="arrow-down">
              <Link to='/poc'> <FontAwesomeIcon icon={faCircleDown} /> </Link>
            </div>
  </div>
  {show.seven && (
  <div className="two"  >
       <h3 className="panel-info-title">
      
   Proof Of Concept                         
      </h3>
      <p className="panel-info-description p">
  
      The blockchain PoC is the process of verifying that the idea has the potential in a real-world situation. Its aim is to determine whether the project is feasible and will function as planned. 
      </p>
      <Link to="/poc" className="link-btnx"><span>Read More</span> <i className="flaticon-right"></i></Link>
  </div>
        )}  
</div>





    );
}
export default Design;