import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class BookListAndUniform extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Book List And Uniform"} current={"Book List And Uniform"}>
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default BookListAndUniform;
