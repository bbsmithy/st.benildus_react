import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class StudyTips extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Student Services"} />
        <Page title={"Study Tips"} current={"Study Tips"}>
          <h4>Supervised Study</h4>
          <p>
            Supervised evening study is available to Junior and Leaving
            Certificate students every day for 2 hours after school. All
            students may avail of supervised study in the College library at
            lunchtime every day. The College also provides Saturday morning
            study for 6th Years from 10am to 1pm. There is no charge for this.
          </p>

          <h4>Study Tips</h4>

          <p>
            A ‘Guide to Studying’ produced by St. Benildus College Guidance
            Service may be downloaded below
          </p>
          <a href="http://www.stbenilduscollege.com/wp-content/uploads/2015/03/STUDY-GUIDELINES-for-Students.docx">
            Guide to Studying
          </a>
        </Page>
      </div>
    );
  }
}
export default StudyTips;
