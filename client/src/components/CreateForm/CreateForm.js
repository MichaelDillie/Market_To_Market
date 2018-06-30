import React from "react";
import { Row } from "../../components/Grid";


const CreateForm = props => (
  <div>
    <Row>
      <label for="eventTitle">Event Title</label>
      <div className="field-body">
        <div className="field">
          <div className="control has-icons-left">

            <input className="input is-dark form-control" type="text" placeholder="Event Name" id="eventTitle" required="" onChange={props.handelInputChange} name="eventTitle"/>

            <span className="icon is-small is-left">
              <i className="fas fa-users"></i>
            </span>
          </div>
        <p className="help is-danger" style={{display: "none"}} id="eventNameHelp">This field is required</p>
        </div>
      </div>
    </Row>

    <Row>
      <label for="eventDate">Date of the Event</label>
        <div className="field-body">
          <div className="field">
          <div className="control has-icons-left">

            <input className="input is-dark form-control" type="date" id="eventDate" required="" onChange={props.handelInputChange} name="eventDate"/>

            <span className="icon is-small is-left">
              <i className="fas fa-calendar-alt"></i>
            </span>
          </div>
          <p className="help is-danger" style={{display: "none"}} id="eventDateHelp">This field is required</p>
        </div>
      </div>
    </Row>

    <Row>
      <label for="eventLocation">Location</label>
      <div className="field-body">
        <div className="field">
          <div className="control has-icons-left">

          <input className="input is-dark form-control" type="text" id="eventLocation" required="" onChange={props.handelInputChange} name="eventLocation"/>

          <span className="icon is-small is-left">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          </div>
        <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
        </div>
      </div>
    </Row>

    <Row>
      <label for="eventLocation">Event Details</label>
      <div className="field-body">
        <div className="field">
          <div className="control">

            <textarea className="textarea is-dark" type="text" placeholder="Event Details" id="eventDetails" required="" onChange={props.handelInputChange} name="eventDescription"></textarea>

          </div>
        </div>
        <p className="help is-danger" style={{display: "none"}} id="eventDetailsHelp">This field is required</p>
      </div>
    </Row>

    <Row>
      <div className="control">
        <button className="button is-link" onClick={props.handelThatClick}>Submit</button>
      </div>
    </Row>

  </div>
)

export default CreateForm;