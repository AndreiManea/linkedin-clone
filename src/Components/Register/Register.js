import React from 'react'
import './Register.css'
import logo from '../../assets/Images/login__logo.png'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className='register'>
            <img src={logo} alt="" className="register__logo"/>
            <h1 className="register__title">Make the most of your professional life</h1>
            <div className="register__form">
                <form action="">
                    <input placeholder="Email or Phone" type="text"/>
                    <input placeholder="Password" type="password"/>
                    <p>By clicking Agree & Join, you agree to the LinkedIn <Link>User Agreement</Link>, <Link>Privacy Policy</Link>, and <Link>Cookie Policy</Link> .</p>
                    <Link type="submit" to="/login" className="register__button">Agree & Join</Link>
                </form>
                <p className="register__register">Already on Linkedin?{" "}<Link to="/login">Sign in</Link></p>
            </div>
        </div>
    )
}

export default Register
