import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

export default class NumberDropDown extends Component {

  constructor(props) {
    super(props)

    this.options = []
    for (let i = 1; i <= this.props.maxNum; i++) {
      this.options.push(<option key={i} value={i}>{i}</option>)
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <Form.Control id="duration" as="select" onChange={this.handleChange}>
        {this.options}
      </Form.Control>
    );
  }
}
