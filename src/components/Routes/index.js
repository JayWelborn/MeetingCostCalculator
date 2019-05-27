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
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/calculator" component={Calculator} />
            <Route path="/" component={Home} />
          </Suspense>
        </Switch>
      </main>
    );
  }
}
