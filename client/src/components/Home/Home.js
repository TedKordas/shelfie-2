import React, { Component } from 'react';
import './Home.css';
import Button from '../Button/Button';

export default class Home extends Component {
    render() {
        return(
            <div>
                <div className="homeHeader">
                    <img src='/logo.png' alt='logo'></img>
                    <h1 className="logoText">SHELFIE</h1>
                </div>

                <div className='content'>
                    <Button to='/shelf/A' text='Shelf A' shade='dark' />
                    <Button to='/shelf/B' text='Shelf B' shade='dark' />
                    <Button to='/shelf/C' text='Shelf C' shade='dark' />
                    <Button to='/shelf/D' text='Shelf D' shade='dark' />
                </div>
            </div>
        );
    }
}