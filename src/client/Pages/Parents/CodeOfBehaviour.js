import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class CodeOfBehaviour extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Code Of Behaviour"} current={"Code Of Behaviour"}>
          <h3>
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2017/01/Code-of-Behaviour-June-2016.pdf">
              Click Here For School Code Of Conduct
            </a>
          </h3>
        </Page>
      </div>
    );
  }
}
export default CodeOfBehaviour;
