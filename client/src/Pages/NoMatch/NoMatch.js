import React from 'react';
import { Link } from "react-router-dom";
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className='container'>
            <h1>404 Page Not Found</h1>
            <p><Link to='/'>Go to the NYT Search App</Link></p>
        </div>
    );
};

export default NoMatch;