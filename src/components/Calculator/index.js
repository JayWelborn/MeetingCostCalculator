import React, {Component, Suspense} from 'react';

import {
  Col, ListGroup, Nav, Tab, TabContainer, TabContent, TabPane, Row
} from 'react-bootstrap';

import JSChartOptions from './ChartOptions.js';
import TotalCostDisplay from './TotalCostDisplay';

const EquipmentCostForm   = React.lazy(() => import('../EquipmentCostForm'));
const Overview            = React.lazy(() => import('./Overview'));
const PersonnelCostForm   = React.lazy(() => import('../PersonnelCostForm'));

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personnelCost: 0.00,
      equipmentCost: 0.00,
      ammunitionCost: 0.00,
      facilitiesCost: 0.00,
      totalCost: 0.00,
      options: JSChartOptions
    }

    this.updatePersonnelCost = this.updatePersonnelCost.bind(this);
    this.updateEquipmentCost = this.updateEquipmentCost.bind(this);
    this.updateCost = this.updateCost.bind(this);
  }

  updateCost(personnelCost, equipmentCost, ammunitionCost, facilitiesCost) {
    let options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Costs"
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y} (#percent)%",
          startAngle: 45,
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} ${y} (#percent)%",
          dataPoints: [
            {y: personnelCost, label: "Personnel"},
            {y: equipmentCost, label: "Equipment"},
            {y: ammunitionCost, label: "Ammunition"},
            {y: facilitiesCost, label: "Facilities"}
          ]
        },
      ],
      colorSet: "customColorSet",
    }
    let totalCost = personnelCost + equipmentCost + ammunitionCost + facilitiesCost;
    totalCost = parseFloat(totalCost).toFixed(2);
    this.setState({
      personnelCost: personnelCost,
      equipmentCost: equipmentCost,
      ammunitionCost: ammunitionCost,
      facilitiesCost: facilitiesCost,
      totalCost: totalCost,
      options: options
    });
  }

  updatePersonnelCost = (cost) => {
    this.updateCost(
      cost.toFixed(2),
      this.state.equipmentCost,
      this.state.ammunitionCost,
      this.state.facilitiesCost
     );
  }

  updateEquipmentCost = (cost) => {
    this.updateCost(
      this.state.personnelCost,
      cost.toFixed(2),
      this.state.ammunitionCost,
      this.state.facilitiesCost
    )
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
                  <Suspense fallback={<div>Loading...</div>}>
                    <Overview options={this.state.options}/>
                  </Suspense>
                </TabPane>
                <TabPane eventKey="personnel">
                  <Suspense fallback={<div>Loading...</div>}>
                    <PersonnelCostForm updateCost={this.updatePersonnelCost} />
                  </Suspense>
                </TabPane>
                <TabPane eventKey="equipment">
                  <Suspense fallback={<div>Loading...</div>}>
                    <EquipmentCostForm updateCost={this.updateEquipmentCost} />
                  </Suspense>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </section>
    );
  }
}