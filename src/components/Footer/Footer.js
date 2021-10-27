import React from 'react';
import './Footer.css';
import { faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faFacebook} />
    return (
        <div>
            <div className='bg-secondary text-white row pt-3'>
                <div className='footer-area col-md-6 '>
                    <h6>Jaman Rased &copy; 2021. All rights reserved</h6>
                </div>
                <div className='footer-area col-md-6 '>
                <div className="footer-right">
                    <h4>Follow Us</h4>
                        <span>{element}</span>
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;