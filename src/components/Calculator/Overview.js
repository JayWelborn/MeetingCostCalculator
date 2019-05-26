import React, { Component } from 'react';

import CanvasJSReact from '../../lib/canvasjs.react';
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Overview extends Component {
  constructor(props) {
    super(props)

    CanvasJS.addColorSet(
      "customColorSet",
      [
      "#007bff",
      "#fd7e14",
      "#ffc107",
      "#28a745",
      "#20c997",
      "#17a2b8",
      ]
    );
  }

  render() {
    let chart = <CanvasJSChart options={this.props.options} />
    return (
      <Card className="container">
        <Card.Body>
          <Card.Title>Overview Page Goes Here</Card.Title>
          <p>
            This page will contain a graph showing the cost breakdown by cost type. The graph below
            is for example purposes only.
          </p>
          <CanvasJSChart options={this.props.options} />
        </Card.Body>
      </Card>
    );
  }
}
