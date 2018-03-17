import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";
import Home from "./Pages/Home";
import NoMatch from "./Pages/404";

import "./App.css";

import About from "./Pages/About/About";
import Administration from "./Pages/About/Administration";
import MissionStatement from "./Pages/About/MissionStatement";
import PrincipalsWelcome from "./Pages/About/PrincipalsWelcome";

import Business from "./Pages/Academia/Business";
import Core from "./Pages/Academia/Core";
import Humanities from "./Pages/Academia/Humanities";
import Languages from "./Pages/Academia/Languages";
import Sciences from "./Pages/Academia/Sciences";
import Technology from "./Pages/Academia/Technology";
import TransistionYear from "./Pages/Academia/TransitionYear";

import EnrolmentForm from "./Pages/Enrolment/EnrolmentForm";
import EnrolmentPolicy from "./Pages/Enrolment/EnrolmentPolicy";

import BOIBankProgram from "./Pages/ExtraCurricular/BoiBankProg";
import CommunityInitiatives from "./Pages/ExtraCurricular/CommunityInitiatives";
import Debating from "./Pages/ExtraCurricular/Debating";
import Gaisce from "./Pages/ExtraCurricular/Gaisce";
import Sports from "./Pages/ExtraCurricular/Sports";

import BookListAndUniform from "./Pages/Parents/BookListAndUniform";
import CodeOfBehaviour from "./Pages/Parents/CodeOfBehaviour";
import DisciplinaryProcedure from "./Pages/Parents/DisciplinaryProcedure";
import ParentsAssoc from "./Pages/Parents/ParentsAssoc.js";
import PolicyProcedure from "./Pages/Parents/PolicyProcedure";

import Gallery from "./Pages/Gallery/Gallery";
import GalleryFolder from "./Pages/Gallery/GalleryFolder";
import Contact from "./Pages/Contact/Contact";

import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
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
          path="/academia/transition_year"
          component={TransistionYear}
        />

        {/*****Enrolement*******/}

        <Route exact path="/enrolement" component={EnrolmentForm} />
        {/*****Extra Curricular*******/}
        <Route
          exact
          path="/extra_curricular/bank_of_ireland_program"
          component={BOIBankProgram}
        />
        <Route exact path="/extra_curricular/sports" component={Sports} />
        <Route
          exact
          path="/extra_curricular/community_initiatives"
          component={CommunityInitiatives}
        />
        <Route exact path="/extra_curricular/gaisce" component={Gaisce} />
        <Route exact path="/extra_curricular/debating" component={Debating} />

        {/******Parents*******/}
        <Route
          exact
          path="/parents/book_list_and_uniform"
          component={BookListAndUniform}
        />
        <Route
          exact
          path="/parents/code_of_behaviour"
          component={CodeOfBehaviour}
        />
        <Route
          exact
          path="/parents/disciplinary_procedure"
          component={DisciplinaryProcedure}
        />
        <Route
          exact
          path="/parents/parents_association"
          component={ParentsAssoc}
        />
        <Route
          exact
          path="/parents/policy_procedure"
          component={PolicyProcedure}
        />
        {/****Single Pages******/}

        <Route exact path="/gallery/" component={Gallery} />
        <Route exact path="/gallery/:id" component={GalleryFolder} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
