import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Layout from './hoc/Layout/Layout';
import TranslationGenerator from './containers/TranslationGenerator/TranslationGenerator';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';

const App = () => {
  return (
    <div>
      <Landing />
      <Layout>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={500} classNames='fade'>
                <Switch location={location}>
                  <Route path='/new-translation' component={Form} />
                  <Route exact path='/' component={TranslationGenerator} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Layout>
    </div>
  );
};

export default App;
