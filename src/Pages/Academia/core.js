import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Core extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Core Subjects"} current={"Core"}>
          <ul>
            <li>English</li>
            <li>Irish</li>
            <li>Maths</li>
            <li>Religious Education</li>
            <li>Physical Education</li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Core;
