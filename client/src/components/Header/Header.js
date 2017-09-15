import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return(
        <div className='header'>
            <Link to='/' className='headerLeft' >
                    <img src='/logo.png' alt='logo' />
            </Link>
            <div className='headerRight'>
                <h1 className="logoText">{ props.text }</h1>
            </div>
        </div>
    );
}