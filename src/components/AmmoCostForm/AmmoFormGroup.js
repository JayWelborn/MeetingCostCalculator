import React, { Component } from 'react';
import {
  Col, Form, Row
} from 'react-bootstrap';
import Select from 'react-select';

import ammo_table from '../data/ammo_table';

export default class AmmoFormGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      costPerUnit: 0,
      quantity: 1,
      option: null,
    }

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.update = this.update.bind(this);
  }

  handleTypeChange(option) {
    option = parseFloat(option.value);
    this.update(option, this.state.quantity);
  }

  handleQuantityChange(event) {
    event.preventDefault();
    let quantity = event.target.value;
    this.update(this.state.costPerUnit, quantity);
  }

  update(costPerUnit, quantity) {
    this.setState({
      costPerUnit: costPerUnit,
      quantity: quantity
    })
    this.props.handleChange(this.props.id, costPerUnit * quantity);
  }

  render() {
    const options = ammo_table;
    return (
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>Type:</Form.Label>
            <Select options={options} onChange={this.handleTypeChange}/>
          </Col>
          <hr/>
        </Row>
      </Form.Group>
    );
  }
}
