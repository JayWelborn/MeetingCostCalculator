import React, {Component} from 'react';
import {
  Button,
  Col,
  Form,
  Row
} from 'react-bootstrap';

import AttendeeFormGroup from './AttendeeFormGroup.js'

export default class CostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      attendees: [
        <AttendeeFormGroup key={0} id={0} handleChange={this.handleAttendeeChange}/>,
        <AttendeeFormGroup key={1} id={1} handleChange={this.handleAttendeeChange} />
       ],
       cost: [0, 0]
    }
    this.submitForm = this.submitForm.bind(this);
    this.addAttendee = this.addAttendee.bind(this);
    this.removeAttendee = this.removeAttendee.bind(this);
    this.nextAttendee = 2;
  }

  submitForm(event) {
    event.preventDefault();
    let totalCost = 0;
    this.state.cost.forEach(function(soldierCost) {
      totalCost += soldierCost;
    })
    this.props.handleSubmit(totalCost.toFixed(2));
  }

  handleAttendeeChange = (id, soldierCost) => {
    let currentCosts = this.state.cost;
    currentCosts[id] = soldierCost
    this.setState({cost: currentCosts})
  }

  addAttendee(event) {
    event.preventDefault();
    this.setState({
      attendees: this.state.attendees.concat([
        <AttendeeFormGroup
          key={this.nextAttendee} id={this.nextAttendee} handleChange={this.handleAttendeeChange}
         />
      ]),
      cost: this.state.cost.concat([0])
    })
    this.nextAttendee += 1;
  }

  removeAttendee(event) {
    event.preventDefault();
    this.setState({
      attendees: this.state.attendees.slice(0, this.nextAttendee - 1),
      cost: this.state.cost.slice(0, this.state.cost.length - 2)
    })
    if (this.nextAttendee > 0) {
        this.nextAttendee -= 1;
    }
  }

  render() {
    let attendees = this.state.attendees;
    return (
      <Form className="card card-body" onSubmit={this.submitForm}>
        <h3 className="card-title">Attendees:</h3>
        {attendees}
        <Form.Group>
          <Row>
            <Col>
              <Button variant="info" onClick={this.addAttendee}>Add Attendee</Button>
            </Col>
            <Col>
              <Button variant="info" onClick={this.removeAttendee}>Remove</Button>
            </Col>
            <Col sm={6}>
              <Button variant="primary" type="submit">Calculate</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
     );
  }
}