import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import Presenters from "./components/Presenters/Presenters";
import Registration from "./components/Registration/Registration";
import Courses from "./components/Courses/Courses";
import Schedule from "./components/Courses/Schedule";
import Registrationform from "./components/Registration/RegistrationForm";
import Login from "./components/Login/Login";
import Faqs from "./components/Faq/Faqs";
import Labs from './components/Labs/Labs';
import Profile from './components/Participants/Attendee';
import Expohall from './components/Expohall/Expohall';
import Overview from './components/Overview/Overview';
import Events from './components/Events/Events';
import About from './components/About/About';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    
    <Route path="/presenters" component={Presenters} />
    <Route path="/courses" component={Courses} />
    <Route path="/registration" component={Registration} />
    <Route path="/schedule" component={Schedule} />
    <Route path="/faqs" component={Faqs} />
    <Route exact path="/login" component={Login} />
    <Route path="/registrationform" component={Registrationform} />
    <Route path='/labs' component={Labs}
     />
     <Route path='/profile' component={Profile} />
     <Route path='/expohall' component={Expohall}/>
     <Route path='/overview' component={Overview}/>
     <Route path='/events' component={Events}/>
     <Route path='/about' component={About}/>
  </Switch>
);
