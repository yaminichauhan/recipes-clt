import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TermsConditions from '../Pages/TermsConditions';
import App from '../form/App';
import Recipes from '../recipes/Recipes';
import Users from '../users/Users';
import About from '../about/About';
import Profile from '../profile/Profile';
import Favorites from '../favorites/Favorites';
import Help from '../help/Help';
import Navigation from '../navigation/Navigation';

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Router>
                        <Navigation />
                    <Switch>
                        <Route path='/signup' component={App}></Route>
                        <Route path='/termsConditions' component={TermsConditions}></Route>
                        <Route exact path='/' component={Recipes}></Route>
                        <Route exact path='/users' component={Users}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/profile' component={Profile}></Route>
                        <Route exact path='/favorites' component={Favorites}></Route>
                        <Route exact path='/help' component={Help}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}