import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/profile");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        />
      </form>
      <button id="login" onClick={() => loginUser()}>
        <p>Login</p>
      </button>
      <p className="text">No Account?</p>
      <Link className="loginLink" to="/register">
        Register Now
      </Link>
    </div>
  );
}

export default Login;
