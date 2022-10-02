import "./home.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "../../components/Topbar";

export default function Home() {
  document.title = "22 Light - Home";

  return (
    <>
      <Topbar />
      <div className="home">
        <div className="home-content">
          <div className="home-title">
            <icon className="bx bx-alarm-exclamation"></icon>
            Site under construction, come back later
            <icon className="bx bx-alarm-exclamation"></icon>
          </div>
        </div>
      </div>
    </>
  );
}
