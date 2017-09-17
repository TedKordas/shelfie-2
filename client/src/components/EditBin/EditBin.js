import React, { Component } from 'react';
import './EditBin.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class EditBin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: '',
            priceInput: '',
            id: props.id,
            viewOnlyMode: true,
            redirectToShelf: false
        }

        this.updateName = this.updateName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/bin/' + this.state.id)
        .then(res => {
            console.log(res.data[0]["name"]);
            this.setState({
                nameInput: res.data[0]["name"],
                priceInput: res.data[0]["price"]
            })
        })
    }

    updateName(event) {
        this.setState({ nameInput: event.target.value });
    }

    updatePrice(event) {
        this.setState({ priceInput: event.target.value });
    }

    handleEdit(event) {
        this.setState({ viewOnlyMode: false });
    }

    handleSubmit(event) {
        axios.put(`/api/bin/${this.state.id}?name=${this.state.nameInput}&price=${this.state.priceInput}`)
            .then(() => this.setState({ viewOnlyMode: true }));
    }

    handleDelete(event) {
        axios.delete(`/api/bin/${this.state.id}`)
        .then(() => this.setState({ redirectToShelf: true }) );
    }

    render() {
        if(this.state.redirectToShelf) {
            return (
                <Redirect to={'/shelf/' + this.state.id.substr(0,1)}/>
            )
        }

        return(
            <div className='contentEditPage'>
                <div>
                    <img src='http://lorempixel.com/200/200/business/' alt='inventory' />
                </div>
                <div className='form'>
                    <h4>Name</h4>
                    <input type='text' className='input' value={this.state.nameInput} onChange={this.updateName} disabled={this.state.viewOnlyMode} />
                    <h4>Price</h4>
                    <input type='text' className='input' value={this.state.priceInput} onChange={this.updatePrice} disabled={this.state.viewOnlyMode} />
                    <div className='buttonGroup'>
                        {
                            this.state.viewOnlyMode
                            ?
                            <div className='button' onClick={this.handleEdit}>
                                <p>Edit</p>
                            </div>
                            :
                            <div className='button' onClick={this.handleSubmit} id='save'>
                                <p>Save</p>
                            </div>
                        }
                        <div className='button' onClick={this.handleDelete}>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}