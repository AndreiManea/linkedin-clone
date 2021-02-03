import React from 'react'
import './Login.css'
import logo from '../../assets/Images/login__logo.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
function Login() {
    const history = useHistory();
    return (
        <div className='login'>

            <img src={logo} alt="" className="login__logo" />

            <div className="login__form">
                <h1 className="login__title">Sign in</h1>
                <p className="login__description">Stay updated on your professional world</p>
                <Formik
                    initialValues={{ user: "", pass: "" }}
                    onSubmit={values => {
                        history.push("/home");
                        console.log(values);
                    }}>
                    <Form>
                        <Field name="user" type="email" placeholder="Email or Phone" />
                        <Field name="pass" type="password" placeholder="Password" />
                        <a className="login__forgot" href="">Forgot password?</a>
                        <button type="submit" className="login__button">Sign in</button>
                    </Form>
                </Formik>
            </div>
            <p className="login__register">New to Linkedin?{" "}<Link to="/register">Join now</Link></p>
        </div>
    )
}

export default Login
