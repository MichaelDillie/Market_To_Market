import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

// PAGES
import Home from "./pages/Home";
import AllEvents from "./pages/AllEvents";
import CreateEvent from "./pages/CreateEvent";
// import LogIn from "./pages/LogIn";
// import SignUp from "./pages/SignUp";
// import Mission from "./pages/Mission";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-event" component={CreateEvent} />
        <Route exact path="/all-events" component={AllEvents} />
      </Switch>
    </div>
  </Router>
);
export default App;