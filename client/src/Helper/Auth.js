import React from 'react';
import "../auth/auth.css"
import Alert from '@mui/material/Alert';
import axios from "axios";
import sleep from './Wait';

// Alert Error Registration Message
export const renderErrorRegistrationAlert = (error) => {
    if (error !== "") {
      return (
        <div className="register-alert">
          <Alert severity="error">Enregistrement échouée — {error}</Alert>
        </div>
      );
    }
  };
  
// Alert Success Register Message
export const renderRegisterSuccessAlert = (success) => {
    if (success !== "") {
      return (
        <div className="register-alert">
          <Alert severity="success">Enregistrement réussie</Alert>
        </div>
      );
    }
  };

// Alert Error Login Message
export const renderErrorLoginAlert = (error) => {
  if (error !== "") {
    return (
      <div className="login-alert">
        <Alert severity="error">Connexion échouée — {error}</Alert>
      </div>
    );
  }
};

// Alert Success Login Message
export const renderLoginSuccessAlert = (success) => {
  if (success !== "") {
    return (
      <div className="login-alert">
        <Alert severity="success">Connexion réussie</Alert>
      </div>
    );
  }
};

const successHandling = async (setSuccess, navigate) => {
  setSuccess("Success");
  await sleep(3000);
  setSuccess("");
  navigate("/");
//   window.location.reload();
}

const errorLogin = async (setError) => {
    setError("Connexion échoué");
    await sleep(3000);
    setError("");
}

export const myLogin = async (setSuccess, setError, email, password, navigate) => {
  const result = await axios.post("http://localhost:8000/user/login", {email: email, password: password})
  if (result.status === 200) {
    console.log(result)
    window.localStorage.setItem("uid", result.data.data.uid);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("role", result.data.data.role);
    window.localStorage.setItem("name", result.data.data.name);
    window.localStorage.setItem("token", result.data.token);
    successHandling(setSuccess, navigate);
  } else {
    errorLogin(setError);
  }
}

const errorRegisterEmail = async (setError) => {
    setError("Email déjà utilisé");
    await sleep(3000);
    setError("");
  }
  
  const errorRegister = async (setError) => {
      setError("Enregistrement échoué");
      await sleep(3000);
      setError("");
  }

export const myRegister = async (setSuccess, setError, email, password, navigate) => {
    var user = email.substr(0, email.indexOf('@'));
    const result = await axios.post("http://localhost:8000/user/register", {email: email, password: password, name: user})
    if (result.status === 200) {
                window.localStorage.setItem("uid", result.data.uid);
                window.localStorage.setItem("email", email);
                window.localStorage.setItem("role", result.data.role);
                window.localStorage.setItem("name", result.data.name);
                successHandling(setSuccess, navigate);
    } else {
        if (result.status === 501) {
                errorRegisterEmail(setError);
        }
        else if (result.status === 500) {
            errorRegister(setError);
        }
        sleep(3000);
    }
}