import React from "react";
import { Link, useHistory } from "react-router-dom";

function Logintwo() {
  return (
    <div className="login">
      <form className="app__wrapper">
        <input
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          className="app__input"
        />
        <input
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          className="app__input"
        />
      </form>
      <button id="login">
        <p>Login</p>
      </button>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Logintwo;
