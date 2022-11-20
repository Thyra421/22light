import "./error.css";
import React from "react";
import Picture from "../../Assets/image/Error404.jpeg";
import { Link } from "react-router-dom";

export default function Error() {
    document.title = "22 Light - Error";

    return (
        <div className="error">
            <div className="error-content">
                <img src={Picture} alt="logo" className="error-logo" />
                <div className="error-title">
                    The page you are looking for might have been removed
                    <br /> had its named changed or its temporary unavailable.
                </div>
                <Link to="" className="error-button">HOME PAGE</Link>
            </div>
        </div>
    );
}
