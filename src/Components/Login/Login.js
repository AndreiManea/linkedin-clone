import React from 'react'
import './Login.css'
import logo from '../../assets/Images/login__logo.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import { auth } from '../../firebase/firebase';
import { useAuth } from '../../firebase/AuthContext';
function Login() {
    const history = useHistory();
    const { login } = useAuth();
    return (
        <div className='login'>

            <img src={logo} alt="" className="login__logo" />

            <div className="login__form">
                <h1 className="login__title">Sign in</h1>
                <p className="login__description">Stay updated on your professional world</p>
                <Formik
                    initialValues={{ email: "", pass: "" }}
                    onSubmit={async (values) => await login(values.email, values.pass)}>
                    <Form>
                        <Field name="email" type="email" placeholder="Email or Phone" />
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
