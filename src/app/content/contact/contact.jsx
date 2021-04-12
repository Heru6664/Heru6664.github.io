import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <div className={"section"} id="contact">
        <Container className="fullpage page">
          <Row className="fullscreen center">
            <Col sm="6" className="fullscreen center">

            </Col>
            <Col sm="6" className="text-left fullscreen">
              <div>
                <h3 className="job">Contact Me!</h3>
                <p className="desc">
                  Heru Juliyanto Eka Supriyadi
                </p>
                <p className="desc">
                  +62 8953 2207 2106
                </p>
                <p className="desc">
                  heruu.js@protonmail.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
