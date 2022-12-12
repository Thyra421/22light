import React from 'react'
import './cart.css'

export default function DisplayCart(props) {

    return (
        <div className="displaycart-container" key={props.id}>
            <div className="dispaycart-global">
                <div className="displaycart-article">
                    <img src={props.picture} className="displaycart-picture" alt="pics" />
                    <div className="displaycart-text">{props.brand}</div>
                    <div className="displaycart-text">{props.name}</div>
                </div>
                <div className="displaycart-quantity">
                    <div className="displaycart-text">{props.quantity}</div>
                </div>
                <div className="displaycart-price">
                    <div className="displaycart-text">{props.price}€</div>
                </div>
            </div>
            <div className="cart-product-separator" />
        </div>
    );
}