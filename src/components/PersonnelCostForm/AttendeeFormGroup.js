import React, { Component } from 'react';
import {
  Col,
  Form,
  Row
} from 'react-bootstrap'

import NumberDropDown from './NumberDropDown.js'
import pay_table from '../data/pay_table.js';
import ranks from '../data/ranks.js';
import service_years from '../data/service_years.js';


export default class AttendeeFormGroup extends Component {

  constructor(props) {
    super(props);

    let options = []
    ranks.forEach(function(rank, index) {
      options.push(<option key={index} value={rank}>{rank}</option>)
    });
    let service = []
    service_years.forEach(function(year, index){
      service.push(<option key={index} value={year}>{year}</option>)
    });

    this.state = {
      options: options,
      service: service,
      currentOption: "E-1",
      currentService: "2 or less",
      cost: 9.72,
      quantity: 1,
      valid: true
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.updateCost = this.updateCost.bind(this);
  }

  updateCost(option, service) {
    if (pay_table[option][service] !== null) {
      let costPerHour = pay_table[option][service] / 173;
      costPerHour *= this.state.quantity;
      this.setState({currentOption: option, currentService: service, cost: costPerHour, valid: true});
      this.props.handleChange(this.props.id, costPerHour);
    } else {
      this.setState({valid: false, cost: 0});
      this.props.handleChange(this.props.index, 0);
    }
  }

  handleOptionChange(event) {
    event.preventDefault();
    let option = event.target.value;
    this.updateCost(option, this.state.currentService);
  }

  handleServiceChange(event) {
    event.preventDefault();
    let service = event.target.value;
    this.updateCost(this.state.currentOption, service);
  }

  handleQuantityChange = (quantity) => {
    let costPerHour = this.state.cost * quantity;
    this.setState({quantity: quantity});
    this.props.handleChange(this.props.id, costPerHour);
  }

  render() {
    let className = this.state.valid ? "" : "invalid"
    return (
      <Form.Group className={className}>
        <Row>
          <Col>
            <Form.Label>Rank:</Form.Label>
            <Form.Control id="rank" as="select" onChange={this.handleOptionChange}>
              {this.state.options}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Time in Service:</Form.Label>
            <Form.Control id="service-time" as="select" onChange={this.handleServiceChange}>
              {this.state.service}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Quantity:</Form.Label>
            <NumberDropDown maxNum={10} handleChange={this.handleQuantityChange} />
          </Col>
        </Row>
        <hr/>
      </Form.Group>
    );
  }
}

