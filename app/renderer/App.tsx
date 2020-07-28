import React from 'react';
import Router from './Router';
import 'typeface-roboto';
import 'typeface-roboto-slab';
import { typography } from './utils/typography';
import { Helmet } from 'react-helmet';

const App = () => (
  <>
    <Helmet>
      <style>{`${typography.createStyles()}`}</style>
    </Helmet>
    <Router />
  </>
);

export default App;
