import React from "react";
import { Row, Col } from "../../components/Grid";

const DeleteEvent = props => (
  <Col size="12">
    <Row>
      <Col size="8">Are You Sure?</Col>
      <Col size="4"></Col>
    </Row>
    <Row>
      <Col size="8">
        <a className="button" onClick={() => props.deleteYes(props.eventId)}>Yes</a>
        <a className="button" onClick={props.deleteNo}>No</a>
      </Col>
      <Col size="4"></Col>
    </Row>
  </Col>
)

export default DeleteEvent;