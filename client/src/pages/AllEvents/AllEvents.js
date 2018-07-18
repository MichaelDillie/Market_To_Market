import React, { Component } from "react";
import "./AllEvents.css";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import EventCard from "../../components/EventCard";
import DeleteEvent from "../../components/DeleteEvent";
import SponsorForm from "../../components/SponsorForm";
import EditFrom from "../../components/EditForm";

class AllEvents extends Component {

  state = {
    events: [],
    deleteEventState: "none",
    deleteEventClicked: "",
    sponsorEventState: "none",
    sponsorEventClicked: "",
    editEventState: "none",
    editEventClicked: ""
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
    this.setState({sponsorEventClicked: eventId});
    this.setState({sponsorEventState: "show"});
  }

  editClicked = (eventId) => {
    this.setState({editEventClicked: eventId});
    this.setState({editEventState: "show"});
  }

  deleteClicked = (eventId) => {
    this.setState({deleteEventClicked: eventId});
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
                  <EventCard 
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
                  {/* THIS IS THE DELETE EVENT HANDLER */}
                  {
                    this.state.deleteEventClicked === event._id 
                    ? <div>
                        <DeleteEvent 

                        />
                      </div> 
                    : console.log("Nope")
                  }
                  
                  {/* THIS IS THE SPONSOR EVENT HANDLER */}
                  {
                    this.state.sponsorEventClicked === event._id
                    ? <div>
                        <SponsorForm

                        />
                      </div>
                    : console.log("Not It")
                  }
                  
                  {/* THIS IS THE EDIT EVENT HANDLER */}
                  {
                    this.state.editEventClicked === event._id
                    ? <div>
                        <EditFrom

                        />
                      </div>
                    : console.log("Wrong One")
                  }
                </div>
              ))
            }
        </Container>
      )
    }
  }
}

export default AllEvents;