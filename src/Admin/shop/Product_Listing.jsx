import "./product_listing.css";
import React, { useState } from "react";
import { createProducts } from "../../Helper/Shops";
import { renderErrorAlert, renderSuccessAlert } from "../../Helper/Alert";
import sleep from "../../Helper/Wait";

export default function Product_Listing() {
    document.title = "Sneakers - Product Creating Page";
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [colour, setColour] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!checkSubmit()) {
            setError("all the field are not completed");
            await sleep(3000);
            setError("");
            return;
        }
        try {
            var check = "";
            console.log(colour);
            check = await createProducts(description, picture, name, brand, type, price, colour, quantity);
            handleClear();
            displayAlert(check);
        } catch (err) {
            let msg = err.toString().split("(")[1];
            setError("(" + msg);
            await sleep(3000);
            setError("");
        }
    };

    const handleClear = () => {
        document.getElementById("select-brand").selectedIndex = 0;
        setBrand("");
        setName("");
        setPicture("");
        setDescription("");
        setType("");
        setColour("");
        setPrice("");
        setQuantity("");
    }

    const displayAlert = async (check) => {
        if (check === "success") {
            setSuccess("Success");
            await sleep(3000);
            setSuccess("");
        } else {
            setError("(" + check);
            await sleep(3000);
            setError("");
        }
    }

    const colourArray = (colour) => {
        var myArray = colour.split(',');
        return myArray;
    }

    const checkSubmit = () => {
        return (
            brand !== "" &&
            name !== "" &&
            picture !== "" &&
            description !== "" &&
            type !== "" &&
            price !== "" &&
            colour !== "" &&
            quantity !== ""
        );
    };

    const visualize = () => {
        if (
            brand !== "" ||
            picture !== "" ||
            description !== "" ||
            type !== "" ||
            name !== ""
        ) {
            return (
                <div className="product-listing-grid-container">
                    {(type !== "" || brand !== "") && (
                        <div className="product-listing-grid-title">
                            Product - {type} / Brand - {brand}
                        </div>
                    )}
                    {picture !== "" && (
                        <img src={picture} className="product-listing-grid-picture" alt="pics" />
                    )}
                    <span className="product-listing-grid-span">
                        {name !== "" && (
                            <div className="product-listing-grid-text">Name - {name}</div>
                        )}
                        {description !== "" && (
                            <div className="product-listing-grid-ref">description - /{description}</div>
                        )}
                    </span>
                </div>
            );
        } else {
            return;
        }
    };

    return (
        <div className="product-listing">
            {renderErrorAlert(error)}
            {renderSuccessAlert(success)}
            <div className="product-listing-container">
                <div className="product-listing-contain">
                    <span className="product-listing-title">Product Creator</span>
                    <form onSubmit={handleSubmit}>
                        <center>
                            <div className="product-listing-field">
                                Product type
                                <select
                                    className="product-listing-item"
                                    defaultValue={"DEFAULT"}
                                    onChange={(e) => setType(e.target.value)}
                                    id="select-brand"
                                >
                                    <option value="DEFAULT" disabled>
                                        Select an Option
                                    </option>
                                    <option value="tv">TV</option>
                                    <option value="computers">Computers</option>
                                    <option value="mobile">Mobile Phones</option>
                                    <option value="tablets">Tablets</option>
                                    <option value="audio">Audio</option>
                                </select>
                            </div>
                            <div className="product-listing-field">
                                Product Brand
                                <input
                                    type="text"
                                    className="product-listing-item"
                                    placeholder="Product Brand..."
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                            </div>
                            <div className="product-listing-field">
                                Product Name
                                <input
                                    type="text"
                                    className="product-listing-item"
                                    placeholder="Product Name..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="product-listing-field">
                                Product Description
                                <input
                                    type="padding"
                                    className="product-listing-item"
                                    placeholder="Page Description..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="product-listing-field">
                                Product Picture
                                <input
                                    type="text"
                                    className="product-listing-item"
                                    placeholder="Picture URL..."
                                    value={picture}
                                    onChange={(e) => setPicture(e.target.value)}
                                />
                            </div>
                            <div className="product-listing-field">
                                Product Colour
                                <input
                                    type="text"
                                    className="product-listing-item"
                                    placeholder="Colour..."
                                    value={colour}
                                    onChange={(e) => setColour(colourArray(e.target.value))}
                                />
                            </div>
                            <div className="product-listing-field">
                                Product Price
                                <input
                                    type="text"
                                    className="product-listing-item"
                                    placeholder="Price..."
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="product-listing-field">
                                Product Quantity
                                <input
                                    type="text"
                                    className="product-listing-item"
                                    placeholder="Quantity..."
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            {visualize()}
                            <input
                                type="submit"
                                className="product-listing-submit"
                                value="Submit"
                            ></input>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    );
}
