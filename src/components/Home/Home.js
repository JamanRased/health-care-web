import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Appoinment></Appoinment>
            <Services></Services>
            <Team></Team>
            <Consultation></Consultation>
            <Footer></Footer>
        </div>
    );
};

export default Home;