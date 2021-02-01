import React, { useState } from "react";
import { Link } from "react-router-dom";

import img from "./img/toa-heftiba-FV3GConVSss-unsplash.jpg";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={img} alt="furniture" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h4>E-mail</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
          <p>
            By sigining-in you agree to the SHOPX Conditions of Use & Sale.
            Please see our Privacy Notice, our cookies Notice and our
            Interest-Based Ads notice.
          </p>
          <button onClick={register} className="login__registerButton">
            {" "}
            Create you account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
