import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Humanities extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Humanities"} current={"Humanities"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default Humanities;
