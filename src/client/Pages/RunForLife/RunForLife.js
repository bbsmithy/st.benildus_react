import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class RunForLife extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Run For Life"} />
        <Page title={"Run For Life"} current={"Run For Life"}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/riunkc4dd30"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </Page>
      </div>
    );
  }
}
export default RunForLife;
