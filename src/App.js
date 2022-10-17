import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth part
import Register from "./auth/register/Register";
import Login from "./auth/login/Login";

// Client part
// import Topbar from "./components/Topbar";
import Home from "./client/home/Home";

// Components part
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
