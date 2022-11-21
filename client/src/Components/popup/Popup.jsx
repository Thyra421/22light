import React from "react";
import "./popup.css";

export default function Popup(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-container">
                <img src={props.picture} className="popup-picture" alt="pics" />
                <div className="popup-button" onClick={() => props.setTrigger(false)}>close</div>
            </div>
        </div>
    ) : "";
}
