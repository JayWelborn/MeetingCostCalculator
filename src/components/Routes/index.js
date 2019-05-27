import React, {Component, Suspense} from 'react';

import {
  Switch,
  Route
} from 'react-router-dom';

const Calculator = React.lazy(() => import('../Calculator'));
const Home       = React.lazy(() => import('../Home'));

export default class Routes extends Component {
  render() {
    return (
      <main className="container">
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>

            <Route path="/calculator" component={Calculator} />
            <Route path="/" component={Home} />

          </Switch>
        </Suspense>
      </main>
    );
  }
}
