import React, {Component} from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup
} from 'react-bootstrap';

export default class CostForm extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <Form className="card card-body" onSubmit={this.props.handleSubmit}>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit">Calculate</Button>
          </Col>
      </FormGroup>
      </Form>
     );
  }
}