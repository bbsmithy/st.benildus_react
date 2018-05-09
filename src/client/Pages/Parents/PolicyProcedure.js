import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class PolicyProcedure extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Policy Procedure"} current={"Policy Procedure"}>
          <p>
            Download the St Benildus College{" "}
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2017/01/Anti-Bullying-POLICY-Revised-January-2017-1.pdf">
              Anti-bullying Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{" "}
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2017/01/Child-Protection-POLICY-October-2016.pdf">
              Child Protection Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{" "}
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2015/03/St-Benildus-College-RSE-Policy-.docx">
              RSE Policy here.
            </a>
          </p>{" "}
          <p>
            Download the St Benildus College House{" "}
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2016/12/House-Examination-Policy-December-2016.pdf">
              Examination Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{" "}
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2016/12/House-Examination-Policy-December-2016.pdf">
              Learning Support and Resource Policy here.
            </a>
          </p>{" "}
          <p>
            Download the St Benildus College School{" "}
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2017/01/School-Substance-Misuse-Policy-update-May-2014.pdf">
              Substance Misuse Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{" "}
            <a href="http://www.stbenilduscollege.com/wp-content/uploads/2017/01/ATTENDANCE-STRATEGY-2014.pdf">
              Attendence Strategy here.
            </a>
          </p>
        </Page>
      </div>
    );
  }
}
export default PolicyProcedure;
