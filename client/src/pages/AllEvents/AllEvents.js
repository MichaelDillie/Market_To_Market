import React, { Component } from "react";
import "./AllEvents.css";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import EventCard from "../../components/EventCard";

class AllEvents extends Component {

  state = {
    events: []
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then( res => 
        this.setState({events: res.data})
      )
  }

  userMatch = () => {
    // console.log("triggered");
    this.state.events.map( test => {
      // console.log(test.userId);
      if(test.userId === this.state.profile.sub) {
        // console.log("true");
        return true
      } else {
        // console.log("false");
        return false
      }
    })
  }

  render() {
    return(
      <Container>
        <div>
          < EventCard 
            userMatch={this.userMatch}
          />
        </div>
        {
          this.state.events.map( singleEvent => {
            if(singleEvent.userId === this.state.profile.sub) {
              return (
                <Row key={singleEvent._id}>
                  <Col size="12">
                    <Row>
                      <Col size="6">
                        <p>{singleEvent.eventName}</p>
                        <p>{singleEvent.location}</p>
                      </Col>
                      <Col size="6">
                        <p>{singleEvent.date}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col size="3"></Col>
                      <Col size="6">
                        <p>{singleEvent.description}</p>
                      </Col>
                      <Col size="3"></Col>
                    </Row>
                    {/* <p>{singleEvent.eventName}</p>
                    <p>{singleEvent.date}</p>
                    <p>{singleEvent.location}</p>
                    <p>{singleEvent.description}</p> */}
                    {/* EDIT AND DELETE MIGHT BE REMOVED AND PLACED IN THE USERS PROFILE */}
                    <button>EDIT</button>
                    <button>DELETE</button>
                  </Col>
                </Row>
              )
            } else {
              return (
                <Row key={singleEvent._id}>
                  <Col size="12">
                    <Row>
                      <Col size="6">
                        <p>{singleEvent.eventName}</p>
                        <p>{singleEvent.location}</p>
                      </Col>
                      <Col size="6">
                        <p>{singleEvent.date}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col size="3"></Col>
                      <Col size="6">
                        <p>{singleEvent.description}</p>
                      </Col>
                      <Col size="3"></Col>
                    </Row>
                    <button>SPONSOR</button>
                  </Col>
                </Row>
              )
            }
          })
        }
      </Container>
    )
  }
}

export default AllEvents;