import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class EnrolmentForm extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Enrolement"} />
        <Page title={"Enrolement"} current={"Enrolment Form"}>
          <h3>St.Benildus Enrolement Policy</h3>
          <p>
            This Policy supersedes all pre-existing policies and has been
            ratified by the Board of Management of St. Benildus College on
            Wednesday 25th January 2017. This Policy applies to students
            enrolling for September 2020 and subsequent years.
          </p>
          <p>
            <a
              href="http://www.stbenilduscollege.com/wp-content/uploads/2017/05/St-.Benildus-College-Enrolment-Policy-January-2017.pdf"
              target="_blank"
            >
              Download a PDF of the ENROLMENT POLICY
            </a>
          </p>
          <p>
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2017/11/COLLEGE-APPLICATION-FORMwebsite-1.pdf">
              Download a PDF of the ENROLMENT APPLICATION FORM
            </a>
          </p>
          <p>
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2017/11/Transfer.pdf">
              Download a PDF of the SCHOOL TRANSFER APPLICATION
            </a>
          </p>
          <p>The closing dates for receipt of applications are as follows:</p>
          <ul>
            <li>
              For enrolment in September 2020: Closing date March 10th 2017.
            </li>
            <li>
              For enrolment in September 2021: Closing date March 16th 2018.
            </li>
            <li>
              For enrolment in September 2022: Closing date March 15th 2019.
            </li>
          </ul>
          <p>
            The Board of Management has decided to offer places for these years
            within thirty days of the closing dates.
          </p>
        </Page>
      </div>
    );
  }
}
export default EnrolmentForm;
