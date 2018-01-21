import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Humanities extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Humanities"} current={"Humanities"}>
          <ul>
            <li>Art</li>
            <li>Classical Studies</li>
            <li>Geography</li>
            <li>History</li>
            <li>Music</li>
            <li>
              Civic Social and Political Education (CSPE) (Junior Certificate)
            </li>
            <li>
              Social Personal and Health Education (SPHE) (Junior Certificate)
            </li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Humanities;
