import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { useState } from "react";
import { Review } from "./components/review/review";
import { SignInPage } from "./components/SignIn/signIn";
import ReviewDetail from "./components/reviewDetail/reviewDetail";
import Dashboard from "./components/dashboard/dashboard";
import Register from "./components/SignUp/signUp";

const userDummyData = [
  {
    userName: "Uugan10",
    email: "uugana@gmail.com",
    birthDay: "01/23/2005",
    zipCode: 20515,
    id: 1,
    passWord: "Pugna1020",
    confirmPassWord: "Pugna1020",
  },
  {
    userName: "Imperius",
    email: "jijaana@gmail.com",
    birthDay: "12/03/2000",
    zipCode: 14576,
    id: 2,
    passWord: "Imperius2012",
    confirmPassWord: "Imperius2012",
  },
];

function App() {
  const [users, setUsers] = useState(userDummyData);
  // const [items, setItems] = useState(items)

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Reviews" element={<Review />} />
            <Route path="/Reviews/:reviewId" element={<ReviewDetail />} />

            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route
              path="/SignUP"
              element={<Register setUsers={setUsers} users={users} />}
            />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/SignIn" element={<SignInPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
