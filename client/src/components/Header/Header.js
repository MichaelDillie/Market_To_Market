import React from "react";
import "./Header.css";
import { Col, Row } from "../Grid";

const Header = () => (
    <header className="home-header">
      <Row>
        <Col className="dead-space" size="2"></Col>
        <Col size="8">
          <p className="header-text">Market to Market is a community-driven platform for listing and advertising events to advertisers
        themselves. Whether it's a book club, a small parent-teacher association gathering or a sold-out concert hall, Market
        to Market will be a catalyst for agencies to find and connect with you on your own terms.</p>
        </Col>
        <Col className="dead-space" size="2"></Col>
      </Row>
      <Row>
        <Col className="dead-space" size="2"></Col>
        <Col size="8">
          <div className="header-button-mission">
          <a href="/misson-statement">
            <button type="button" className="btn btn-outline-dark">Read our mission statement</button>
          </a>
          </div>
        </Col>
        <Col className="dead-space" size="2"></Col>
      </Row>
    </header>
);

export default Header;