import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo center'>NYT Search</a>
            </div>
        </nav>
    );
};

export default Navbar;