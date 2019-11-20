import React, { useMemo, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AppNavbar from "../../shared/components/navbar/navbar";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default props => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return useMemo(
    () => (
      <Container fluid="true" id="container">
        <Row>
          <Col id="navbar" sm="12">
            {!hideOnScroll && <AppNavbar />}
          </Col>
          <Col id="body" sm="12" className="no-padding">
            {props.children}
          </Col>
        </Row>
      </Container>
    ),
    [hideOnScroll]
  );
};
