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
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      </main>
    );
  }
}
