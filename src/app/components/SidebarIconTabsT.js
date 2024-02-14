'use client';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';

const SidebarIconTabsT = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Nav justified pills tabs>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => handleTabClick('1')}
          >
            1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            h
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => handleTabClick('2')}
          >
            2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='6'>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm='6'>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SidebarIconTabsT;
