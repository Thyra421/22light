import "./cart.css";
import React, { useEffect, useState } from "react";
import DisplayCart from "../../../Components/cart/Cart"
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import sleep from "../../../Helper/Wait";

export default function Cart() {
    document.title = "22 Light - Cart";
    const [product, setProduct] = useState([]);
    const buff = window.localStorage.getItem('cart');
    const total = window.localStorage.getItem('total');
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    console.log(product)

    useEffect(() => {
        setProduct(JSON.parse(buff));
        // eslint-disable-next-line
    }, []);

    const handleClick = (event) => {
        navigate("/shipping")
    }

    const renderClear = (success) => {
        if (success !== "") {
            return (
                <div>
                    <Alert severity="success">Your cart has been successfully cleared</Alert>
                </div>
            );
        }
    };

    const clearCart = async (event) => {
        window.localStorage.removeItem("cart");
        window.localStorage.removeItem("total");
        setSuccess("Success");
        await sleep(3000);
        setSuccess("");
        navigate("/shop");
        window.location.reload();
    }

    return (
        <div className="cart-container">
            {renderClear(success)}
            <div className="product-separator" />
            <div className="cart-title">Cart</div>
            <div className="cart-box">
                <div className="cart-subtitle">
                    <div className="cart-subtitle-content">Article</div>
                    <div className="cart-subtitle-content">Quantity</div>
                    <div className="cart-subtitle-content">Total</div>
                </div>
                <div className="cart-product-separator" />
                {product?.map((item, index) => (
                    <DisplayCart
                        key={index}
                        id={item.id}
                        picture={item.picture}
                        name={item.name}
                        brand={item.brand}
                        quantity={item.number}
                        description={item.description}
                        colours={item.colours}
                        price={item.price}
                    />
                ))}
                {buff !== undefined && buff !== null ?
                    <>
                        <div className="cart-total">Order Total: {total}€</div>
                        <div className="cart-total">Shipping Cost: Free on all order above 50€</div>
                        <div className="cart-total">Final Price: {total}€</div>
                        <div className="cart-product-button" onClick={() => handleClick()}>Complete Your Order</div>
                        <div className="cart-product-button" onClick={() => clearCart()}>Clean Your Cart</div>
                    </>
                :
                    <>
                        <div className="cart-total">Your cart is Empty</div>
                    </>
                }
            </div>
        </div>
    );
}
