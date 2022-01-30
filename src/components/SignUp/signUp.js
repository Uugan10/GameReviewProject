import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import league from "../picture/image10.png";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const League = styled.img`
  width: 56vw;
  height: 100vh;
  /* calc(100vh - 30px); */
`;
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
    height: 90vh;
    padding-top: 15%;
  }
  h1 {
    height: 8vh;
    width: 14vw;
    font-size: 64px;
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

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  // const history = useHistory();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, zip, date);
  };
  console.log(user);
  useEffect(() => {
    if (loading) return;
    // if (user) history.replace("/dashboard");
  }, [user, loading]);

  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {

    await signInWithGoogle();
    navigate("/");
  };

  return (
    <div className="register">
      <Wrapper>
        <League src={league} style={{position:"relative"}}/>
        <Login>
          <div className="register__container">
            <form>
              <h1
                style={{
                  fontFamily: "Outfit, sans-serif, Teko, sans-serif",
                  color: "white",
                }}
              >
                SIGN UP
              </h1>
              <input
                type="text"
                className="register__textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="   Username"
                style={{ height: "6vh", width: "16vw ",borderRadius: "9px", }}
              />
              <input
                type="text"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="   E-mail"
                style={{ height: "6vh", width: "16vw ",borderRadius: "9px", }}
              />
              <input
                type="number"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="   zip-code"
                style={{ height: "6vh", width: "16vw ",borderRadius: "9px", }}
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="   birth date"
                style={{ height: "6vh", width: "16vw ",borderRadius: "9px", }}
              />
              <input
                type="password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="   Password"
                style={{ height: "6vh", width: "16vw ",borderRadius: "9px", }}
              />
              <Button
                variant="contained"
                className="register__btn"
                onClick={register}
                style={{ backgroundColor: "#83F2DE", color: "black",borderRadius: "9px", }}
              >
                SIGN UP
              </Button>

              <Link
                to="/SignIn"
                style={{ color: "Black", textDecoration: "none" }}
              >
                <Button variant="text" style={{ color: "#83F2DE",borderRadius: "9px",}}>
                  SIGN IN
                </Button>
              </Link>
              <div style={{position:"absolute", top:"92%", left:"49%", display:"flex", justifyContent:"space-between", width:"225px"}}> 
              <Button
                variant="contained"
                className="register__btn"
                onClick={handleGoogleSignIn}
                style={{ backgroundColor: "#83F2DE", color: "black",borderRadius: "9px", }}
              >
                Google
              </Button>
              </div>
            </form>
          </div>
        </Login>
      </Wrapper>
    </div>
  );
}

export default Register;
export { auth };
