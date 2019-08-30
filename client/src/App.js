import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Layout from './hoc/Layout/Layout';
import TranslationGenerator from './containers/TranslationGenerator/TranslationGenerator';
import Landing from './components/Landing/Landing';
import Spinner from './components/UI/Spinner/Spinner';

const SearchEngine = React.lazy(() =>
  import('./containers/SearchEngine/SearchEngine')
);
const Form = React.lazy(() => import('./components/Form/Form'));
const spinnerStyle = {
  left: '50%',
  margin: '0'
};

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
                  <Route
                    path='/new-translation'
                    render={() => (
                      <Suspense fallback={<Spinner style={spinnerStyle} />}>
                        <Form />
                      </Suspense>
                    )}
                  />
                  <Route
                    path='/search-engine'
                    render={() => (
                      <Suspense fallback={<Spinner style={spinnerStyle} />}>
                        <SearchEngine />
                      </Suspense>
                    )}
                  />
                  <Route path='/' component={TranslationGenerator} />
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
