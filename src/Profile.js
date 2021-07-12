import React, { useEffect } from "react";
import { auth, db } from "./firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import "./Profile.css";

function Profile() {
  const history = useHistory();
  const [user] = useAuthState(auth);

  const logout = () => {
    auth.signOut();
    history.push("/");
  };

  const [userSnapshot] = useCollection(
    db.collection("userInfo").where("email", "==", user?.email)
  );

  const currentUser = userSnapshot?.docs?.[0]?.data();
  console.log(currentUser);
  useEffect(() => {
    if (user) {
      db.collection("userInfo").doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  }, [user]);

  return (
    <div className="profile">
      <h1>You are logged in ! </h1>
      <h2>Email: {user?.email}</h2>
      <p>
        Last Logged In:{" "}
        {new Date(currentUser?.timestamp?.toDate()).toUTCString()}
      </p>

      <button onClick={logout}> Logout</button>
    </div>
  );
}

export default Profile;
