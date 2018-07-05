import React, { Component } from "react";
import "./AllEvents.css";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
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
    this.state.events.map( test => {
      if(test.userId === this.state.profile.sub) {
        return true
      } else {
        return false
      }
    })
  }

  render() {
    return(
      <Container>
          {
            this.state.events.map( event => (
              < EventCard 
                key={event._id}
                title={event.eventName}
                location={event.location}
                date={event.date}
                time={event.time}
                description={event.description}
                userId={event.userId}
                currentUser={this.state.profile.sub}
              />
            ))
          }
        {/* {
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
        } */}
      </Container>
    )
  }
}

export default AllEvents;