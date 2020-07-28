import React, { useState } from 'react';
import Layout from '../components/layout';

const Index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Layout title="Home">
      <span>Counter {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </Layout>
  );
};

export default Index;
