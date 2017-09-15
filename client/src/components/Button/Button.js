import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button(props) {
    return(
        <Link to={ props.to } style={{textDecoration: 'none', margin: '10px 0' }} >
        <div className={ props.shade }>
            { props.shade === 'dark' ? 
            <h1>{ props.text }</h1> :
            <h2>{ props.text }</h2>        
            }
            
        </div>
    </Link>
    );
}