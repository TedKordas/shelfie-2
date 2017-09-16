import React, { Component } from 'react';
import './Shelf.css';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Axios from 'axios';

export default class Shelf extends Component {

    componentDidMount() {
        const bins = Axios.get('/api/shelf/' + this.props.match.params.letter);
        console.log(bins);
    }

    render() {
        const letter = this.props.match.params.letter;

        return(
            <div>
                <Header page='Shelf' shelfTitle={ 'Shelf ' + letter } />

                <div className='content' >
                    <Button to={ '/shelf/' + letter + '/1' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + letter + '/2' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + letter + '/3' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + letter + '/4' } text='+ Add inventory to bin' shade='light' />
                    <Button to={ '/shelf/' + letter + '/5' } text='+ Add inventory to bin' shade='light' />
                </div>
            </div>
        );
    }
}