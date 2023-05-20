import React from 'react';
import Footer from '../Common/Footer';
import Banner from '../About/Banner';
import AboutContent from '../About/AboutContent';
import NavigationTwo from '../Navigation/Navigation2';
class About extends React.Component {
    render(){
        return (
            <>

                {/* <NavigationFour /> */}
                <NavigationTwo/>
                <Banner />

                <AboutContent />

                <Footer />
            </>
        );
    }
}
 
export default About;