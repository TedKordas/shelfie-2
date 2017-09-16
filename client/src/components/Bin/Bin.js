import React, { Component } from 'react';
import './Bin.css';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Axios from 'axios';

export default class Bin extends Component {

    render() {
        const letter = this.props.match.params.letter;
        const binNumber = this.props.match.params.binNumber;

        return(
            <div>
                <Header
                    page='Bin'
                    shelfTitle={ 'Shelf ' + letter }
                    binTitle={ 'Bin ' + binNumber }
                    letter={ letter }
                    binNumber={ binNumber }
                />

                <div>
                    <p>this is a test</p>
                </div>
            </div>
        );
    }
}