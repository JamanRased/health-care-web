import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Register.css';

const Register = () => {
    const {registerHandle,handleEmailChange,handlePassChange} = useFirebase();
    return (
        <div>
          <div className="login-box d-flex align-items-center justify-content-center">
            <div className="login">
              <div className="login-box">
                <h2 className="">Pease Register Here</h2>
                <form onSubmit= {registerHandle}>
                  <input  onChange = {handleEmailChange} className="input-field" type="Email" placeholder="Enter Your Email" required="*"/>
                  <br />
                  <input  onChange ={handlePassChange} className="input-field"type="password"
                  placeholder="Enter Your Password"
                  />
                  <br />
                  <input
                    className="mt-3 w-50 btn btn-success m-auto"
                    type="submit"
                    value="Register"
                  />
                  <p className="text-primary ">
                    already have an account ? <Link to="/login">Please Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
      </div>
    );
};

export default Register;