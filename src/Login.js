import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import img from "./img/toa-heftiba-FV3GConVSss-unsplash.jpg";
import { auth } from "./firebase";

import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
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
            By sigining-in you agree to the WOMEN&MEN Conditions of Use & Sale.
            Please see our Privacy Notice, our cookies Notice and our
            Interest-Based Ads notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create you account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
