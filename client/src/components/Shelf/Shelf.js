import React, { Component } from 'react';
import './Shelf.css';
import Button from '../Button/Button';
import Header from '../Header/Header';
import axios from 'axios';

export default class Shelf extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bins: [],
            letter: props.match.params.letter
        }
    }

    componentDidMount() {
        axios.get('/api/shelf/' + this.state.letter)
        .then(res => {
            this.setState({ bins: res.data })
        })
    }

    createButtons() {
        const bins = this.state.bins;
        // return bins.map((bin, i) => {return <Button to='/' text='Test' shade='light' />});
        return bins.map( (bin, i, arr) => {
            return(
            arr[i] === null
            ?
            <Button to={`/bin/${this.state.letter}${i + 1}`} text='+ Add Inventory' shade='light' key={i + 1} />
            :
            <Button to={`/bin/${this.state.letter}${i + 1}`} text={`Bin ${i + 1}`} shade='medium' key={i + 1} />
            )
        })
    }

    render() {
        return(
            <div>
                <Header page='Shelf' shelfTitle={ 'Shelf ' + this.state.letter } />

                <div className='content' >
                    {
                        this.state.bins[0] === undefined
                        ?
                        null
                        :
                        this.createButtons()
                    }
                </div>
            </div>
        );
    }
}