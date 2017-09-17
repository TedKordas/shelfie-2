import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    if(props.page === 'Home') {
        return(
            <div className='header'>
                <img src='/logo.png' alt='logo' className='logoHome'></img>
                <h1 className="headerRightHome">SHELFIE</h1>
            </div>
        );
    }

    if(props.page === 'Shelf') {
        return(
            <div className='header'>
                <Link to='/' className='logoShelf' >
                     <img src='/logo.png' alt='logo' />
                </Link>
                <div className='headerRightShelf'>
                    <h1>{ props.shelfTitle }</h1>
                </div>
            </div>
        );
    }

    if(props.page === 'Bin') {
        return(
            <div className='header'>
                <Link to='/' className='logoBin' >
                     <img src='/logo.png' alt='logo' />
                </Link>
                <div className='headerMidBin'>
                    <Link to={ '/shelf/' + props.letter } style={{ textDecoration: 'none', color: '#ffffff' }} >
                        <h1>{ props.shelfTitle }</h1>
                    </Link>
                </div>
                <div className='headerRightBin'>
                    <h1>{ props.binTitle }</h1>
                </div>
            </div>
        );
    }
}