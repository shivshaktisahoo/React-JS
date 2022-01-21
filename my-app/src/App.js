import React, { useState } from 'react';

function App(){
  // Declaring State and destructuring Array
  const [name, setName] = useState("Shiv");
  const [roll, setRoll] = useState(101);

  const handleClick = () => {
    // Updating State
    setName("Alok");
    setRoll(105);
  }
  return (
    <React.Fragment>
      {/* Accessing State */}
      <h1>Name: { name }</h1>
      <h1>Roll: { roll }</h1>
      <button onClick={handleClick}>Change</button>
    </React.Fragment>
  );

}

export default App;