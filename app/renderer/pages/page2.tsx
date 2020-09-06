import React, { useRef, useState } from 'react';
import Layout from '../components/layout';

const Page2 = () => {
  const [image, setImage] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    setImage(
      (ref.current &&
        ref.current.files &&
        ref.current.files[0] &&
        (ref.current.files[0] as any).path) ||
        '',
    );
  };

  return (
    <Layout title="Page 2">
      <div>This is Page 2</div>
      <form onSubmit={onSubmit}>
        <section>
          <input ref={ref} type="file" />
          <button type="submit">Click</button>
        </section>
      </form>
      {image && (
        <picture>
          <img src={`media://${image}`} />
        </picture>
      )}
    </Layout>
  );
};

export default Page2;
