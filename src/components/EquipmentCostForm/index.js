import React, { Component } from 'react';

import {Card} from 'react-bootstrap';

export default class EquipmentCostForm extends Component {
  render() {
    return (
      <Card className="container">
        <Card.Body>
          <Card.Title>EquipmentCostForm Goes Here</Card.Title>
          <p>
            This page will contain a form with different common types of equipment.
          </p>
        </Card.Body>
      </Card>
    );
  }
}
