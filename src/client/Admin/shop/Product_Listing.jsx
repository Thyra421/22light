import "./product_listing.css";
import React, { useState } from "react";
import { DocumentCreator } from "../../Helper/Helper";
import { renderErrorAlert, renderSuccessAlert } from "../../Helper/Alert";
import Topbar from "../../../components/Topbar";
import sleep from "../../Helper/Wait";

export default function Product_Listing() {
  document.title = "Sneakers - Product Creating Page";
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkSubmit()) {
      setError("not all fields are filled");
      await sleep(3000);
      setError("");
      return;
    }
    try {
      const check = await DocumentCreator(type, link, picture, name, brand);
      setBrand("");
      setName("");
      setPicture("");
      setLink("");
      setType("");
      if (check === "succes") {
        setSuccess("Success");
        await sleep(3000);
        setSuccess("");
      } else {
        setError("(" + check);
        await sleep(3000);
        setError("");
      }
    } catch (err) {
      let msg = err.toString().split("(")[1];
      setError("(" + msg);
      await sleep(3000);
      setError("");
    }
  };

  const checkSubmit = () => {
    return (
      brand !== "" &&
      name !== "" &&
      picture !== "" &&
      link !== "" &&
      type !== ""
    );
  };

  const visualize = () => {
    if (
      brand !== "" ||
      picture !== "" ||
      link !== "" ||
      type !== "" ||
      name !== ""
    ) {
      return (
        <div className="product-grid-container">
          {(type !== "" || brand !== "") && (
            <div className="product-grid-title">
              Product - {type} / Brand - {brand}
            </div>
          )}
          {picture !== "" && (
            <img src={picture} className="product-grid-picture" alt="pics" />
          )}
          <span className="product-grid-span">
            {name !== "" && (
              <div className="product-grid-text">Name - {name}</div>
            )}
            {link !== "" && (
              <div className="product-grid-ref">Link - /{link}</div>
            )}
          </span>
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <>
      <Topbar />
      <div className="product-listing">
        <div className="product-listing-container">
          {renderErrorAlert(error)}
          {renderSuccessAlert(success)}
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
                  >
                    <option value="DEFAULT" disabled>
                      Select an Option
                    </option>
                    <option value="tv">TV</option>
                    <option value="computers">COMPUTERS</option>
                    <option value="mobile_phones">MOBILE PHONES</option>
                    <option value="tablets">TABLETS</option>
                    <option value="audio">AUDIO</option>
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
                  Product Link
                  <input
                    type="padding"
                    className="product-listing-item"
                    placeholder="Page Link..."
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
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
    </>
  );
}
