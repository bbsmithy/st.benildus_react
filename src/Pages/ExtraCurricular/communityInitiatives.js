import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class CommunityInitiatives extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Extra Curricular"} />
        <Page title={"Community Initiatives"} current={"Community Initiatives"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default CommunityInitiatives;
