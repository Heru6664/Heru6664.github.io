import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Resume extends Component {
  render() {
    return (
      <div className={"section"} id="resume">
        <Container className="fullpage page">
          <Row className="fullscreen center">
            <Col sm="12" className="text-left fullscreen">
              <div>
                <h3 className="job">Basic Skills</h3>
                <p className="desc">
                  Javascript
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
