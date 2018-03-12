import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class MissionStatement extends Component {
  render() {
    return (
      <div>
        <Navbar active={"About"} />
        <Page title={"Mission Statement"} current={"Mission Statement"}>
          <p>
            St Benildus College provides a Catholic, LaSallian education rooted
            in a tradition which prepares young people for college and for life.
            The school seeks to educate students spiritually, academically,
            physically and socially through the promotion of Christian values,
            teaching the broad, prescribed academic programmes as well as a wide
            range of student activities under the guidance of a caring,
            dedicated management, staff and administration.
          </p>
        </Page>
      </div>
    );
  }
}
export default MissionStatement;
