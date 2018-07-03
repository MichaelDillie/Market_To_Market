import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Auth from './auth/Auth';
import history from "./history";

// PAGES
import Home from "./pages/Home";
import AllEvents from "./pages/AllEvents";
import CreateEvent from "./pages/CreateEvent";
import Callback from "./pages/Callback";
// import LogIn from "./pages/LogIn";
// import SignUp from "./pages/SignUp";
// import Mission from "./pages/Mission";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history}>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/create-event" component={CreateEvent} />
        <Route exact path="/all-events" component={AllEvents} /> */}
     
        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route exact path="/create-event" render={(props) => <CreateEvent auth={auth} {...props} />} />
        <Route exact path="/all-events" render={(props) => <AllEvents auth={auth} {...props} />} />

        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
      </Switch>
    </div>
  </Router>
);
export default App;