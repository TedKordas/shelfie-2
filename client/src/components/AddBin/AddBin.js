import React, { Component } from 'react';
import './AddBin.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class AddBin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: '',
            priceInput: '',
            id: props.id,
            redirectToShelf: false
        }

        this.updateName = this.updateName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateName(event) {
        this.setState({ nameInput: event.target.value });
    }

    updatePrice(event) {
        this.setState({ priceInput: event.target.value });
    }

    handleSubmit(event) {
        axios.post('/api/bin/' + this.state.id)
            .then(() => this.setState({ redirectToShelf: true }) );
    }

    render() {
        if(this.state.redirectToShelf) {
            return (
                <Redirect to={'/shelf/' + this.state.id.substr(0,1)}/>
            )
        }

        return(
            <div className='contentAddPage'>
                <h4>Name</h4>
                <input type='text' className='input' value={this.state.nameInput} onChange={this.updateName} />
                <h4>Price</h4>
                <input type='text' className='input' value={this.state.priceInput} onChange={this.updatePrice} />
                <div className='buttonAdd' onClick={this.handleSubmit}>
                    <p>+ Add Inventory</p>
                </div>
            </div>
        )
    }
}