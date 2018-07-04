import React from "react";
// import { Col, Row} from "../../components/Grid";

const EventCard = props => {



  return (
    <div>
      <h1>TESTING</h1>
      <button onClick={props.userMatch}>TESTING BUTTON</button>
      {
        props.userMatch() === false ? console.log("False") : console.log("Ture")
      }
    </div>
  )
};

export default EventCard;