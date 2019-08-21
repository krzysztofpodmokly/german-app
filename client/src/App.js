import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import TranslationGenerator from './containers/TranslationGenerator/TranslationGenerator';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';

const App = () => {
  return (
    <div>
      <Landing />
      <Layout>
        <Switch>
          <Route path='/new-translation' component={Form} />
          <Route exact path='/' component={TranslationGenerator} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
