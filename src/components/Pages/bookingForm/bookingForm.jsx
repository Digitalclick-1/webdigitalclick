import React from "react";
import BookingForm from "../../Common/bookingCall";
import NavigationTwo from "../../Navigation/Navigation2";
import FormBanner from "./formBanner";
import Footer from "../../Common/Footer";
// import PricePackage from "../../Common/price.package";
 const BookingconsultationForm=()=>{
    return(
        <div>
          <NavigationTwo />
          <FormBanner  style={{marginBottom:'1px'}}/>
          {/* <PricePackage/> */}
            <BookingForm />
            <Footer/>
        </div>
    );
 }
 export default BookingconsultationForm