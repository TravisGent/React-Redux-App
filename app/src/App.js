import React from 'react';
import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import './App.css';
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty Data</h1>
      <CharacterList />
    </div>
  );
}

export default App;
