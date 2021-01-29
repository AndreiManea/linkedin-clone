import React from 'react'
import './Login.css'
import logo from '../../assets/Images/login__logo.png'
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
                    <button type="submit">Sign in</button>
                </form>
            </div>
            <p className="login__register">New to Linkedin?{" "}<a href="">Join now</a></p>
        </div>
    )
}

export default Login
