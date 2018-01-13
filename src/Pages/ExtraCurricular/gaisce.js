import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Gaisce extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Extra Curricular"} />
        <Page title={"Gaisce"} current={"Gaisce"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default Gaisce;
