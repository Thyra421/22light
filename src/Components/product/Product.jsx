import React, { useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'
import Popup from '../popup/Popup'
import "./product.css";


export default function Product(props) {
    const [authenticity, setAuthenticity] = useState(true);
    const [shipping, setShipping] = useState(true);
    const [description, setDescription] = useState(false);
    const [popup, setPopup] = useState(false);

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
                        <div className="product-button">
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