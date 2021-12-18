import React from 'react';
import Counter from './Counter';
import logo from './shreck.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter start={999999999999999} step={123} />
      </header>
    </div>
  );
}

export default App;
