import React, {Component} from 'react';

import {Alert} from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return (
      <main className="card card-body header container">
        <h1 className="card-title">Event Cost Calculator</h1>
        <p>
          This calculator calculates the cost of a Department of Defense event based on the
          length of the event, attendees, equipment, and other factors.
        </p>
        <Alert variant="info">
          This is a proof of concept prototype, not a finished product.
         </Alert>
      </main>
    );
  }
}
