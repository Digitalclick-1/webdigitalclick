import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import Footer from '../../Common/Footer';
import NavigationTwo from '../../Navigation/Navigation2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleDown} from '@fortawesome/free-solid-svg-icons';
import bannerpic from '../../../assets/images/smartcontractbannerpic.png';

const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true
}
 
class Smartcontract extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                {/* <NavigationTwo/> */}
                <section className="page-title-area uk-page-title"  style={{backgroundImage: `url(${bannerpic})`}}>
                    <div className="uk-container">
                        <h1>Smart Contract</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>What exactly is Smart Contract Development?</li>
                            <div className='p-text' id='p-text'>
                            <p>Smart contracts are auto digital contracts that function based on predetermined 
circumstances that no one can change. Constructing smart contracts implies you 
can have clear, comfortable, and dependable transactions without involving any 
intermediaries.</p>
</div>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <nav className="navbarx">
        <div className="navbar-container containerx">
            <ul className="menu-itemsx">
            <li><Link to="/webdappdevelopment" className="navbarlink ">Web & Dapp Development <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/coinExchangeDevelopment">Coin & Exchange Development    <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/nftmarketplace">NFT Marketplace  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/defidevelopment">Defi Development   <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink active" to="/smartcontract">Smart Contract  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
                                            <li><Link className="navbarlink" to="/web3.0">Web 3.0 Development  <div className='iconDiv'><FontAwesomeIcon icon={faCircleDown} /></div></Link></li>
            </ul>
            
        </div>
    </nav>
                                    
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <section className="services-details-area uk-services-details uk-section"  >
                    

                    <div className="uk-container">
                        <article className="uk-article services-details">
                            
                                <div className="inner uk-width-expand">
                                    <div className="services-details-desc">
                                        <h3 >Where Else Can Smart Contracts Benefit a Business?</h3>
                            <p>Smart contracts enable you to barter assets such as real estate, inventories, and 
other precious assets. They operate plainly and without the use of intermediaries. 
You can avoid hiring a lawyer or a broker by using smart contracts, saving a 
significant sum of money or income.
Smart contracts' primary goal is to profoundly achieve the business objectives and 
transactions. Because of their use, all exchanges within the blockchain are 
becoming translucent, discoverable, and irreparable. Smart contracts are appealing 
and effective because of their distinctive features.</p>
                            {/* <AnchorLink className='button' offset={() => 100} href="#form">Book a Call</AnchorLink> */}
                            {/* <button className="fill"   >Book a Call</button> */}
                            <Link to="/bookingform" className="uk-button uk-button-default">Book a Call</Link>
                            <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={'https://ideausher.com/wp-content/uploads/2021/10/How-Defi-works.jpg'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://ideausher.com/wp-content/uploads/2021/10/Top-Five-DeFi-Developments.jpg'} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={'https://cryptocomes.com/sites/default/files/styles/1200x/public/2020-10/4950.jpg?itok=Q2_5axXP'} alt="img" />
                                            </div>
                                        </OwlCarousel>
                                        </div>
                                </div>
                                <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h2>How Do Smart Contracts Function?</h2>
                                        <h3>Smart contracts, which are built on blockchain technology, operate in the following 
                                        four steps:</h3>
                                        <h4>Step 1: Make a Transaction Record</h4>
                                        <p>The transfer of resources is documented as a block of information and may contain 
                                        the latest details: the quantity of deal attendees, the transmitted assets, and so on.</p>
                                        <h4>Step 2: Come to an agreement</h4>
                                        <p>The significant proportion of dispersed blockchain network attendees must verify 
                                        that the documented transaction is legitimate.</p>
                                        <h4>Step 3: A Group of Blocks</h4>
                                        <p>When participants reach an agreement, transfers on the blockchain are recorded in 
                                            blocks similar to registry pages. A crypto hash is added to the latest block along 
                                            with the exchanges. The hash acts as a chain, connecting the blocks. If the 
                                            components of a block are changed, either intentionally or unintentionally, the hash
                                            value changes, which aids in the detection of data forgery.
                                            As a result, blocks and chains are safely linked and cannot be edited.
                                            </p>
                                            <h4>Step 4: Distribute the Registry</h4>
                                            <p>The system distributes the most recent copy of the centralized database to all 
                                             participants.</p>
                                                                                
                                        </div>

                                        <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h2>Advantages</h2>
                                    <h4>Smart contracts have the following advantages as a result of blockchain operation 
                                        principles.</h4>
                                        <h4>Autonomy and effectiveness</h4>
                                        <p>
                                            Smart contracts can eliminate the need for external parties and boost productivity.
                                            The execution is carried out automatically, without the intervention of a third party, 
                                            which may result in human error.</p>   

                                            <h4>Savings</h4>         
                                            <p>Businesses can choose to reduce their relying on manual labour. Businesses that 
                                            use smart contracts can save money. The elimination of the need to rely on third 
                                            parties saves money paid for their offerings.</p>          
                                            <h4>Trust and Transparency</h4>
                                            <p>All of the terms are clear and unambiguous, and they cannot be happened to 
                                                change once they are written. There will be no fine print, unexpected fees, 
                                                preemptive changes to agreements, or other uncomfortable uncertainties as with 
                                                traditional contracts.</p>
                                                <h4>Protection</h4>
                                                <p>Cryptographic tools and Internet page encryption are often used in procedure of just
                                                    using smart contracts, providing documents with high security. Astounding skills 
                                                    and innovation are required to break the code of applications.</p>

                                                    


                         </div>
                         <div className="benifits-of-our-work" style={{marginTop:'20px'}}>
                                    <h3>Smart Contracts: An Exciting Development for Modern Business</h3>
                                    <p>Recognizing the opportunities for the creation of smart contracts, the main 
                                                competitors in the finance industry have begun research in this area.
                                                As a result, we are working on blockchain applications in the financial industry. More
                                                than 15 participating banks have created smart contract prototypes for factoring 
                                                operations, allowing participants to view transaction data in real time. Insurance 
                                                firms are also vigorously going to experiment with smart contracts. Furthermore, 
                                                banks are trying to conduct their own intrinsic developments.</p>

                                                                                
                                        </div>
                                        <h3>Smart contract is being used to achieve a variety of business objectives, 
                                            including:</h3>
                                            <h4> Individual independence</h4>
                                            <p>Smart contracts can assist you in reducing operations and maintenance. Increase 
                                                efficiency by automating operations and replacing third parties.</p>
                                                <h4>Reducing spending</h4>
                                                <p>Businesses can choose to reduce their dependence on manual labour. Businesses 
                                                        that use smart contracts can decrease their risks and costs while increasing 
                                                        productivity over the long run, which eventually drives advancement and growth.</p>
                                                        <h4>Transparency is being introduced.</h4>
                                                        <p>Because smart contracts are developed on the blockchain, no governing state has 
                                                                the ability to change the terms once they are recorded.</p>
                                                                <h4>Increasing efficiency and precision</h4>
                                                                <p>Smart contracts are automatically driven by pre-specified conditions. They are far 
                                                                            more efficient when it comes of performing superfluous and monotonous tasks with 
                                                                            greater precision.</p>
                                    
                           
                        </article>
                    </div>
                </section>  
           
               
             
          
{/*                
                <Footer /> */}
            </>
        );
    }
}
 
export default Smartcontract;