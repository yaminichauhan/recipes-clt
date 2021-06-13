import React from 'react';
import RecipeCard from './RecipeCard';
import Grid from '@material-ui/core/Grid';

export default function RecipeGrid({ recipes }) {

    return (
        <>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <RecipeCard recipes={recipes} />
                </Grid>
            </Grid>

        </>
    );

}
