import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class CodeOfBehaviour extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Code Of Behaviour"} current={"Code Of Behaviour"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default CodeOfBehaviour;
