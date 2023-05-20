import React from 'react';
import Navigation from '../Navigation/NavigationThree';
import Footer from '../Common/Footer';
import CryptoNftBanner from '../Services/CryptoNftBanner';
import Sevrice_CryptoNft from '../services-content-component/service-cryptoNft';
import NavigationTwo from '../Navigation/Navigation2';
 
class Service_CryptoNftPage extends React.Component {
    render(){
        return (
            <>
                {/* <Navigation /> */}
                <NavigationTwo/>

                <CryptoNftBanner />

                <Sevrice_CryptoNft />
                
                <Footer />
            </>
        );
    }
}
 
export default Service_CryptoNftPage;