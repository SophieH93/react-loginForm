import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "./firebase";
import firebase from "firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const registerUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection("userInfo").add({
          firstName: firstName,
          lastName: lastName,
          email: email,
          number: number,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="register">
      <h1>Register Now</h1>
      <form className="form">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="fname"
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          name="lname"
          placeholder="Last Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
        />
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          name="tel"
          placeholder="Number"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password effect-1"
          placeholder="Password"
        />
      </form>
      <button id="register" onClick={registerUser}>
        <p>Singup</p>
      </button>
      <p className="registerQuestion">Already Registered? </p>
      <Link className="login_register" to="/">
        Login{" "}
      </Link>{" "}
    </div>
  );
}

export default Register;
