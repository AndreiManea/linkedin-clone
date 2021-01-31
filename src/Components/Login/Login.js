import React from 'react'
import './Login.css'
import logo from '../../assets/Images/login__logo.png'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='login'>
            <img src={logo} alt="" className="login__logo"/>
            <div className="login__form">
                <h1 className="login__title">Sign in</h1>
                <p className="login__description">Stay updated on your professional world</p>
                <form action="">
                    <input placeholder="Email or Phone" type="text"/>
                    <input placeholder="Password" type="password"/>
                    <a href="">Forgot password?</a>
                    <Link type="submit" to="/home" className="login__button">Sign in</Link>
                </form>
            </div>
            <p className="login__register">New to Linkedin?{" "}<a href="">Join now</a></p>
        </div>
    )
}

export default Login
