import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class ParentsAssoc extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Parents Association"} current={"Parents Association"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default ParentsAssoc;
