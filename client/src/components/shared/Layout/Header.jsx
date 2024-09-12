import React from 'react';
import { Link, useNavigate } from "react-router-dom";

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
            <nav className="navbar p-3 px-4">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to="/" className='text-white'>
                            <BiDonateBlood color='red' />Blood Bank
                        </Link>
                    </div>

                    <ul className="navbar-nav d-flex flex-row align-items-center">
                        <li className="nav-item mx-3">
                            <p className="nav-link m-0">
                                <BiUserCircle /> Welcome - {" "}
                                <span className='text-capitalize'>
                                    {user?.user.name || user?.user.hospitalName || user?.user.organizationName || "quest"}
                                </span>! {" "}
                                <span className='badge bg-secondary'>{user?.user.role}</span>
                            </p>
                        </li>
                        <li className="nav-item mx-3">
                            <button className="btn btn-warning" onClick={handleLogout}>
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
