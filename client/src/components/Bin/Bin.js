import React, { Component } from 'react';
import Header from '../Header/Header';
import AddBin from '../AddBin/AddBin';
import EditBin from '../EditBin/EditBin';
import axios from 'axios';

export default class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bin: [],
            id: props.match.params.id,
            letter: props.match.params.id.substr(0,1),
            binNumber: props.match.params.id.substr(1,1)
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/bin/' + this.props.match.params.id)
        .then(res => {
            this.setState({ bin: res.data });
        })
    }

    render() {

        return(
            <div>
                <Header
                    page='Bin'
                    shelfTitle={ 'Shelf ' + this.state.letter }
                    binTitle={
                        this.state.bin[0] === undefined
                        ?
                        'Add to Bin ' + this.state.binNumber
                        :
                        'Bin ' + this.state.binNumber
                    }
                    letter={ this.state.letter }
                    binNumber={ this.state.binNumber }
                />
                    {
                        this.state.bin[0] === undefined
                        ?
                        <AddBin id={this.state.id} />
                        :
                        <EditBin id={this.state.id} />
                    }
            </div>
        );
    }
}