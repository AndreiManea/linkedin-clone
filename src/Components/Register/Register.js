import React from 'react'
import './Register.css'
import logo from '../../assets/Images/login__logo.png'
import { Link } from 'react-router-dom'
import { Formik, Field, Form } from "formik";
import { useAuth } from '../../firebase/AuthContext';

function Register() {
    const { signUp } = useAuth();
    return (
        <div className='register'>
            <img src={logo} alt="" className="register__logo" />
            <h1 className="register__title">Make the most of your professional life</h1>
            <div className="register__form">
                <Formik
                    initialValues={{ email: "", pass: "", displayName: "", photoURL: "", job: "" }}
                    onSubmit={async (values) => {
                        try {
                            await signUp(values.email, values.pass, values.displayName, values.photoURL, values.job);
                        } catch {
                            console.log("Failed to create an account")
                        }
                    }}>
                    <Form>
                        <Field name="email" placeholder="Email or Phone" type="email" />
                        <Field name="pass" placeholder="Password" type="password" />
                        <Field name="displayName" placeholder="Display Name" type="text" />
                        <Field name="job" placeholder="Job Title" type="text" />
                        <Field name="photoURL" placeholder="Profile Picture URL" type="text" />
                        <p>By clicking Agree & Join, you agree to the LinkedIn <Link>User Agreement</Link>, <Link>Privacy Policy</Link>, and <Link>Cookie Policy</Link> .</p>
                        <button type="submit" to="/login" className="register__button">Agree & Join</button>
                    </Form>
                </Formik>
                <p className="register__register">Already on Linkedin?{" "}<Link to="/login">Sign in</Link></p>
            </div>
        </div >
    )
}

export default Register
