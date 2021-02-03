import React from 'react'
import './Register.css'
import logo from '../../assets/Images/login__logo.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
function Register() {
    const history = useHistory();
    return (
        <div className='register'>
            <img src={logo} alt="" className="register__logo" />
            <h1 className="register__title">Make the most of your professional life</h1>
            <div className="register__form">
                <Formik
                    initialValues={{ user: "", pass: "" }}
                    onSubmit={values => {
                        history.push("/login");
                        console.log(values);
                    }}>
                    <Form>
                        <Field name="user" placeholder="Email or Phone" type="email" />
                        <Field name="pass" placeholder="Password" type="password" />
                        <p>By clicking Agree & Join, you agree to the LinkedIn <Link>User Agreement</Link>, <Link>Privacy Policy</Link>, and <Link>Cookie Policy</Link> .</p>
                        <button type="submit" to="/login" className="register__button">Agree & Join</button>
                    </Form>
                </Formik>
                <p className="register__register">Already on Linkedin?{" "}<Link to="/login">Sign in</Link></p>
            </div>
        </div>
    )
}

export default Register
