import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class GuidanceServices extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Student Services"} />
        <Page title={"Guidance Services"} current={"Guidance Services"}>
          <p>
            The Guidance Service in St Benildus College offers emotional,
            educational and vocational support to our students. Senior students
            are given extensive assistance in their process of decision-making.
            6th year students attend the Irish Times Higher Options Conference
            in September, and in November, attend our annual Careers Evening, a
            collaborative event between local schools. Information evenings are
            held for parents and students to guide them through the CAO system.
          </p>
          <p>
            A Summary of Senior Guidance Activities may be downloaded below
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2015/03/Senior-Guidance-Schedule.docx">
              Summary of Senior Guidance Activities
            </a>
          </p>
        </Page>
      </div>
    );
  }
}
export default GuidanceServices;
