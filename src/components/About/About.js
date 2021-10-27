import React from 'react';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <div className='bg-light text-dark p-2 '>
                <div className="imagee pt-5 rounded">
                    <img className="img-fluid" src ="https://i.ibb.co/5GHNF1P/doctor-nurses-special-equipment-23-2148980721.jpg" alt=''/>
                </div>
                <div className= "about text-center m-2 ps-3">
                    <h1 className="text-center pt-3">About Of Doctor Points</h1>
                    <p>A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health. A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. There are many specific areas in the field of medicine that students can study. This article is meant to explain in general terms what a doctor does, common types of doctors, a doctor's earning potential and how to become one.mental health. A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. There are many specific areas in the field of medicine that students can study. </p>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;