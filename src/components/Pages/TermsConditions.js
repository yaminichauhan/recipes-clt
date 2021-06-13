import React, { Component } from 'react';

export default class TermsConditions extends Component {
    render() {
        return (
            <>
                <button onClick={() => this.props.history.push('/')} class='backTerms'>back</button>
                <center>
                    <h1>Terms and Conditions</h1>
                </center>
            </>
        );
    }
}