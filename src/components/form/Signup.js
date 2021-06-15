import React from 'react';
import TextField from './TextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { addUser } from '../../services/recipesService';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.validate = Yup.object({
            username: Yup.string()
                .max(15, "Username cannot be greater than 15 characters")
                .required("Username is required!"),
            email: Yup.string()
                .email("Email is invalid")
                .required("Email is required!"),
            password: Yup.string()
                .min(8, "Password must be greater 8 characters")
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must contain atleast 1 uppercase, 1 lowercase, 1 Numeric & 1 special character")
                .required("Password is required!"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match!")
                .required("Confirm password is required!")
        });
        this.openRecipes= this.openRecipes.bind(this);
    }

    openRecipes() {
        this.props.history.push("/");
    }

    render() {

        return (
            <div>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={this.validate}
                    onSubmit={values => {
                        addUser(values, this.openRecipes());                    
                    }}
                >
                    { (formik) => (
                        <div>
                       {/* { console.log("formik.........", formik)} */}
                        <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                        <Form>
                            <TextField label="Username" name="username" type="text"></TextField>
                            <TextField label="Email" name="email" type="email"></TextField>
                            <TextField label="Password" name="password" type="password"></TextField>
                            <TextField label="Confirm Password" name="confirmPassword" type="password"></TextField>
                            <button className="btn btn-dark mt-3" type="submit" disabled={!(formik.isValid && formik.dirty)}>Register</button>
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                        </Form>
                    </div>)
    }
                </Formik>
            </div>
        );
    }
}