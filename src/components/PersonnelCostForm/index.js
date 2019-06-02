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

export default class PersonnelCostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      attendees: [],
       cost: [],
       hours: 1
    }

    this.computeCost = this.computeCost.bind(this);
    this.addAttendee = this.addAttendee.bind(this);
    this.removeAttendee = this.removeAttendee.bind(this);
    this.nextAttendee = 0;
    this.currentKey = 0;
  }

  computeCost(costs, hours) {
    let totalCost = 0;
    if (costs.length > 0){
      costs.forEach(function(soldierCost) {
        totalCost += soldierCost;
      });
      totalCost *= hours;
    }
    this.props.updateCost(totalCost);
  }

  handleAttendeeChange = (id, soldierCost) => {
    let currentCosts = this.state.cost;
    currentCosts[id] = soldierCost;
    this.setState({cost: currentCosts});
    this.computeCost(currentCosts, this.state.hours);
  }

  handleDropdownChange = (hours) => {
    this.setState({hours: hours});
    this.computeCost(this.state.cost, hours);
  }

  addAttendee(event) {
    event.preventDefault();
    let newCosts = this.state.cost.concat([9.72]);
    this.setState({
      attendees: this.state.attendees.concat([
        { id: this.nextAttendee }
      ]),
      cost: newCosts
    })
    this.nextAttendee += 1;
    this.computeCost(newCosts, this.state.hours);
  }

  removeAttendee(event) {
    event.preventDefault();
    if (this.nextAttendee > 0) {
      this.nextAttendee -= 1;
      let newCosts = this.state.cost.slice(0, this.state.cost.length - 1)
      this.setState({
        attendees: this.state.attendees.slice(0, this.nextAttendee),
        cost: newCosts
      })
      this.computeCost(newCosts, this.state.hours);
    }
  }

  render() {
    let attendees = this.state.attendees;
    return (
        <Card>
          <Card.Body>
            <h3>Event Information</h3>
            <Form>
              <Form.Group>
                <Card.Title>Duration (in hours):</Card.Title>
                <NumberDropDown maxNum={10} handleChange={this.handleDropdownChange} />
                <hr />
              </Form.Group>

              <Card.Title>Attendees:</Card.Title>
              {
                attendees.map(attendee =>
                  <AttendeeFormGroup
                    key={attendee.id} id={attendee.id} handleChange={this.handleAttendeeChange}
                  />)
              }

              <Form.Group>
                <Row>
                  <Col sm="3">
                    <Button variant="info" onClick={this.addAttendee}>Add</Button>
                  </Col>
                  <Col sm="3">
                    <Button variant="info" onClick={this.removeAttendee}>Remove</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

     );
  }
}