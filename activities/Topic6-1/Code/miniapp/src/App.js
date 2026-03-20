import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AboutThisSite from "./AboutThisSite";
import ContactUs from "./ContactUs";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import User from "./User";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (from, navigate) => {
    console.log("handleLogin from", from);
    console.log("handleLogin navigate", navigate);
    setLoggedIn(true);
    navigate(from, { replace: true });
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route
          path="/about"
          element={
            <PrivateRoute isLoggedIn={loggedIn}>
              <AboutThisSite />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute isLoggedIn={loggedIn}>
              <ContactUs />
            </PrivateRoute>
          }
        />
        <Route path="/user/:name" element={<User />} />
        <Route path="/login" element={<LoginPage onClick={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
