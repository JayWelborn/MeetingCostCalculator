import React, { Component } from 'react';
import {
  Col,
  Form,
  Row
} from 'react-bootstrap'

import pay_table from '../data/pay_table.js';
import ranks from '../data/ranks.js';
import service_years from '../data/service_years.js';


export default class AttendeeFormGroup extends Component {

  constructor(props) {
    super(props);

    let options = []
    ranks.forEach(function(rank) {
      options.push(<option value="{rank}">{rank}</option>)
    });
    let service = []
    service_years.forEach(function(year){
      service.push(<option value="{year}">{year}</option>)
    });

    this.state = {
      options: options,
      service: service
    }
  }

  render() {
    return (
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>Rank: </Form.Label>
            <Form.Control id="rank" as="select">
              {this.state.options}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Time in Service: </Form.Label>
            <Form.Control id="service-time" as="select">
              {this.state.service}
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

