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
      quantity: 1
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleOptionChange(event) {
    let option = event.target.value;
    let costPerHour = pay_table[option][this.state.currentService] / 173;
    this.setState({currentOption: option, cost: costPerHour});
    this.props.handleChange(this.props.id, costPerHour);
  }

  handleServiceChange(event) {
    event.preventDefault();
    let service = event.target.value;
    let costPerHour = pay_table[this.state.currentOption][service] / 173;
    costPerHour *= this.state.quantity;
    this.setState({currentService: service, cost: costPerHour});
    this.props.handleChange(this.props.id, costPerHour);
  }

  handleQuantityChange = (quantity) => {
    let costPerHour = this.state.cost * quantity;
    this.setState({quantity: quantity});
    this.props.handleChange(this.props.id, costPerHour);
  }

  render() {
    return (
      <Form.Group>
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
      </Form.Group>
    );
  }
}

