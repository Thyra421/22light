import "./shipping.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import sleep from "../../../Helper/Wait";
import Alert from '@mui/material/Alert';

export default function Shipping() {
    document.title = "22 Light - Shipping";
    const name = window.localStorage.getItem('name');
    const email = window.localStorage.getItem('email');
    const uid = window.localStorage.getItem('uid');
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        callback();
        // eslint-disable-next-line
    }, [uid]);

    const callback = () => {
        logged(uid)
    }

    const logged = (uid) => {
        if (uid === undefined || uid === null || uid === "") {
            navigate("/login");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("Success");
        await sleep(3000);
        setSuccess("");
        navigate("/order");
    }

    const renderComplete = (success) => {
        if (success !== "") {
            return (
                <div>
                    <Alert severity="success">Order Completed Successfully</Alert>
                </div>
            );
        }
    };

    return (
        <div className="shipping-container">
            {renderComplete(success)}
            <form onSubmit={handleSubmit}>
                <center>
                    <div className="shipping-form">
                        <div className="shipping-contact">
                            <div className="shipping-title">
                                Finalyze Your Order
                            </div>
                            <div className="shipping-subtitle">
                                Information :
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="name" value={name} />
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="email" value={email} />
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="Phone Number..." />
                            </div>
                        </div>
                        <div className="product-separator" />
                        <div className="shipping-subtitle">
                            Address :
                        </div>
                        <div className="shipping-adress">
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="Street..." />
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="State..." />
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="Zip/Post Code..." />
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="Country..." />
                            </div>
                        </div>
                        <div className="product-separator" />
                        <div className="shipping-subtitle">
                            Payment Card :
                        </div>
                        <div className="shipping-contact">
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="Card Number" />
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="Card Expirency" />
                            </div>
                            <div className="shipping-field-box">
                                <input type="text" className="shipping-field" required placeholder="CVV" />
                            </div>
                        </div>
                        <input type="submit" className="shipping-product" value="Confirm" ></input>
                    </div>
                </center>
            </form >
        </div >
    );
}
