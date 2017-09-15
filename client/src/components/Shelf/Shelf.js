import React, { Component } from 'react';
import './Shelf.css';
import Button from '../Button/Button';
import Header from '../Header/Header';

export default class Shelf extends Component {
    render() {
        return(
            <div>
                <Header text={ 'Shelf ' + this.props.match.params.letter } />

                <div className='content' >
                    <Button to={ '/shelf/' + this.props.match.params.letter + '/1' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + this.props.match.params.letter + '/2' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + this.props.match.params.letter + '/3' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + this.props.match.params.letter + '/4' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + this.props.match.params.letter + '/5' } text='+ Add inventory to bin' shade='light' />
                </div>
            </div>
        );
    }
}