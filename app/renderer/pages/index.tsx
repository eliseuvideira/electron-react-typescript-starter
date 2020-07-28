import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <Link to="/page-2">Go to Page 2</Link>
    </div>
  );
};

export default Index;
