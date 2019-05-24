import React, {Component} from 'react';

import {
  Col, ListGroup, Nav, Tab, TabContainer, TabContent, TabPane, Row
} from 'react-bootstrap';

import EquipmentCostForm from '../EquipmentCostForm';
import Overview from './Overview';
import PersonnelCostForm from '../PersonnelCostForm';
import TotalCostDisplay from './TotalCostDisplay';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personnelCost: 0,
      equipmentCost: 0,
      totalCost: 0.00
    }

    this.updatePersonnelCost = this.updatePersonnelCost.bind(this);
    this.updateEquipmentCost = this.updateEquipmentCost.bind(this);
  }

  updatePersonnelCost = (cost) => {
    let totalCost = this.state.equipmentCost + cost;
    totalCost = totalCost.toFixed(2);
    this.setState({
      personnelCost: cost,
      totalCost: totalCost
    });
  }

  updateEquipmentCost = (cost) => {
    let totalCost = this.state.personnelCost + cost;
    this.setState({
      equipmentCost: cost,
      totalCost: totalCost
    });
  }

  render() {
    let totalCost = this.state.totalCost;
    return (
      <section>
        <TotalCostDisplay totalCost={totalCost} />
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
                  <PersonnelCostForm updateCost={this.updatePersonnelCost} />
                </TabPane>
                <TabPane eventKey="equipment">
                  <EquipmentCostForm updateCost={this.updateEquipmentCost} />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </section>
    );
  }
}