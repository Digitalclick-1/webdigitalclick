import React from 'react';
 
class FormBanner extends React.Component {
    render(){
        return (
            <section className="page-title-area uk-page-title">
                <div className="uk-container">
                    <h1>Booking Form</h1>
                    <ul>
                        <li><a href="/home-four">Home</a></li>
                        <li>Form</li>
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default FormBanner;