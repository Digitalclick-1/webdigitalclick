import React from 'react';
import bannerpic from '../../assets/images/cryptonftbannerpic.png';
 
class CryptoNftBanner extends React.Component {
    render(){
        return (
            <section className="page-title-area uk-page-title"    style={{backgroundImage: `url(${bannerpic})`}}>
                <div className="uk-container">
                    <h1>Crypto & Nft Brand Marketing</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Services</li>
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default CryptoNftBanner;