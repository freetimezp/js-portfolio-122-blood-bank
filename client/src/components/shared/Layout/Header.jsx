import React from 'react';
import { useNavigate } from "react-router-dom";

import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';


const Header = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    //logout handler 
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <BiDonateBlood color='red' /> Blood Bank
                    </div>

                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item mx-3">
                            <p className="nav-link">
                                <BiUserCircle /> Welcome - {" "}
                                <span className='text-capitalize'>{user?.user.name ?? "quest"}</span>!
                            </p>
                        </li>
                        <li className="nav-item mx-3">
                            <button className="btn btn-secondary" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
