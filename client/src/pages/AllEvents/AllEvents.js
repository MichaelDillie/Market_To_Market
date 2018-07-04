import React, { Component } from "react";
import "./AllEvents.css";
import API from "../../utils/API";

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

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        {
          this.state.events.map( singleEvent => {
            if(singleEvent.userId === this.state.profile.sub) {
              return (
                <div key="singleEvent._id">
                  <p>{singleEvent.eventName}</p>
                  <p>{singleEvent.date}</p>
                  <p>{singleEvent.location}</p>
                  <p>{singleEvent.description}</p>
                  <button>EDIT</button>
                  <button>DELETE</button>
                </div>
              )
            } else {
              return (
                <div key="singleEvent._id">
                  <p>{singleEvent.eventName}</p>
                  <p>{singleEvent.date}</p>
                  <p>{singleEvent.location}</p>
                  <p>{singleEvent.description}</p>
                  <button>SPONSOR</button>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default AllEvents;