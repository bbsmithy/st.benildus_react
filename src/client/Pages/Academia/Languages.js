import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Languages extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Languages"} current={"Languages"}>
          <ul>
            <li>French</li>
            <li>German</li>
            <li>Spanish</li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Languages;
