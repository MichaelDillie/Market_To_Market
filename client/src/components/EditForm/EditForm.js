import React from "react";
import { Row, Col } from "../../components/Grid";

const EditForm = props => (
  <Col size="12">
    <Row>
      <Col size="8">
        <div id="create-form-wrapper">
          <div className="row testing">
            <Col size="12">
              <label htmlFor="eventTitle">Event Title</label>
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">

                    <input className="input is-dark form-control" type="text" placeholder={props.title} id="eventTitle" required="" onChange={props.handelInputChange} name="eventTitle"/>

                    <span className="icon is-small is-left">
                      <i className="fas fa-users"></i>
                    </span>
                  </div>
                  <p className="help is-danger" style={{display: "none"}} id="eventNameHelp">This field is required</p>
                </div>
              </div>
            </Col>
          </div>

          <div className="row testing">
            <Col size="6">
              <label htmlFor="eventDate">Date of the Event</label>
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
              <label htmlFor="evenTime">Time of the Event</label>
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
          </div>

          <div className="row testing">
            <Col size="6">
              <label htmlFor="eventStreet">Street</label>
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">

                    <input className="input is-dark form-control" type="text" id="street" placeholder={props.oldEventStreet} required="" onChange={props.handelInputChange} name="eventStreet"/>

                    <span className="icon is-small is-left">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
                </div>
              </div>
            </Col>

            <Col size="6">
              <label htmlFor="eventPostal">Postal</label>
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">

                    <input className="input is-dark form-control" type="number" id="postal" placeholder={props.oldEventPostal} required="" onChange={props.handelInputChange} name="eventPostal"/>

                    <span className="icon is-small is-left">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
                </div>
              </div>
            </Col>
          </div>

          <div className="row testing">
            <Col size="6">
              <label htmlFor="eventCity">City</label>
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">

                    <input className="input is-dark form-control" type="text" id="city" placeholder={props.oldEventCity} required="" onChange={props.handelInputChange} name="eventCity"/>

                    <span className="icon is-small is-left">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <p className="help is-danger" style={{display: "none"}} id="eventLocationHelp">This field is required</p>
                </div>
              </div>
            </Col>

            <Col size="6">
              <label htmlFor="eventState">State</label>
              <div className="field-body">
                <div className="field">
                  <div className="control has-icons-left">
                    <div className="select">
                      <select required="" onChange={props.handelInputChange} name="eventState">
                        <option>{props.oldEventState}</option><option>AL</option><option>AK</option><option>AZ</option><option>AR</option><option>CA</option><option>CO</option><option>CT</option><option>DE</option><option>FL</option><option>GA</option><option>HI</option><option>ID</option><option>IL</option><option>IN</option><option>IA</option><option>KS</option><option>KY</option><option>LA</option><option>ME</option><option>MD</option><option>MA</option><option>MI</option><option>MN</option><option>MS</option><option>MO</option><option>MT</option><option>NE</option><option>NV</option><option>NH</option><option>NJ</option><option>NM</option><option>NY</option><option>NC</option><option>ND</option><option>OH</option><option>OK</option><option>OR</option><option>PA</option><option>RI</option><option>SC</option><option>SD</option><option>TN</option><option>TX</option><option>UT</option><option>VT</option><option>VA</option><option>WA</option><option>WV</option><option>WI</option><option>WY</option>
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
          </div>

          <div className="row testing">
            <Col size="12">
              <label htmlFor="eventDetails">Event Details</label>
              <div className="field-body">
                <div className="field">
                  <div className="control">

                    <textarea className="textarea is-dark" type="text" placeholder={props.description} id="eventDetails" required="" onChange={props.handelInputChange} name="eventDescription"></textarea>

                  </div>
                </div>
                <p className="help is-danger" style={{display: "none"}} id="eventDetailsHelp">This field is required</p>
              </div>
            </Col>
          </div>

        </div>
      </Col>
      <Col size="4"></Col>
    </Row>
    <Row>
      <Col size="8">
        <a className="button" onClick={() => props.updateEvent(props.eventId)}>Update</a>
        <a className="button" onClick={props.cancelEdit}>Cancel</a>
      </Col>
      <Col size="4"></Col>
    </Row>
  </Col>
)

export default EditForm;