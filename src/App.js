import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Smv from "./Smv";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="plus">+</span>
        <img className="Sirv-logo" src="https://sirv-cdn.sirv.com/website/img/sirv-logo.svg" alt="Sirv logo"/>
      </header>
      <Smv />
    </div>
  );
}
