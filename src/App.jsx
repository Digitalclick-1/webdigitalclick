import '../src/assets/css/flaticon.css';
import '../src/assets/css/animate.min.css';
import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/react-modal-video/css/modal-video.css';
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeThree from './components/Pages/HomeThree';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import ServiceDetails from './components/Pages/ServiceDetails';
import Project from './components/Pages/Project';
import ProjectDetails from './components/Pages/ProjectDetails';
import Testimonials from './components/Pages/Testimonials';
import Team from './components/Pages/Team';
import TermsConditions from './components/Pages/TermsConditions';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import Contact from './components/Pages/Contact';
import Service_CryptoNftPage from './components/Pages/Service_CryptoNft.page';
import Sevrice_BlockchainConsultantPage from './components/Pages/Service_blockchainConsultant.page';
import Sevrice_BlockchainDevelopmentPage from './components/Pages/service_BlockchainDevelopment.page';
import ProcessPage from './components/Pages/process';
import MarketInvestment from './components/BlockchainConsultant/Market_Investment/marketInvestment';
import ProofOfConcept from './components/BlockchainConsultant/ProofOfConcept/Poc';
import EcosystemDesign from './components/BlockchainConsultant/EcosystemDesign/Ecosystem_Design';
import StrategicPartnership from './components/CryptoNftMarketing/StrategicPartnership/Strategic_Partnership';

import Listings from './components/BlockchainConsultant/Listings/listings';
import WhitePaper from './components/BlockchainConsultant/WhitePaper/whitePaper';
import Compliance from './components/BlockchainConsultant/compliance/compliance';
import InfluncerMarketing from './components/CryptoNftMarketing/InfluncerMarketing/influncerMarketing';
import InvestorMarketing from './components/CryptoNftMarketing/InvestorMarketing/InvestorMarketing';
import FaqPage from './components/Pages/FAQ/FaqPage';
import VideoProduction from './components/CryptoNftMarketing/VideoProduction/VideoProduction';
import WebDappDevelopment from './components/BlockchainDevelopment/Web_Dapp_Development/web_Dapp_Development';
import CoinExchangeDevelopment from './components/BlockchainDevelopment/coin_Exchange_Development/coinExchange_development';
import BookingconsultationForm from './components/Pages/bookingForm/bookingForm';
import DefiDevelopment from './components/BlockchainDevelopment/Defi_Development/defiDevelopment';
import Smartcontract from './components/BlockchainDevelopment/Smart_Contract/smartcontract';
import Nftmarketplace from './components/BlockchainDevelopment/Nft_Marketplace/nftmarketplace';
import WebThree from './components/BlockchainDevelopment/Web3_Development/web3.0';
import Design from './components/Common/Design';
import ContentMarketing from './components/CryptoNftMarketing/creativeContentService/contentservice';
import SocialMediaManagment from './components/CryptoNftMarketing/SocialMedia_Communiy_Managment/socialmedia_CommunityManagmnet';
import AllBlogPage from './components/Pages/Blog_Pages/AllBlog_page';
import SingleBlogPage from './components/Pages/Blog_Pages/SingleBlogPage';
import NavigationTwo from './components/Navigation/Navigation2';
import Footer from './components/Common/Footer';
class App extends React.Component {
    state = {
        loading: true
    };
    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }
    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }
    render() {
        return (
            <Router>
                <>
               <NavigationTwo/>
                    <Route path="/" exact component={HomeThree} />
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                  
                    <Route path="/service-details" exact component={ServiceDetails} />
                    <Route path="/projects" exact component={Project} />
                    <Route path="/project-details" exact component={ProjectDetails} />
                   
                    <Route path="/clients" exact component={Testimonials} />
                    <Route path="/team" exact component={Team} />
                   
                
                    <Route path="/terms-conditions" exact component={TermsConditions} />
                    <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/Process" exact component={ProcessPage} />
                    {/* common pages */}
                    <Route path="/faq" exact component={FaqPage} />
                    <Route path="/bookingform" exact component={BookingconsultationForm}/>
                    <Route path="/design" exact component={Design} />
                    {/* main 3 services  */}
                    <Route path="/CryptoNftService" exact component={Service_CryptoNftPage} />
                    <Route path="/BlockchainConsultantService" exact component={Sevrice_BlockchainConsultantPage} />
                    <Route path="/BlockchainDevelopmentService" exact component={Sevrice_BlockchainDevelopmentPage} />
                    {/* blockchain consultant pages */}
                    <Route path="/marketinvestment" exact component={MarketInvestment} />
                    <Route path="/compliance" exact component={Compliance} />
                    <Route path="/ecosystemdesign" exact component={EcosystemDesign} />
                    <Route path="/listings" exact component={Listings} />
                    <Route path="/whitepaper" exact component={WhitePaper} />
                    <Route path="/poc" exact component={ProofOfConcept} />
                    {/* nft & crypto  pages */}
                    <Route path="/influncermarketing" exact component={InfluncerMarketing} />
                    <Route path="/investormarketing" exact component={InvestorMarketing} />
                    <Route path="/videoproduction" exact component={VideoProduction} />
                    <Route path="/contentmarketing" exact component={ContentMarketing} />
                    <Route path="/strategicpartnership" exact component={StrategicPartnership} />
                    <Route path="/socialmediamanagment" exact component={SocialMediaManagment} />
                  
                    {/* blockchain development services */}
                    
                    <Route path="/webdappdevelopment" exact component={WebDappDevelopment} />
                    <Route path="/coinExchangeDevelopment" exact component={CoinExchangeDevelopment} />
                    <Route path="/defidevelopment" exact component={DefiDevelopment} />
                    <Route path="/smartcontract" exact component={Smartcontract} />
                    <Route path="/nftmarketplace" exact component={Nftmarketplace} />
                    <Route path="/web3.0" exact component={WebThree} />
                    {/* blogs */}
                    {/* <NavigationTwo/> */}
                    <Route exact path="/blog"  component={AllBlogPage} />
                    {/* <Route  path="/:slug" component={SingleBlogPage} /> */}
                    {/* <Footer/> */}
                 
                </>
            </Router>
        );
    }
}

export default App;
