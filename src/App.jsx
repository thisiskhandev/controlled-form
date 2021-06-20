import React, { useState } from "react";

const App = () => {
  const [cName, setName] = useState();
  const [fullName, setFullName] = useState();
  const InputEvent = (objectss) => {
    console.log(objectss.target.value);
    setName(objectss.target.value);
  };

  const getName = () => {
    setFullName(cName);
  };
  return (
    <>
      <div className="parent">
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={InputEvent}
          // value={cName}
        />
        <button onClick={getName}>Submit 💡</button>
      </div>
    </>
  );
};

export default App;
