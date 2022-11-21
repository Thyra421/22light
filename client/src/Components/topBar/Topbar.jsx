import "./topbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UilShoppingCart } from '@iconscout/react-unicons'

const Topbar = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("");
    }
    const shop = () => {
        navigate("/shop");
    }
    const cart = () => {
        navigate("/cart");
    }
    return (
        <div className="topbar">
            <div className="topbar-left" onClick={home}>22 Light Logo</div>
            <div className="topbar-right">
                <div className="topbar-item" onClick={home}>HOME</div>
                <div className="topbar-item" onClick={shop}>SHOP ALL</div>
                <div className="topbar-item" onClick={cart}><UilShoppingCart/></div>
            </div>
        </div>
    );
};

export default Topbar;
