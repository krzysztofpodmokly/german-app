import React from 'react';

import Layout from './hoc/Layout/Layout';
import TranslationGenerator from './containers/TranslationGenerator/TranslationGenerator';
import Landing from './components/Landing/Landing';

const App = () => {
  return (
    <div>
      <Landing />
      <Layout>
        <TranslationGenerator />
      </Layout>
    </div>
  );
};

export default App;
