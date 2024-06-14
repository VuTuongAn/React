import React from 'react';
import './App.css';

function App() {
  const name = 'Anvu';
  const nameObj = {
    name: 'Anvu',
    age: 25,
    email: 'vuan@gmail.com'
  }
  return (
    <div className="App">
      <div>{name}</div>
      <div>{nameObj.name}</div>
      <div>{nameObj.age}</div>
      <div>{nameObj.email}</div>
    </div>
  );
}

export default App;
