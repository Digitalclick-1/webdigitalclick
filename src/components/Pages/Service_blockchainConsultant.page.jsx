import React from 'react';
import Navigation from '../Navigation/NavigationThree';
import Footer from '../Common/Footer';
import BlockchainConsultantBanner from '../Services/BlockchainConsultantBanner';
import Sevrice_BlockchainConsultant from '../services-content-component/service-blockchain-consultant';
import NavigationTwo from '../Navigation/Navigation2';
import Design from '../Common/Design';
 
class Sevrice_BlockchainConsultantPage extends React.Component {
    render(){
        return (
            <>
                {/* <Navigation /> */}
                <NavigationTwo/>

                <BlockchainConsultantBanner />

                {/* <Sevrice_BlockchainConsultant /> */}
                <Design/>
                
                <Footer />
            </>
        );
    }
}
 
export default Sevrice_BlockchainConsultantPage;