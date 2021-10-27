import React from 'react';
import './Login.css';
import useFirebase from '../../Hooks/useFirebase';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {
  const {handleGoogleSign,handleGithubSign,handaleLogin} = useFirebase();
    return (
        <div>
            <div className="contact-form p-3">
                <div className="row  d-flex justify-content-center ">
                    <div className="mt-5">
                        <h3>Please Login Here</h3>
                        
                        <input
                        className="input-field" type="Email"placeholder="Enter Your Email"/>
                        <br />
                        <input className="input-field" type="password"placeholder="Enter Your Password"/>
                        <br />
                        <Button className="login-btn" onClick = {handaleLogin}>Login</Button>

                        <br />
                        <Button className="login-btn" onClick = {handleGithubSign}>Login with Github</Button>
                        <Button className="login-btn" onClick = {handleGoogleSign}>Login with Google</Button>
                    </div>
                    <p className="text-primary ">
                      <Link to="/register">are you new ? register Now ! </Link>
                    </p>
                </div>
            </div>    
        </div>
    );
};

export default Login;