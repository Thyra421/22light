import "./auth.css";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/image/Error404.jpeg';
import { myLogin, myRegister, renderErrorLoginAlert, renderLoginSuccessAlert, renderErrorRegistrationAlert, renderRegisterSuccessAlert } from '../Helper/Auth';
import sleep from '../Helper/Wait';

function Login() {
    document.title = "Sneakers - Login";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const uid = window.localStorage.getItem('uid');
    let navigate = useNavigate()

    useEffect(() => {
        callback();
        // eslint-disable-next-line
    }, [uid])


    const callback = async () => {
        logged(uid)
    }

    const logged = (uid) => {
        if (uid !== undefined && uid !== null && uid !== "") {
            navigate("/logged");
            window.location.reload();
        }
    }

    // Handle Login Button
    const handleSubmit = (event) => {
        event.preventDefault();
        myLogin(setSuccess, setError, email, password, navigate);
    }

    return (
        <div className="login-Container">
            {renderErrorLoginAlert(error)}
            {renderLoginSuccessAlert(success)}
            <div className="login-Contain">
                <span className="login-Title"> <img src={Logo} alt="logo" className="login-logo" />Login</span>
                <form onSubmit={handleSubmit}>
                    <center>
                        <div className="login-login">
                            <input type="text" className="login-search" required placeholder="Login" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="login-password">
                            <input type="password" id="pass" minLength="6" maxLength="32" required autoComplete="off" className="password-search" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input type="submit" className="login-button" value="Sign in" ></input>
                    </center>
                </form>
                <Link to="/register" className="link">
                    <li className="login-registerLink">
                        Register
                    </li>
                </Link>
            </div>
        </div>
    )
}

function Register() {

    let navigate = useNavigate()
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    // Handle Register Button
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === checkPassword) {
            myRegister(setSuccess, setError, login, password, navigate);
        } else if (password !== checkPassword) {
            setError("Les mots de passe ne correspondent pas");
            await sleep(3000);
            setError("");
        }
    };

    return (
        <div className="register-Container">
            {renderErrorRegistrationAlert(error)}
            {renderRegisterSuccessAlert(success)}
            <div className="register-Contain">
                <span className="register-Title"> <img src={Logo} alt="logo" className="register-logo" />Register</span>
                <form onSubmit={handleSubmit}>
                    <center>
                        <div className="register">
                            <input type="email" className="register-search" required placeholder="Email" value={login} onChange={(e) => setLogin(e.target.value)} />
                        </div>
                        <div className="pswd">
                            <input type="password" id="pass" minLength="6" maxLength="32" required autoComplete="off" className="register-search" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="pswd">
                            <input type="password" id="check" minLength="6" maxLength="32" required autoComplete="off" className="register-search" placeholder="Confirm" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} />
                        </div>
                        <input type="submit" className="register-button" value="Register"></input>
                    </center>
                </form>
                <Link to="/login" className="link">
                    <li className="register-loginLink">
                        Login
                    </li>
                </Link>
            </div>
        </div>
    )
}

export { Login, Register }