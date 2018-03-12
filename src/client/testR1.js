import React, { Component } from "react";
import Page from "./components/Page/Page";

class TestR1 extends Component {
  render = () => {
    return (
      <Page title={"Test Route"} home={"Home"} current={"Test R1"}>
        <h1>Your a mess you fucking scumbag</h1>
      </Page>
    );
  };
}

export default TestR1;
