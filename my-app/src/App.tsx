import React from 'react';
import './App.css';

function App() {
  const nameObj = {
    name: 'Anvu',
    age: 25,
    email: 'vuan@gmail.com'
  }
  const [name, setName] = React.useState('Anvu');
  const handleChangeName = () => {
    setName('Name anvu new');
  }
  return (
    <div className="App">
      <div>{nameObj.name}</div>
      <div>{nameObj.age}</div>
      <div>{nameObj.email}</div>
      <div>{name}</div>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default App;
