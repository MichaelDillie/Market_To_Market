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
        {console.log(res.data)}
      )
  }


  render() {
    return(
      <div>
        <div>Hello World</div>
      </div>
    )
  }
}

export default AllEvents;