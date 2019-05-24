import React, {Component} from 'react';

import {
  Col, ListGroup, Nav, Tab, TabContainer, TabContent, TabPane, Row
} from 'react-bootstrap';

import EquipmentCostForm from '../EquipmentCostForm';
import Overview from './Overview';
import PersonnelCostForm from '../PersonnelCostForm';
import TotalCostDisplay from './TotalCostDisplay';

export default class Calculator extends Component {
  render() {
    return (
      <div class="container">
        <TotalCostDisplay />
        <TabContainer id="left-tabs-example" defaultActiveKey="overview">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Link eventKey="overview">Overview</Nav.Link>
                <Nav.Link eventKey="personnel">Personnel</Nav.Link>
                <Nav.Link eventKey="equipment">Equipment</Nav.Link>
                <Nav.Link disabled>More...</Nav.Link>
              </Nav>
            </Col>
            <Col sm={10}>
              <TabContent>
                <TabPane eventKey="overview">
                  <Overview />
                </TabPane>
                <TabPane eventKey="personnel">
                  <PersonnelCostForm />
                </TabPane>
                <TabPane eventKey="equipment">
                  <EquipmentCostForm />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </div>
    );
  }
}