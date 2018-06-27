import React, { Component } from "react";
import "./CreateForm.css";
import { Col, Row, Container } from "../../components/Grid";


const CreateForm = () => (
  <div>
    <Row>
      <label for="eventTitle">Event Title</label>
      <div class="field-body">
        <div class="field">
          <div class="control has-icons-left">
            <input class="input is-dark form-control" type="text" placeholder="Event Name" id="eventTitle" required="" />
            <span class="icon is-small is-left">
              <i class="fas fa-users"></i>
            </span>
          </div>
        <p class="help is-danger" style={{display: "none"}} id="eventNameHelp">This field is required</p>
        </div>
      </div>
    </Row>

    <Row>
      <label for="eventDate">Date of the Event</label>
        <div class="field-body">
          <div class="field">
          <div class="control has-icons-left">
            <input class="input is-dark form-control" type="date" id="eventDate" required="" />
            <span class="icon is-small is-left">
              <i class="fas fa-calendar-alt"></i>
            </span>
          </div>
          <p class="help is-danger" style={{display: "none"}} id="eventDateHelp">This field is required</p>
        </div>
      </div>
    </Row>

    <Row>
      <label for="eventLocation">Location</label>
      <div class="field-body">
        <div class="field">
          <div class="control has-icons-left">
          <input class="input is-dark form-control" type="text" id="eventLocation" required="" />
          <span class="icon is-small is-left">
            <i class="fas fa-map-marker-alt"></i>
          </span>
          </div>
        <p class="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
        </div>
      </div>
    </Row>

    <Row>
      <label for="eventLocation">Event Details</label>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea class="textarea is-dark" type="text" placeholder="Event Details" id="eventDetails" required=""></textarea>
          </div>
        </div>
        <p class="help is-danger" style={{display: "none"}} id="eventDetailsHelp">This field is required</p>
      </div>
    </Row>

    <Row>
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </Row>

  </div>
)

export default CreateForm;