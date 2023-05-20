import React from 'react';
import Footer from '../Common/Footer';
import Banner from '../Team/Banner';
import TeamBody from '../Team/TeamBody';
import NavigationTwo from '../Navigation/Navigation2';
 
class Team extends React.Component {
    render(){
        return (
            <>
                {/* <NavigationFour /> */}
                <NavigationTwo/>
                <Banner />

                <TeamBody />
                
                <Footer />
            </>
        );
    }
}
 
export default Team;