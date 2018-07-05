import React from "react";
import "./EventCard.css"
import { Col, Row} from "../../components/Grid";

const EventCard = props => {

  return (
    <Row>
      <Col size="8">
        <Row>
          <Col size="6 titleLocation">
            <Row>
              <Col size="12 title">
                <div className="title">{props.title}</div>
              </Col>
            </Row>
            <Row>
              <Col size="12 location">
                <div className="location">{props.location}</div>
              </Col>
            </Row>
          </Col>
          <Col size="6">
            <Row>
              <Col size="12">
                <div className="date">{props.date}</div>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <div className="time">{props.time}</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <div className="description">{props.description}</div>
          </Col>
        </Row>
        <Row>
          {
            props.userId === props.currentUser ? 
              <Col size="12">
                <button>EDIT</button>
                <button>DELETE</button>
              </Col>
              : 
              <Row>
                <button>SPONSOR</button>
              </Row>
          }
        </Row>
      </Col>
      <Col size="4"></Col>
    </Row>
  )
};

export default EventCard;