import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Person, Country} from "./components/Person"

function App() {
  // const getAge = (name: string): number =>{
  //   return 99
  // }

  return (
    <div className="App">
      <Person name="raj" email="raj@gmail.com" age={28} isMarried={false} friends={["assad", "dsvds", "aaDDAS"]} country={Country.Europe} />
    </div>
  );
}

export default App;
