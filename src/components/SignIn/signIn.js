import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { signInWithGoogle } from "../../firebase";
import league from "../picture/image10.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  padding-top: 0%;
`;
const Login = styled.div`
  background-color: #000530;
  height: 100vh;
  width: 44vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding-top: 15%;
  }
  h1 {
    height: 8vh;
    width: 14vw;
    font-size: 64px;
    font-family: Teko;
    font-style: normal;
  }
  input {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    ::placeholder {
      color: white;
    }
    :focus {
      outline: none !important;
      border: 3px solid white;
    }
  }
`;
const League = styled.img`
  width: 56vw;
  height: 100vh;
  /* calc(100vh - 30px); */
`;

export const SignInPage = () => {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {

    await signInWithGoogle();
    navigate("/");
  };

  return (
    <div>
      <Wrapper>
        <League src={league} />
        <Login>
          <form>
            <h1
              style={{
                fontFamily: "Outfit, sans-serif, Teko, sans-serif",
                color: "white",
              }}
            >
              SIGN IN
            </h1>
            <input
              type="text"
              placeholder="   Email or Username"
              style={{ height: "6vh", width: "16vw " }}
            />
            <br></br>
            <input
              type="password"
              placeholder="   Password"
              style={{ height: "6vh", width: "16vw" }}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#83F2DE",
                color: "black",
                borderRadius: "9px",
              }}
            >
              SIGN IN
            </Button>
            <Link
              to="/SignUp"
              style={{ color: "Black", textDecoration: "none" }}
            >
              <Button variant="text" style={{ color: "#83F2DE" }}>
                SIGN UP
              </Button>
            </Link>
            <div
              style={{
                position: "absolute",
                top: "92%",
                left: "49%",
                display: "flex",
                justifyContent: "space-between",
                width: "225px",
              }}
            >
              <Button
                variant="contained"
                onClick={handleGoogleSignIn}
                style={{
                  backgroundColor: "#83F2DE",
                  color: "black",
                  borderRadius: "9px",
                }}
              >
                GOOGLE
              </Button>
            </div>
          </form>
        </Login>
      </Wrapper>
    </div>
  );
};
