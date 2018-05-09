import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class TransitionYear extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Academia"} />
        <Page title={"Transition Year"} current={"TransitionYear"}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/erWcOAXAfTk"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </Page>
      </div>
    );
  }
}
export default TransitionYear;
