import React, { Component } from "react";
import "./CreateEvent.css";
import { Container } from "../../components/Grid";
import CreateForm from "../../components/CreateForm";

class CreateEvent extends Component {

  state = {
    eventTitle: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: ""
  }

  handelInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handelThatClick = event => {
    event.preventDefault();
    console.log("Clicked");
    console.log(this.state.eventTitle);
    if(this.state.eventTitle && this.state.eventDate && this.state.eventLocation) {
      // Send this to the DB
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