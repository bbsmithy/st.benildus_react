import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Gallery"} />
        <Page title={"Gallery"} current={"Gallery"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default Gallery;
