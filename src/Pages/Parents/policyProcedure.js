import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class PolicyProcedure extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Policy Procedure"} current={"Policy Procedure"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default PolicyProcedure;
