import React, { Component } from 'react';
import RecipeGrid from './RecipeGrid';
import { getRecipes } from '../../services/recipesService';

export default class Recipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false
        }
        this.setRecipesList =  this.setRecipesList.bind(this);
    }

    setRecipesList = recipes => {
        this.setState({
            data: recipes
        })
    }

    componentDidMount() {
        getRecipes(this.setRecipesList);
    }

    render() {
        const { data } = this.state;
        return (
            data && <div>
                <br></br>
                <RecipeGrid recipes={data}/>
            </div>
        );
    }
}
