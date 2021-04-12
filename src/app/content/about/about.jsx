import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cat from "../../../assets/images/cat.png";

export default class About extends Component {
  render() {
    return (
      <div className={"section"} id="about">
        <Container className="fullpage page">
          <Row className="fullscreen center">
            <Col sm="6" className="fullscreen center">
              <img src={cat} alt="cat" className="cat" />
            </Col>
            <Col sm="6" className="text-left fullscreen">
              <div>
                <h3 className="job">Mobile Developer</h3>
                <p className="desc">
                  I’m a Professional Mobile Developer, passionate about design &
                  creative work. Curently Working as a fulltime mobile dev and
                  freelance mobile dev. I read books and comics, play video game
                  and watch movie in my freetime.
                </p>
              </div>
              <div>
                <h3 className="job">Ailurophile</h3>
                <p className="desc">
                  I'm a cat lover, Introverted, Intuitive, Thinking, and Judging.{" "}
                  A Thirst for Knowledge. Boldest of dreamers
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
