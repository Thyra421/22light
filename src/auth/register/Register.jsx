import "./register.css";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import db from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ArrowBack } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import Logo from '../../assets/pictures/logo.jpg';

export default function Register() {
  document.title = "22 Light - Register";
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  var username = "";

  // Sleep Function
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // Handle Register Button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name }, { password });
    registerRequest();
  };

  //  Registration Process
  const registerRequest = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, mail, password);
      console.log(user);
      setSuccess("Success");
      await sleep(3000);
      setSuccess("");
      const newUserRef = doc(db, "users", auth.currentUser.uid);
      username = name;
      await setDoc(newUserRef, {
        name: username,
        mail: mail,
        role: "1",
      });
      logginPage();
    } catch (err) {
      var msg = err.toString().split("(")[1];
      setError("(" + msg);
      await sleep(3000);
      setError("");
    }
  };

  // Successfully Registered and Redirect
  const logginPage = () => {
    navigate("/");
    window.location.reload();
  };

  // Alert Message
  const renderError = () => {
    if (error !== "") {
      return (
        <div className="register-alert">
          <Alert severity="error">Failed register — {error}</Alert>
        </div>
      );
    }
  };

  const renderSuccess = () => {
    if (success !== "") {
      return (
        <div className="register-alert">
          <Alert severity="success">Success register</Alert>
        </div>
      );
    }
  };

  return (
    <div className="register-Container">
      {renderError()}
      {renderSuccess()}
      <div className="register-Contain">
        <span className="register-Title">
          {" "}
          <img src={Logo} alt="logo" className="register-logo" />
          Register
        </span>
        <form onSubmit={handleSubmit}>
          <center>
            <div className="register">
              <input
                type="text"
                className="register-search"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="register">
              <input
                type="email"
                className="register-search"
                placeholder="Email..."
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="pswd">
              <input
                type="password"
                id="pass"
                className="register-search"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="register-button"
              value="Register"
            ></input>
          </center>
        </form>
        <Link to="/login" className="link">
          <li className="register-loginLink">
            <ArrowBack /> Login Account
          </li>
        </Link>
      </div>
    </div>
  );
}
