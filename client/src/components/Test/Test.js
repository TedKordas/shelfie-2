import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Test extends Component {
    render() {
        return(
            <div>
                <h2>This is just a test.</h2>
                <Link to="/">
                    Go to Home Page.
                </Link>
            </div>
        );
    }
}