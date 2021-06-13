import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/HomeRounded';
import AssignmentIcon from '@material-ui/icons/AssignmentIndRounded';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FavoriteIcon from '@material-ui/icons/FavoriteRounded';
import HelpIcon from '@material-ui/icons/HelpOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';
import './Navigation.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Tabs>
                    <NavLink exact activeClassName="active_class" to='/'><Tab icon={<HomeIcon />} /></NavLink >
                    <NavLink exact activeClassName="active_class" to='/about'><Tab icon={<AssignmentIcon />} /></NavLink>
                    <NavLink exact activeClassName="active_class" to='/profile'><Tab icon={<PersonPinIcon />} /></NavLink>
                    <NavLink exact activeClassName="active_class" to='/favorites'><Tab icon={<FavoriteIcon />} /></NavLink>
                    <NavLink exact activeClassName="active_class" to='/help'><Tab icon={<HelpIcon />} /></NavLink>
                </Tabs>
            </AppBar>
        </div>
    );
}
