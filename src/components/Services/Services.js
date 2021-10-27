import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('servicedata.JSON')
        .then(res =>res.json())
        .then(data => setServices(data));

    }, [])
    return (
        <div>
            <div className = "sercices-container">
                <h1>Our Clinic Services</h1>
                <p>Services We Provide</p>
                <div className='row'>
                    {services.map((ser) =>(
                        <div key={ser.id}className='service-area  col-md-4 '>
                            <div className="p-3 m-2 h-50 w-75">
                                <div className="image-area">
                                    <img className="img-fluid" src={ser.image}alt=''/>
                                </div>
                                <div className="des-area">
                                    <h3>{ser.title}</h3>
                                    <p>{ser.description}</p>
                                    <Button>Read More</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;