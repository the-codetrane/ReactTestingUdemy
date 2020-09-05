import React from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import "./App.css";

const App = () => (
  <div className="App container">
    <h1>Dat Jotto Jawn</h1>
    <Congrats success={true} />
    <GuessedWords
      guessedWords={[{ guessedWord: "dongs", letterMatchCount: 3 }]}
    />
  </div>
);

export default App;
