import React from "react";
import "./App.css";
import Game from "./Game.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Game />
        
        <p>Let's Play Tic Tac Bro!</p>
        
      </header>
    </div>
  );
}

export default App;
