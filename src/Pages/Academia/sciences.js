import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Sciences extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Sciences"} current={"Sciences"}>
          <ul>
            <li>Science (Junior Certificate)</li>
            <li>Biology</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Applied Maths</li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Sciences;
