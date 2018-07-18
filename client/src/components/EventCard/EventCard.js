import React from "react";
import "./EventCard.css"
import { Col, Row } from "../../components/Grid";

const EventCard = props => {

  return (
    <div className="row event-card-wrapper">
      <Col size="8 eventWrapper">
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

        <div className="row description-row">
          <Col size="12 description">
            <div className="description">{props.description}</div>
          </Col>
        </div>
        <Row>

          {
            props.userId === props.currentUser ? 
              <Col size="12">
                <a className="button" id={"edit-" + props.btnId} onClick={() => props.editClicked(props.eventId)}>EDIT</a>
                
                <a className="button" id={"delete-" + props.btnId} onClick={() => props.deleteClicked(props.eventId)}>DELETE</a>
              </Col>
              : 
              <Col size="12">
                <a className="button" id={"sponsor-" + props.btnId} onClick={() => props.sponsorClick(props.eventId)}>SPONSOR</a>
              </Col>
          }
        </Row>
      </Col>
      <Col size="4">
      </Col>
    </div>
  )
};

export default EventCard;