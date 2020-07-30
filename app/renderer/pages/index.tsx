import React, { useState } from 'react';
import Layout from '../components/layout';
import { FaPlus } from 'react-icons/fa';

const Index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Layout title="Home">
      <p>Counter {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        <FaPlus />
      </button>
    </Layout>
  );
};

export default Index;
