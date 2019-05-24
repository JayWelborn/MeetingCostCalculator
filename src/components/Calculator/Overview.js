import React, { Component } from 'react';

import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Overview extends Component {
  render() {
    return (
      <Card className="container">
        <Card.Body>
          <Card.Title>Overview Page Goes Here</Card.Title>
          <p>
            This page will contain a bar graph showing the cost breakdown by cost type.
          </p>
        </Card.Body>
      </Card>
    );
  }
}
