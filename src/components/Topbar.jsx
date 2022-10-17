import React, { useState } from "react";
import "./topbar.css";
import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import Dropdown from "../assets/dropdown/Dropdown";
import user_image from "../assets/pictures/icon.png";
import user_menu from "../assets/Json/user_menus.json";
import { auth } from "../firebase/firebase";
import { signOut } from "@firebase/auth";
import Alert from "@material-ui/lab/Alert";
import { useNavigate } from "react-router-dom";
import logo from '../assets/pictures/logo.jpg';

const Topbar = () => {
  let navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const user_name = localStorage.getItem("name");

  const curr_user = {
    display_name: user_name,
    image: user_image,
  };

  // Sleep Function
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const renderDeconnexion = () => {
    if (success !== "") {
      return (
        <div className="topbar-middle">
          <Alert severity="info">Déconnexion réussie</Alert>
        </div>
      );
    }
  };

  const renderUserToggle = (user) => (
    <div className="topbar_right-user">
      <div className="topbar_right-user_image">
        <img src={user.image} alt="" />
      </div>
      <div className="topbar_right-user_name">{user.display_name}</div>
    </div>
  );

  const handleClick = async (event) => {
    const text = event.target.textContent;
    if (text === "Profile") {
      console.log("Profile");
    } else if (text === "Settings") {
        console.log("settings")
    } else if (text === "Logout") {
      setSuccess("Success");
      await sleep(3000);
      setSuccess("");
      Logout();
    }
  };

  const renderUserMenu = (item, index) => {
    return (
      <div key={index}>
        <div className="notification-item" onClick={handleClick}>
          <i className={item.icon}></i>
          <span>{item.content}</span>
        </div>
      </div>
    );
  };

  const Logout = async () => {
    window.localStorage.removeItem("logged");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("uid");
    window.localStorage.removeItem("name");
    await signOut(auth);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="topbar">
        <div className="topbar-logo">
            <span className="topbar-Logo"> <img src={logo} alt="topbar-Logo" className="topbar-Avatar" /></span>
        </div>
      <div className="topbar_search"></div>
      {renderDeconnexion()}
      <div className="topbar_right">
        <div className="topbar_right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
