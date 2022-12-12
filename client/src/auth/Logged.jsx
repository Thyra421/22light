import "./logged.css";
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import sleep from '../Helper/Wait'

function Logged() {
    let navigate = useNavigate()
    const [success, setSuccess] = useState("");
    const name = window.localStorage.getItem('name')
    const email = window.localStorage.getItem('email')

    const Logout = async (navigate) => {
        window.localStorage.removeItem("logged");
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("uid");
        window.localStorage.removeItem("role");
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    const renderDeconnexion = (success) => {
        if (success !== "") {
            return (
                <div>
                    <Alert severity="success">Successfully Disconnected</Alert>
                </div>
            );
        }
    };

    const buttonLogout = async (event) => {
        setSuccess("Success");
        await sleep(3000);
        setSuccess("");
        Logout(navigate);
    };

    return (
        <div className="logged-Container">
            {renderDeconnexion(success)}
            <div className="logged">
                <div className="logged-profile">
                    <div className="logged-profile-title">Information</div>
                    <div className="logged-profile-name">name: {name}</div>
                    <div className="logged-profile-name">email: {email}</div>
                </div>
                <div className="product-separator" />
                <div className="cart-product-button" onClick={(e) => buttonLogout(e)}>Logout</div>
            </div>
        </div>
    )
}

export { Logged }