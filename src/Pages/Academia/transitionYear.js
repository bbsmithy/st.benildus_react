import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class TransitionYear extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Transition Year"} current={"TransitionYear"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default TransitionYear;
