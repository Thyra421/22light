import "./topbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UilShoppingCart } from '@iconscout/react-unicons'
import { UilUserCircle } from '@iconscout/react-unicons'
import { UilPlusCircle } from '@iconscout/react-unicons'

const Topbar = () => {
    const role = window.localStorage.getItem('role');

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
    const login = () => {
        navigate("/login");
    }
    const product = () => {
        navigate("/product-listing");
    }
    
    return (
        <div className="topbar">
            <div className="topbar-left" onClick={home}>22 Light Logo</div>
            <div className="topbar-right">
                <div className="topbar-item" onClick={home}>HOME</div>
                <div className="topbar-item" onClick={shop}>SHOP ALL</div>
                <div className="topbar-item" onClick={login}><UilUserCircle/></div>
                <div className="topbar-item" onClick={cart}><UilShoppingCart/></div>
                {role === "admin" &&
                    <div className="topbar-item" onClick={product}><UilPlusCircle/></div>
                }
            </div>
        </div>
    );
};

export default Topbar;
