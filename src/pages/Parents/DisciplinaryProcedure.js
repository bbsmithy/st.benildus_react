import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class DisciplinaryProcedureExp extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page
          title={"Disciplinary Procedure"}
          current={"Disciplinary Procedure"}
        >
          <h1>Content here please</h1>
        </Page>
      </div>
    );
  }
}
export default DisciplinaryProcedureExp;
