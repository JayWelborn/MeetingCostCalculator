import React, { Component } from 'react';
import {
  Col,
  Form,
  Row
} from 'react-bootstrap'


export default class AttendeeFormGroup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: [],
      service: []
    }

    this.addOptions.bind(this);

    this.addOptions("E", 9);
    this.addOptions("W", 5);
    this.addOptions("O", 10);

    for (let i = 1; i <= 20; i++) {
      this.state.service.push(<option>{i}</option>);
    }
    this.state.service.push(<option>20+</option>)
  }

  addOptions(prefix, cap) {
    for (let i = 1; i <= cap; i++) {
      this.state.options.push(<option value={prefix+i}>{prefix + i}</option>)
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

