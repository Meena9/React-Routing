import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./server/AppRouter";
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  const [login, setlogin] = useState(false);
  const loginHandel = () => {
    console.log("valu", login);

    setlogin(!login);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/meena">User</Link>

        <AppRouter login={login} />
        <button onClick={loginHandel.bind(this)}>login</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
