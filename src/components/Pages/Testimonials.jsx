import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Testimonials/Banner';
import TestiContent from '../Testimonials/TestiContent';
import NavigationTwo from '../Navigation/Navigation2';
 
class Testimonials extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                <NavigationTwo/>

                <Banner />

                <TestiContent />
                
                <Footer />
            </>
        );
    }
}
 
export default Testimonials;