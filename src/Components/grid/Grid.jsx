import React from "react";
import "./grid.css";
import { Link } from 'react-router-dom'

export default function Grid(props) {

    return (
        <Link to={props.id}>
            <div
                className="grid-container"
                key={props.id}
            >
                <img src={props.picture} className="grid-picture" alt="pics" />
                <div className="grid-text">{props.brand}</div>
                <div className="grid-text">{props.content}</div>
            </div>
        </Link>
    );
}
