import React from "react";
import { Row } from "../../components/Grid";

const DeleteEvent = props => (
  <Row>
    <div>Are You Sure?</div>
    <button>Yes</button>
    <button>No</button>
  </Row>
)

export default DeleteEvent;