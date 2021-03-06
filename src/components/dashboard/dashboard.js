import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db, logout } from "../../firebase";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;

    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
        <Link to="/profile">
          <button className="register_Phone">See profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
