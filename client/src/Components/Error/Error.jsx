import "./error.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    document.title = "22 Light - Error";
    const Picture = "https://img.freepik.com/vecteurs-libre/oops-erreur-404-illustration-concept-robot-casse_114360-5529.jpg?w=2000"

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
