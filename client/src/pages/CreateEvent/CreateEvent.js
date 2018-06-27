import React, { Component } from "react";
import "./CreateEvent.css";
import { Col, Row, Container } from "../../components/Grid";
import CreateForm from "../../components/CreateForm";

class CreateEvent extends Component {


  render() {
    return(
      <Container>
        <CreateForm />
      </Container>
    )
  }
}

export default CreateEvent;