import "./home.css";
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "../../components/Topbar";
import logo from "../../assets/pictures/logo.jpg";
import Grid from "../../assets/grid/Grid";
import product_menu from "../../assets/Json/product.json";

export default function Home() {
  document.title = "22 Light - Home";

  return (
    <>
      <Topbar />
      <div className="home">
        <div className="home-content">
          <div className="home-header">
            <span className="home-logo">
              <img src={logo} className="home-picture" alt="top-logo" />
              <span className="home-title"> 22 Light</span>
            </span>
          </div>
          <div className="home-toolbar">
            <a href="/" className="home-toolbar-content">
              ALL
            </a>
            <a href="tv" className="home-toolbar-content">
              TV
            </a>
            <a href="computers" className="home-toolbar-content">
              COMPUTERS
            </a>
            <a href="mobile" className="home-toolbar-content">
              MOBILE PHONES
            </a>
            <a href="tablets" className="home-toolbar-content">
              TABLETS
            </a>
            <a href="audio" className="home-toolbar-content">
              AUDIO
            </a>
          </div>
          <div className="grid">
            {product_menu.map((item, index) => (
              <Grid
                picture={item.picture}
                content={item.content}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
