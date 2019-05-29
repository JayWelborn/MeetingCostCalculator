import React, { Component } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Row
} from 'react-bootstrap';

import AmmoFormGroup from './AmmoFormGroup'

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      costs: []
    }
  }

  computeCost(costs) {
    let totalCost = 0;
    if (costs.length > 0) {
      costs.forEach(function(ammoCost) {
        totalCost += ammoCost;
      })
    }
    this.props.updateCost(totalCost);
  }

  render() {
    return (
      <div></div>
    );
  }
}
