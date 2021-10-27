import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const {logout, user} = useFirebase();
    return (
        <div>
            <div className='row p-3'>
                <div className="col-md-4">
                    <p>Free Call</p>
                    <strong>+882322311-25654421</strong>
                </div>
                <div className="col-md-4">
                    <img className='img-fluid h-auto w-25 rounded-circle' src ='https://i.ibb.co/zNtBrVV/Team-3.jpg' alt ='' />
                    <h1>Doctor's Point</h1>
                </div>
                <div className="col-md-4">
                    <p>Open Hours</p>
                    <strong>Always Open</strong>
                </div>
            </div>
            
            <div className="menu-container">
                <Link to="/home" className="header-items">
                Home
                </Link>
                <Link to="/services" className="header-items">
                Services
                </Link>
                <Link to="/about" className="header-items">
                About
                </Link>
                {user.email?( <Link to="/logout" className="header-items border bg-success text-white" onClick={logout} >
                Logout
                </Link>
                ) : (
                <Link to="/login" className="header-items border bg-success text-white">
                Login
                </Link>
                )}
                <p>User Name: {user?.displayName}</p>
            </div>
        </div>
    );
};

export default Header;