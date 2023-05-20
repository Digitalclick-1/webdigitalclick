import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Services/Banner';
import ServiceOneContent from '../Services/ServiceOneContent';
import NavigationTwo from '../Navigation/Navigation2';
 
class Services extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                <NavigationTwo/>

                <Banner />

                <ServiceOneContent />
                
                <Footer />
            </>
        );
    }
}
 
export default Services;