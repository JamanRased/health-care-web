import React from 'react';
import { Button} from 'react-bootstrap';
import './Consultation.css';
const Consultation = () => {
    return (
        <div>
            <div className="consultation-container">
                <h1>Form for FREE Consultation</h1>
                <p>You can Contact us anytime</p>
            </div>
            <div className="contact-form p-3">
                <div className="row  d-flex justify-content-center ">
                    <div className="mt-5">
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Enter Your Name"
                        />
                        <br />
                        <input
                        className="input-field"
                        type="Email"
                        placeholder="Enter Your Email"
                        />
                        <br />
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Doctor"
                        />
                        <br />
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Messege"
                        />
                        <br />
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label ps-2 " for="flexCheckChecked"> 
                         I agree that my submitted data.
                        </label>
                        <br />
                        <Button>Appoinment Now </Button>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Consultation;