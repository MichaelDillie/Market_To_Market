import React from "react";
import { Col, Row} from "../../components/Grid";

const EventCard = props => {

  return (
    <Row>
      <Col size="12">
        <Row>
          <Col size="6">
            <Row>{props.title}</Row>
            <Row>{props.location}</Row>
          </Col>
          <Col size="6">
            <Row>{props.date}</Row>
            <Row>TIME</Row>
          </Col>
        </Row>
        <Row>
          <Col size="12">{props.description}</Col>
        </Row>
        <Row>
          {
            props.userId === props.currentUser ? 
              <Row>
                <button>EDIT</button>
                <button>DELETE</button>
              </Row>
              : 
              <Row>
                <button>SPONSOR</button>
              </Row>
          }
        </Row>
      </Col>
    </Row>
  )
};

export default EventCard;