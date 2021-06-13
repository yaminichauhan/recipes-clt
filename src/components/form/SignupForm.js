import React, { Component } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';
import { isValidEmail } from '../../lib/utilities';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            usernameError: "",
            emailError: "",
            passwordError: ""
        }
        this.getInputValue = this.getInputValue.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.validateFormFields =  this.validateFormFields.bind(this);
    }

    getInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateFormFields() {
        const { password, confirmPassword, username, email } = this.state;
        if(password !== confirmPassword) {
            this.setState({passwordError: "Password and Confirm Password fields don't match!"});
        }
        if(!username.includes("@")) {
            this.setState({usernameError: "Invalid username"});
        }
        if(!isValidEmail(email)) {
            this.setState({emailError: "Invalid email"});
        }
        else {
            return true;
        }
    }

    saveUser() {
        if(this.validateFormFields()) {
            this.setState({usernameError: "", emailError: "", passwordError: ""});
            alert("Successfully submitted form");
        }
        // const { username, email, password } = this.state;
        // const data = JSON.stringify({username, email, password});

        // fetch('http://localhost:8585/api/users/create', {
        //     "method": "POST",
        //     "headers": {
        //         "content-type": "application/json",
        //         "accept": "application/json",
        //         "access-control-allow-origin": "*"
        //     },
        //     "body": data,
        //     "mode": "cors",
        // })
        //     .then(resp => { 
        //         console.log('reeeeeeeeeeeeee...', resp);
        //         return resp.json() })
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    render() {
        return (
            <form style={{ border: '1px solid #ccc' }}>
                <div class='container'>
                    <center>
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account</p>
                        <br></br><br></br>
                        <hr></hr>

                        <label for='username'><b>Username</b></label>
                        <br></br>
                        <input type='text' value={this.state.username} onChange={this.getInputValue} placeholder='username' name='username' required />
                        <p style={{color:"red", fontSize:"12px"}}>{this.state.usernameError}</p>
                        <br></br>
                        
                        <label for='email'><b>Email</b></label>
                        <br></br>
                        <input type='text' value={this.state.email} onChange={this.getInputValue} placeholder='Email id' name='email' required />
                        <p style={{color:"red", fontSize:"12px"}}>{this.state.emailError}</p>
                        <br></br>
                        
                        <label for='password'><b>Password</b></label>
                        <br></br>
                        <input type='password' value={this.state.password} onChange={this.getInputValue} placeholder='Password' name='password' required />
                        <p style={{color:"red", fontSize:"12px"}}>{this.state.passwordError}</p>
                        <br></br>
                        
                        <label for='confirmPassword'><b>Confirm Password</b></label>
                        <br></br>
                        <input type='password' value={this.state.confirmPassword} onChange={this.getInputValue} placeholder='Confirm Password' name='confirmPassword' required />
                        <p style={{color:"red", fontSize:"12px"}}>{this.state.passwordError}</p>
                        <br></br>

                        <input type='checkbox' checked='checked' name='remember' required style={{ marginBottom: '25px' }} />
                        <p>By creating an account you agree to our <Link to='/termsConditions' style={{ color: 'dodgerblue' }}>Terms and Conditions</Link></p>
                        <br></br>
                        <div>
                            <button type='button' class='submit' onClick={this.saveUser}>Submit</button>
                            <button type='button' class='cancel'>Cancel</button>
                        </div>
                        <br></br>
                    </center>
                </div>
            </form>
        );
    }
}