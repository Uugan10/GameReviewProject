import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";

import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./picture/Logo.png";

const StyledNavbar = styled.div`
  width: 100%;
  height: 90px;
  background-color: #83f2de;
  font-size: 25px;
  font-weight: bold;
  padding-top: 10px;
  ul {
    display: flex;
    justify-content: space-evenly;
    font-family: "Verdana", Sans-serif;
    align-items: center;
  }
`;
const Logo = styled.img`
  height: 53px;
  width: 180px;
`;

export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div style={{ backroundColor: "black" }}>
      <StyledNavbar>
        <ul>
          <Logo src={logo} />
          <Link to="/" style={{ color: "White", textDecoration: "none" }}>
            <div style={{ color: "black" }}>HOME</div>
          </Link>
          <Link
            to="/Reviews"
            style={{ color: "Black", textDecoration: "none" }}
          >
            REVIEWS
          </Link>

          {!user && !loading && (
            <Link
              to="/SignIn"
              style={{ color: "Black", textDecoration: "none" }}
            >
              <div>SIGN IN</div>
            </Link>
          )}
          {!user && !loading && (
            <Link
              to="/SignUP"
              style={{ color: "Black", textDecoration: "none" }}
            >
              <div>SIGN UP</div>
            </Link>
          )}

          {user && <div>{`Hello, ${user?.displayName}`}</div>}
          {user && <span onClick={logout} style={{ color: "Black", textDecoration: "none",cursor: "pointer"}}> LOG OUT</span>}
        </ul>
      </StyledNavbar>
    </div>
  );
};
