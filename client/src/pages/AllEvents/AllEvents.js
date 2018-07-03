import React, { Component } from "react";
import "./AllEvents.css";
import API from "../../utils/API";

class AllEvents extends Component {

  state = {
    events: []
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


  render() {
    return(
      <div>
        <h1>Hello World</h1>
        {
          this.state.events.map( singleEvent => (
            <div key="singleEvent._id">
              <p>{singleEvent.eventName}</p>
              <p>{singleEvent.date}</p>
              <p>{singleEvent.location}</p>
              <p>{singleEvent.description}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default AllEvents;