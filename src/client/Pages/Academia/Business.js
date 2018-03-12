import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Business extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Business"} current={"Business"}>
          <ul>
            <li>Business Studies (Junior Certificate)</li>
            <li>Accounting</li>
            <li>Business</li>
            <li>Economics</li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Business;
