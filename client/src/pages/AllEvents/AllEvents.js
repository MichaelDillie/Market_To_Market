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
    // OLD
    oldEventTitle: "",
    oldEventDate: "",
    oldEventTime: "",
    oldEventStreet: "",
    oldEventPostal: "",
    oldEventCity: "",
    oldEventState: "",
    oldEventDescription: "",
    oldEventLocation: "",
    // NEW
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    eventStreet: "",
    eventPostal: "",
    eventCity: "",
    eventState: "",
    eventDescription: "",
    eventLocation: "",
    // OTHER
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
    API.getEvent(eventId)
      .then(res => this.setState({oldEventTitle: res.data.eventName}))
    API.getEvent(eventId)
      .then(res => this.setState({oldEventDate: res.data.date}))
    API.getEvent(eventId)
      .then(res => this.setState({oldEventTime: res.data.time}))
    API.getEvent(eventId)
      .then(res => this.setState({oldEventStreet: res.data.location.split(",")[0]}))
    API.getEvent(eventId)
      .then(res => this.setState({oldEventCity: res.data.location.split(",")[1].trim()}))
    API.getEvent(eventId)
      .then(res => this.setState({oldEventState: res.data.location.split(",")[2].trim().split(" ")[0].trim()}))
    API.getEvent(eventId)
      .then(res => this.setState({oldEventPostal: res.data.location.split(",")[2].trim().split(" ")[1].trim()}))
    this.setState({editEventClicked: eventId});
    this.setState({editEventState: "block"});
  }
  updateEvent = (eventId) => {
    // eventTitle
    if(this.state.oldEventTitle === this.state.eventTitle || this.state.eventTitle === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
      API.saveEvent({
        eventName: this.state.eventTitle
      }).then(res => this.loadEvents());
    }
    
    // eventDate
    if(this.state.oldEventDate === this.state.eventDate || this.state.eventDate === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
    }
    // eventTime
    if(this.state.oldEventTime === this.state.eventTime || this.state.eventTime === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
    }
    // eventStreet
    if(this.state.oldEventStreet === this.state.eventStreet || this.state.eventStreet === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
    }
    // eventPostal
    if(this.state.oldEventPostal === this.state.eventPostal || this.state.eventPostal === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
    }
    // eventCity
    if(this.state.oldEventCity === this.state.eventCity || this.state.eventCity === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
    }
    // eventState
    if(this.state.oldEventState === this.state.eventState || this.state.eventState === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
    }
    // eventDescription
    if(this.state.oldEventDescription === this.state.eventDescription || this.state.eventDescription === "") {
      console.log("Empty or same, Use the old state");
    } else {
      console.log("Changed save the NEW");
    }

    // Hides the update input form
    this.setState({editEventState: "none"})
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
                            oldEventStreet={this.state.oldEventStreet}
                            oldEventCity={this.state.oldEventCity}
                            oldEventPostal={this.state.oldEventPostal}
                            oldEventState={this.state.oldEventState}
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