import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class BoiBankProg extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Extra Curricular"} />
        <Page
          title={"Bank Of Ireland Program"}
          current={"Bank Of Ireland Program"}
        >
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default BoiBankProg;
