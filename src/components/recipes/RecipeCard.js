import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVerticalIcon from '@material-ui/icons/MoreVert';
import { updateLikes } from '../../services/recipesService';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => createStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}))

export default function RecipeCard({ recipes }) {

    // const arr = [0, 1, 2, 3];
    return (
        <>
            {recipes.map((recipe) => {

                return (<Grid item xs={3}>
                    <Recipe recipe={recipe} />
                </Grid>);
            })}
        </>
    );
}

function Recipe({ recipe }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [favorite, setFavorite] = useState("default");
    const [likes, setLikes] = useState(recipe.likes);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const handleFavoriteClick = () => {
        console.log("Clicked.....");
        setFavorite("secondary");
        handleLikes();
        updateLikes(recipe.likes + 1, recipe.originalId);
    }

    const handleLikes = () => {
        setLikes(recipe.likes + 1);
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label='recipe' className={classes.avatar}>{recipe.name.charAt(0)}</Avatar>
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreVerticalIcon />
                    </IconButton>
                }
                title={recipe.name}
                subheader={recipe.category}
            />
            <CardMedia
                className={classes.media}
                image={recipe.imageUrl}
                title={recipe.name}
            />
            <CardContent>
                <Typography>{recipe.description}</Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    onClick={handleFavoriteClick}
                    color={favorite}
                    aria-label='favorite'
                >
                    <FavoriteIcon></FavoriteIcon>
                    <Typography>{likes}</Typography>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>{recipe.instructions.heading}</Typography>
                    <Typography paragraph>{recipe.instructions.process1}</Typography>
                    <Typography paragraph>{recipe.instructions.process2}</Typography>
                    <Typography>{recipe.instructions.conclusion}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}