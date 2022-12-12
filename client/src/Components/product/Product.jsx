import React, { useState, useEffect } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'
import Popup from '../popup/Popup'
import "./product.css";
import Alert from '@mui/material/Alert';
import sleep from "../../Helper/Wait";


export default function Product(props) {
    const [authenticity, setAuthenticity] = useState(true);
    const [shipping, setShipping] = useState(true);
    const [description, setDescription] = useState(false);
    const [popup, setPopup] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [add, setAdd] = useState(0);
    const buff = window.localStorage.getItem('cart');
    const total = window.localStorage.getItem('total');
    var y = 0;

    useEffect(() => {
        // eslint-disable-next-line
    }, [add]);


    const sizeGrid = (props) => {
        return (
            <div className="product-grid-container" key={props.id}>
                {props.colours?.map(colour => <div className="product-grid-text">{colour}</div>)}
            </div>
        );
    };

    const handlePopup = (popup) => {
        if (popup === true)
            setPopup(false);
        else
            setPopup(true);
    };

    const handleClick = (element) => {
        if (element === "authenticity") {
            if (authenticity === true) {
                setAuthenticity(false);
            } else {
                setAuthenticity(true);
            }
        }
        if (element === "shipping") {
            if (shipping === true) {
                setShipping(false);
            } else {
                setShipping(true);
            }
        }
        if (element === "description") {
            if (description === true) {
                setDescription(false);
            } else {
                setDescription(true);
            }
        }
    }

    const renderAdd = (success) => {
        if (success !== "") {
            return (
                <div>
                    <Alert severity="success">Product successfully added</Alert>
                </div>
            );
        }
    };

    const renderError = (error) => {
        if (error !== "") {
            return (
                <div>
                    <Alert severity="error">Product out of stock</Alert>
                </div>
            );
        }
    };

    const addToCart = async (props) => {
        var cart = props;
        var money = props
        if (cart.quantity > 0) {
            if (buff !== undefined && buff !== null) {
                const check = JSON.parse(buff).find(e => e.id === cart.id)
                if (check !== undefined) {
                    var product2 = JSON.parse(buff);
                    var number = check.number;
                    product2.find(e => e.id === cart.id).number = number + 1
                    window.localStorage.setItem("cart", JSON.stringify(product2));
                    console.log("add to cart")
                } else {
                    var product = JSON.parse(buff);
                    cart = { ...cart, number: 1 }
                    product.push(cart)
                    window.localStorage.setItem("cart", JSON.stringify(product));
                    console.log("add to cart")
                }
            } else {
                cart = { ...cart, number: 1 }
                window.localStorage.setItem("cart", JSON.stringify([cart]));
                console.log("product added to cart" + cart);
            }
            console.log(total, money.price)
            if (total === undefined || total === null) {
                y = 0 + parseFloat(money.price)
            } else {
                y = parseFloat(total) + parseFloat(money.price)
            }
            window.localStorage.setItem("total", y.toFixed(2));
            let x = add;
            setAdd(x += 1);
            setSuccess("Succes");
            await sleep(3000);
            setSuccess("");
        } else {
            setError("Error");
            await sleep(3000);
            setError("");
            console.log("error not enough product")
        }
    }

    return (
        <div className="product-container" key={props.id}>
            <Popup
                trigger={popup}
                setTrigger={setPopup}
                picture={props.picture}
            />
            <div className="product-element">
                <img src={props.picture} className="product-picture" alt="pics" onClick={() => handlePopup(popup)} />
            </div>
            <div className="product-element">
                {renderError(error)}
                {renderAdd(success)}
                <div className="product-text">
                    <div className="product-brand">{props.brand}</div>
                    <span className="product-line">
                        <div className="product-name">{props.name}</div>
                        <div className="product-name">Price: {props.price}€</div>
                    </span>
                    <div className="product-separator" />
                    <div className="product-size">Colour Available</div>
                    <div className="product-size">{sizeGrid(props)}</div>
                    <div className="product-separator" />
                    <div className="product-dropdown" onClick={() => handleClick("description")}>Description <UilAngleDown /></div>
                    <div className="product-dropdown-text" hidden={description}>{props.description}</div>
                    <div className="product-separator" />
                    <div className="product-dropdown" onClick={() => handleClick("authenticity")}>Authenticity <UilAngleDown /></div>
                    <div hidden={authenticity} className="product-dropdown-text">
                        Our articles are guaranteed 100% authentic, with our authentification process done by our
                        group of experts.<br />
                        Every article is controlled in the aim to reject fakes or product with defects.<br />
                        We provides you only the best quality and authentic product.
                    </div>
                    <div className="product-separator" />
                    <div className="product-dropdown" onClick={() => handleClick("shipping")}>Purchasing & Shipping <UilAngleDown /></div>
                    <div hidden={shipping} className="product-dropdown-text">
                        Purchasing: Simple, click on the button below to add the product you are looking for in your cart.<br />
                        Once purchase we will send you an email with your order details.<br />
                        <br />
                        Shipping Methods: Your item will be shipped within 48 hours of purchase by post. (Excepting Weekends).
                    </div>
                    <>
                        <div className="product-button" onClick={() => addToCart(props)}>
                            <div className="product-button-text">
                                Add to cart
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}