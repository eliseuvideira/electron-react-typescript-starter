import React, { useState } from 'react';

const Index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
};

export default Index;
