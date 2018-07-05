import React, { Component } from "react";
import "./CreateEvent.css";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import CreateForm from "../../components/CreateForm";
// import Auth from '../../auth/Auth';


class CreateEvent extends Component {

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
    userId: ""
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

  handelThatClick = event => {
    event.preventDefault();
    console.log("Clicked");
    if(this.state.eventTitle && this.state.eventDate && this.state.eventLocation) {
      // Send this to the DB
      API.saveEvent({
        eventName: this.state.eventTitle,
        date: this.state.eventDate,
        time: this.state.eventTime,
        location: this.state.eventLocation,
        description: this.state.eventDescription,
        userId: this.state.profile.sub
      })
        .then(res => {console.log("posting got to then")})
        .catch(err => console.log(err));
    }
  }

  render() {
    return(
      <Container>
        <CreateForm 
          handelInputChange={this.handelInputChange}
          handelThatClick={this.handelThatClick}
        />
      </Container>
    )
  }
}

export default CreateEvent;