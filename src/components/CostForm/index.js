import React, {Component} from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Row
} from 'react-bootstrap';

import AttendeeFormGroup from './AttendeeFormGroup.js'
import NumberDropDown from './NumberDropDown.js'

export default class CostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      attendees: [
        <AttendeeFormGroup key={0} id={0} handleChange={this.handleAttendeeChange}/>,
        <AttendeeFormGroup key={1} id={1} handleChange={this.handleAttendeeChange} />
       ],
       cost: [0, 0],
       hours: 1
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
    });
    totalCost *= this.state.hours;
    this.props.handleSubmit(totalCost.toFixed(2));
  }

  handleAttendeeChange = (id, soldierCost) => {
    let currentCosts = this.state.cost;
    currentCosts[id] = soldierCost
    this.setState({cost: currentCosts})
  }

  handleDropdownChange = (hours) => {
    this.setState({hours: hours});
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
      <Card>
        <Card.Body>
          <h3>Event Information</h3>
          <Form onSubmit={this.submitForm}>
            <Card.Title>Duration:</Card.Title>
            <NumberDropDown maxNum={10} handleChange={this.handleDropdownChange} />
            <Card.Title>Attendees:</Card.Title>
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
        </Card.Body>
      </Card>

     );
  }
}