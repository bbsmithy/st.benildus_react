import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";
import Home from "./Pages/Home";
import NoMatch from "./Pages/404";
import { GalleryManager } from "../cms/GalleryManager";
import ArchiveManager from "../cms/ArchiveManager";

import "./App.css";

import About from "./Pages/About/About";
import Facilities from "./Pages/About/Facilities";
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

import GuidanceServices from "./Pages/StudentServices/GuidanceServices";
import StudentCouncil from "./Pages/StudentServices/StudentCouncil";
import StudyTips from "./Pages/StudentServices/StudyTips";
import Admin from "./Pages/Admin/Admin";

import RunForLife from "./Pages/RunForLife/RunForLife";

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
          path="/about/administration-staff"
          component={Administration}
        />
        <Route exact path="/about/facilities" component={Facilities} />
        <Route
          exact
          path="/about/mission-statement"
          component={MissionStatement}
        />
        <Route
          exact
          path="/about/principals-welcome"
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
          path="/academia/transition-year"
          component={TransistionYear}
        />

        {/*****Enrolement*******/}

        <Route exact path="/enrolement" component={EnrolmentForm} />
        {/*****Extra Curricular*******/}
        <Route
          exact
          path="/extra-curricular/bank-of-ireland-program"
          component={BOIBankProgram}
        />
        <Route exact path="/extra-curricular/sports" component={Sports} />
        <Route
          exact
          path="/extra-curricular/community-initiatives"
          component={CommunityInitiatives}
        />
        <Route exact path="/extra-curricular/gaisce" component={Gaisce} />
        <Route exact path="/extra-curricular/debating" component={Debating} />

        {/******Parents*******/}
        <Route
          exact
          path="/parents/book-list-and-uniform"
          component={BookListAndUniform}
        />
        <Route
          exact
          path="/parents/code-of-behaviour"
          component={CodeOfBehaviour}
        />
        <Route
          exact
          path="/parents/disciplinary-procedure"
          component={DisciplinaryProcedure}
        />
        <Route
          exact
          path="/parents/parents-association"
          component={ParentsAssoc}
        />
        <Route
          exact
          path="/parents/policy-procedure"
          component={PolicyProcedure}
        />

        <Route
          exact
          path="/student-services/guidance-services"
          component={GuidanceServices}
        />
        <Route
          exact
          path="/student-services/student-council"
          component={StudentCouncil}
        />
        <Route
          exact
          path="/student-services/study-tips-services"
          component={StudyTips}
        />

        {/**** CMS ****/}
        <Route exact path="/gallery-manager" component={GalleryManager} />
        <Route exact path="/archive-manager" component={ArchiveManager} />

        {/****Single Pages******/}
        <Route exact path="/run-for-life/" component={RunForLife} />
        <Route exact path="/gallery/" component={Gallery} />
        <Route exact path="/admin/" component={Admin} />
        <Route exact path="/gallery/:id" component={GalleryFolder} />
        <Route exact path="/contact" component={Contact} />

        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
