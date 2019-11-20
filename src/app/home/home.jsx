import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container fluid="true" id="home" className="fullpage">
        <Row className="fullscreen center">
          <Col sm="12" className="text-left fullscreen center">
            <div>
              <h1 className="name">Heru Julyanto</h1>
              <h3 className="job">Mobile Developer</h3>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
