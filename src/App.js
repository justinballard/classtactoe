import React from "react";
import "./App.css";
import Game from "./Game.js";
import 'bootstrap/dist/css/bootstrap.min.css';
/*
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/> 
*/
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
