import React, { Component } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Row
} from 'react-bootstrap';

import AmmoFormGroup from './AmmoFormGroup'

export default class AmmoCostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      costs: [],
      ammoTypes: []
    }

    this.computeCost = this.computeCost.bind(this);
    this.addAmmoType = this.addAmmoType.bind(this);
    this.removeAmmoType = this.removeAmmoType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.currentId = 0;
  }

  addAmmoType(event) {
    event.preventDefault();
    let newCosts = this.state.costs.concat([0]);
    this.setState({
      ammoTypes: this.state.ammoTypes.concat([
        {id: this.currentId}
      ]),
      costs: newCosts
    })
    this.currentId += 1;
    this.computeCost(newCosts);
  }

  removeAmmoType(event) {
    event.preventDefault();
    if (this.currentId > 0) {
      this.currentId -= 1;
      let newCosts = this.state.costs.slice(0, this.state.costs.length - 1);
      let newAmmoTypes = this.state.ammoTypes.slice(0, this.currentId);
      this.setState({
        ammoTypes: newAmmoTypes,
        costs: newCosts
      })
      this.computeCost(newCosts);
    }
  }

  computeCost(costs) {
    let totalCost = 0;
    if (costs.length > 0) {
      costs.forEach(function(cost) {
        totalCost += parseFloat(cost);
      });
    }
    this.props.updateCost(totalCost);
  }

  handleChange = (id, cost) => {
    let newCosts = this.state.costs;
    newCosts[id] = cost;
    this.setState({costs: newCosts})
    this.computeCost(newCosts);
  }

  render() {
    let ammoTypes = this.state.ammoTypes;
    return (
      <Card>
        <Card.Body>
          <h3>Ammunition</h3>
          <Form>
            <Card.Title>Ammunition Types:</Card.Title>
            {
              ammoTypes.map(ammo => [
                <AmmoFormGroup
                  key={ammo.id} id={ammo.id} handleChange={this.handleChange}
                />
               ])
            }
            <Form.Group>
              <Row>
                <Col sm="3">
                  <Button variant="info" onClick={this.addAmmoType}>Add</Button>
                </Col>
                <Col sm="3">
                  <Button variant="info" onClick={this.removeAmmoType}>Remove</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

