import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Technology extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Technology"} current={"Technology"}>
          <ul>
            <li>Technical Graphics (Junior Certificate)</li>
            <li>Materials Technology (Woodwork) (Junior Certificate)</li>
            <li>Design & Communications Graphics</li>
            <li>Construction Studies</li>
            <li>Computer Studies</li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Technology;
