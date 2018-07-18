import React, { Component } from "react";
import "./AllEvents.css";
import API from "../../utils/API";
import { Container} from "../../components/Grid";
import EventCard from "../../components/EventCard";
import DeleteEvent from "../../components/DeleteEvent";

class AllEvents extends Component {

  state = {
    events: [],
    deleteEventState: "none",
    eventClicked: ""
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

  deleteClicked = (eventId, btnId) => {
    console.log("Delete Clicked");
    console.log(btnId);
    console.log(eventId);
    this.setState({eventClicked: eventId});
    this.setState({deleteEventState: "show"});
  }

  render() {
    if(this.state.profile === undefined) {
      return (
        <div>
          <div>Need To Log In</div>
        </div>
      )
    } else {
      return(
        <Container>
            {
              this.state.events.map( event => (
                <div key={"test-" + event._id}>
                  < EventCard 
                    key={event._id}
                    eventId={event._id}
                    btnId={event._id}
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
                  {/* ********* TESTING ********* */}
                  {
                    this.state.eventClicked === event._id 
                    ? <div>< DeleteEvent /></div> 
                    : console.log("Nope")
                  }
                  {/* ********* TESTING ********* */}
                </div>
              ))
            }
        </Container>
      )
    }
  }
}

export default AllEvents;