import React from "react";
import { Row, Col } from "../../components/Grid";


const CreateForm = props => (
  <div>
    <Row>
      <Col size="12">
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
      </Col>
    </Row>

    <Row>
      <Col size="6">
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
      </Col>

      <Col size="6">
        <label for="evenTime">Time of the Event</label>
          <div className="field-body">
            <div className="field">
            <div className="control has-icons-left">

              <input className="input is-dark form-control" type="time" id="eventTime" required="" onChange={props.handelInputChange} name="eventTime"/>

              <span className="icon is-small is-left">
                <i className="far fa-clock"></i>
              </span>
            </div>
            <p className="help is-danger" style={{display: "none"}} id="eventDateHelp">This field is required</p>
          </div>
        </div>
      </Col>
    </Row>

    {/* EDITTING THIS */}
    <Row>
      <Col size="6">
        <label for="street">Street</label>
        <div className="field-body">
          <div className="field">
            <div className="control has-icons-left">

            <input className="input is-dark form-control" type="text" id="street" placeholder="1234 Hello Ln" required="" onChange={props.handelInputChange} name="street"/>

            <span className="icon is-small is-left">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            </div>
          <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
          </div>
        </div>
      </Col>

      <Col size="6">
        <label for="postal">Postal</label>
        <div className="field-body">
          <div className="field">
            <div className="control has-icons-left">

            <input className="input is-dark form-control" type="number" id="postal" placeholder="78704" required="" onChange={props.handelInputChange} name="postal"/>

            <span className="icon is-small is-left">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            </div>
          <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
          </div>
        </div>
      </Col>
    </Row>

    <Row>
    <Col size="6">
        <label for="city">City</label>
        <div className="field-body">
          <div className="field">
            <div className="control has-icons-left">

            <input className="input is-dark form-control" type="number" id="city" placeholder="Austin" required="" onChange={props.handelInputChange} name="city"/>

            <span className="icon is-small is-left">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            </div>
          <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
          </div>
        </div>
      </Col>

      <Col size="6">
        <label for="postal">Postal</label>
        <div className="field-body">
          <div className="field">
            <div className="control has-icons-left">

            <div className="select">
              <select>
                <option>TX</option>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>

              </select>
            </div>

            <span className="icon is-small is-left">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            </div>
          <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
          </div>
        </div>
      </Col>
    </Row>

    {/* EDITTING THIS */}

    <Row>
      <Col size="12">
        <label for="eventDetails">Event Details</label>
        <div className="field-body">
          <div className="field">
            <div className="control">

              <textarea className="textarea is-dark" type="text" placeholder="Event Details" id="eventDetails" required="" onChange={props.handelInputChange} name="eventDescription"></textarea>

            </div>
          </div>
          <p className="help is-danger" style={{display: "none"}} id="eventDetailsHelp">This field is required</p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col size="1" className="control">
        <button className="button is-link" onClick={props.handelThatClick}>Submit</button>
      </Col>
    </Row>

  </div>
)

export default CreateForm;