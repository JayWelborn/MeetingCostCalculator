import React, {Component} from 'react';

import {
  Switch,
  Route
} from 'react-router-dom';

import Calculator from '../Calculator';
import Home from '../Home';

export default class Routes extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/calculator" component={Calculator} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}
