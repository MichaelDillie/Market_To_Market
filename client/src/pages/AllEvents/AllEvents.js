import React, { Component } from "react";
import "./AllEvents.css";
import API from "../../utils/API";
import { Container} from "../../components/Grid";
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

  sponsorClick = (eventId) => {
    console.log("Sponsor Clicked");
    console.log(eventId);
  }

  editClicked = (eventId) => {
    console.log("Edit Clicked");
    console.log(eventId);
  }

  deleteClicked = (eventId) => {
    console.log("Delete Clicked");
    console.log(eventId);
  }

  render() {
    return(
      <Container>
          {
            this.state.events.map( event => (
              < EventCard 
                key={event._id}
                eventId={event._id}
                title={event.eventName}
                location={event.location}
                date={event.date}
                time={event.time}
                description={event.description}
                userId={event.userId}
                currentUser={this.state.profile.sub}
                sponsorClick={this.sponsorClick}
                editClicked={this.editClicked}
                deleteClicked={this.deleteClicked}
              />
            ))
          }
      </Container>
    )
  }
}

export default AllEvents;