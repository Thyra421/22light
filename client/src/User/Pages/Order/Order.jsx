import "./order.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import DisplayCart from "../../../Components/cart/Cart"

export default function Order() {
    document.title = "22 Light - Order";
    const uid = window.localStorage.getItem('uid');
    const buff = window.localStorage.getItem('cart');
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        callback();
        setProduct(JSON.parse(buff));
        // eslint-disable-next-line
    }, [uid]);

    const callback = () => {
        logged(uid)
    }

    const logged = (uid) => {
        if (uid === undefined || uid === null || uid === "") {
            navigate("/login");
        }
    }

    const handleClick = (event) => {
        window.localStorage.removeItem("cart");
        window.localStorage.removeItem("total");
        navigate("/");
        window.location.reload();
    }



    return (
        <div className="shipping-container">
            <center>
                <div className="shipping-form">
                    <div className="shipping-contact">
                        <div className="shipping-title">
                            Order Processed Successfully
                            <div className="product-separator" />
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
                                <div className="cart-product-button" onClick={() => handleClick()}>Close</div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div >
    );
}
