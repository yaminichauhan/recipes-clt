import React, { Component } from 'react';
import RecipeGrid from './RecipeGrid';

export default class Recipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:8585/api/recipes/getAll', {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "access-control-allow-origin": "*"
            },
            "mode": "cors",
        })
            .then(resp => {
                return resp.json()
            })
            .then(response => {
                this.setState({
                    data: response.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            this.state.data && <div>
                <br></br>
                <RecipeGrid recipes={this.state.data}/>
            </div>
        );
    }
}
