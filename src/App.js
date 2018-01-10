import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";
import Home from "./pages/Home";
import "./App.css";

import About from "./pages/About/About";
import Administration from "./pages/About/Administration";
import MissionStatement from "./pages/About/MissionStatement";
import PrincipalsWelcome from "./pages/About/PrincipalsWelcome";

import Business from "./pages/Academia/Business";
import Core from "./pages/Academia/Core";
import Humanities from "./pages/Academia/Humanities";
import Languages from "./pages/Academia/Languages";
import Sciences from "./pages/Academia/Sciences";
import Technology from "./pages/Academia/Technology";
import TransistionYear from "./pages/Academia/TransitionYear";

import Contact from "./pages/Contact/Contact";

import EnrolmentForm from "./pages/Enrolment/EnrolmentForm";
import EnrolmentPolicy from "./pages/Enrolment/EnrolmentPolicy";

import BOIBankProgram from "./pages/ExtraCurricular/BoiBankProg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/******About section**************/}
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/about/administration_staff"
            component={Administration}
          />
          <Route
            exact
            path="/about/mission_statement"
            component={MissionStatement}
          />
          <Route
            exact
            path="/about/principals_welcome"
            component={PrincipalsWelcome}
          />
          {/******Academia section************/}
          <Route exact path="/academia/business" component={Business} />
          <Route exact path="/academia/core" component={Core} />
          <Route exact path="/academia/humanities" component={Humanities} />
          <Route exact path="/academia/languages" component={Languages} />
          <Route exact path="/academia/sciences" component={Sciences} />
          <Route exact path="/academia/technology" component={Technology} />
          <Route
            exact
            path="/academia/transistion_year"
            component={TransistionYear}
          />
          {/*******Contact***********/}
          <Route exact path="/contact" component={Contact} />
          {/*****Enrolement*******/}
          <Route
            exact
            path="/enrolement/enrolement_form/"
            component={EnrolmentForm}
          />
          <Route
            exact
            path="/enrolement/enrolement_form/"
            component={EnrolmentPolicy}
          />

          <Route
            exact
            path="/extra_curricular/bank_of_ireland_program"
            component={BOIBankProgram}
          />
        </div>
      </Router>
    );
  }
}

export default App;
