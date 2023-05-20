import React from 'react';
// import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Process from '../HomeThree/Process';
import NavigationTwo from '../Navigation/Navigation2';
import ProcessBanner from '../Services/Process.Banner';
 
class ProcessPage extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}

                <NavigationTwo/>
                <ProcessBanner/>
                <Process/>
                
                <Footer />
            </>
        );
    }
}
 
export default ProcessPage;