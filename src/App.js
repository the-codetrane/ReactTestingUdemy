import React from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import "./App.css";

const App = () => (
  <div className="App container">
    <h1>Dat Jotto Jawn</h1>
    <Congrats success={false} />
    <GuessedWords
      guessedWords={[{ guessedWord: "dongs", letterMatchCount: 3 }]}
    />
    <h2>Does this form work?</h2>
    <Input secretWord="miasma" />
  </div>
);

export default App;
