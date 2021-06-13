import React, { Component } from 'react';
import MainRouter from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainApp extends Component {
    render() {
        return (
            <>
                <MainRouter />
            </>
        );
    }
}