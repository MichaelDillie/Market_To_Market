import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Col, Row, Container } from "../../components/Grid";
// import Nav from "../../components/Nav";
import Header from "../../components/Header";

class Home extends Component {


  render() {
    return(
      <div>
      <Row>
        <Header />
      </Row>
      <Container>
        <div>
          {/* This is the MAIN */}
          <Row>
            <div className="home-main">
              <Row>
                <Col className="dead-space" size="2"></Col>
                <Col size="8">
                  <h4 className="main-title">Choose your experience</h4>
                </Col>
                <Col className="dead-space" size="2"></Col>
              </Row>
              <Row>
                <Col className="dead-space" size="2"></Col>
                <Col size="8">
                  <p className="main-text">Accounts at Market to Market are split into two categories to simplify your experience when browsing and creating
          events. This time you may be hosting an event, but next time you may be looking to self promote. Whatever it is,
          we have you covered.</p>
                </Col>
                <Col className="dead-space" size="2"></Col>
              </Row>
            </div>
          </Row>

          {/* Div Button 1 (Create Event) */}
          <Row>
            <Col className="dead-space" size="1"></Col>
            <Col size="5">
              <Link to="/create-event">
                <div className="main-div-button one">
                  <h5 className="main-div-title">Create An Event</h5>
                  <p className="main-div-text">Get your event noticed, benefit from advertisers who desperately want to meet your attendees</p>
                  <button type="button" className="btn btn-outline-dark inside-div-button">READ ON</button>
                </div>
              </Link>
            </Col>

            {/* Div Button 2 (View All Events) */}
            <Col size="5">
              <Link to="/all-events">
                <div className="main-div-button two">
                  <h5 className="main-div-title">View Events</h5>
                  <p className="main-div-text">Connect with local events through a built a modern offers system. Simple. Quick. Easy. Real results.</p>
                  <button type="button" className="btn btn-outline-dark inside-div-button">READ ON</button>
                </div>
              </Link>
            </Col>
            <Col className="dead-space" size="1"></Col>
          </Row>

        </div>
      </Container>
      </div>
    );
  }
}

export default Home;