import React, { Component } from 'react';

import {Card} from 'react-bootstrap';

export default class TotalCostDisplay extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>${this.props.totalCost}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
