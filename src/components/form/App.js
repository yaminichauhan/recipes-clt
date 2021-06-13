import React, { Component } from 'react';
import rocketImg from '../../assets/rocket1.png';
import Signup from './Signup';

export default class App extends Component {
    
    render() {
        const props = this.props;
        return (
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-5">
                <Signup history={props.history}/>
              </div>
              <div className="col-md-7 my-auto">
                <img classname="img-fluid w-100" src={rocketImg} alt="" />
              </div>
            </div>
          </div>
        );
    }
}
