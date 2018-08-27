import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Participants from "./components/Participants/Participant";
import Presenters from "./components/Presenters/Presenters";
import Registration from "./components/Registration/Registration";
import Courses from "./components/Courses/Courses";
import Product from "./components/Product/Product";
import Products from "./components/Product/Products";
import Schedule from "./components/Courses/Schedule";
import Registrationform from "./components/Registration/RegistrationForm";
import Login from './components/Login/Login';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/participant" component={Participants} />
    <Route path="/presenters" component={Presenters} />
    <Route path="/courses" component={Courses} />
    <Route path="/registration" component={Registration} />
    <Route path="/products" component={Products} />
    <Route path="/product/:id" component={Product} />
    <Route path="/schedule" component={Schedule} />
    <Route exact path="/login" component={Login} />
    <Route path="/registrationform" component={Registrationform} />
  </Switch>
);
