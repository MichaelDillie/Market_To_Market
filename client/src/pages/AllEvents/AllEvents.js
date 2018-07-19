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
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    eventStreet: "",
    eventPostal: "",
    eventCity: "",
    eventState: "",
    eventDescription: "",
    eventLocation: "",
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

  handelInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.setState({
      eventLocation: this.state.eventStreet + ", " + this.state.eventCity + ", " + this.state.eventState + " " + this.state.eventPostal
    });
    console.log(this.state.eventState)
  }

  // userMatch = () => {
  //   this.state.events.map( test => {
  //     if(test.userId === this.state.profile.sub) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  // }

  sponsorClick = (eventId) => {
    this.setState({sponsorEventClicked: eventId});
    this.setState({sponsorEventState: "block"});
  }
// *******************************************************
  // All Of The Edit Handlers

  editClicked = (eventId) => {
    console.log(eventId)
    this.setState({editEventClicked: eventId});
    this.setState({editEventState: "block"});
  }
  updateEvent = (eventId) => {
    console.log(eventId);
    
  }
  cancelEdit = (eventId) => {
    this.setState({editEventState: "none"})
  }
// *******************************************************
  // All Of The Delete Handlers

  deleteClicked = (eventId) => {
    this.setState({deleteEventClicked: eventId});
    this.setState({deleteEventState: "block"});
  }
  deleteYes = (eventId) => {
    console.log(eventId);
    API.deleteEvent(eventId)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  }
  deleteNo = (eventId) => {
    this.setState({deleteEventState: "none"});
  }
  // *******************************************************

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
                  {/* --------------------------------------------------- */}
                  {/* THIS IS THE DELETE EVENT HANDLER */}
                  {
                    this.state.deleteEventState === "block" ?
                      this.state.deleteEventClicked === event._id ? 
                        <div className="row delete-wrapper">
                          <DeleteEvent 
                            eventId={event._id}
                            deleteYes={this.deleteYes}
                            deleteNo={this.deleteNo}
                          />
                        </div> 
                      : 
                        console.log("")
                    :
                      <div style={{display: "none"}}> 
                        <DeleteEvent />
                      </div>
                  }
                  {/* --------------------------------------------------- */}
                  {/* THIS IS THE SPONSOR EVENT HANDLER */}
                  {
                    this.state.sponsorEventClicked === event._id
                    ? <div>
                        <SponsorForm

                        />
                      </div>
                    : console.log("")
                  } 
                  {/* --------------------------------------------------- */}
                  {/* THIS IS THE EDIT EVENT HANDLER */}
                  {
                    this.state.editEventState === "block" ?
                      this.state.editEventClicked === event._id
                      ? <div className="row edit-wrapper">
                          <EditFrom
                            eventId={event._id}
                            title={event.eventName}
                            location={event.location}
                            date={event.date}
                            time={event.time}
                            description={event.description}
                            cancelEdit={this.cancelEdit}
                            updateEvent={this.updateEvent}
                            handelInputChange={this.handelInputChange}
                          />
                        </div>
                      : console.log("")
                    :
                      <div style={{display: "none"}}>
                        <EditFrom />
                      </div>
                  }
                  {/* --------------------------------------------------- */}
                </div>
              ))
            }
        </Container>
      )
    }
  }
}

export default AllEvents;