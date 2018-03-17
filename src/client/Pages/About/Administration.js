import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";
class Administration extends Component {
  render() {
    return (
      <div>
        <Navbar active={"About"} />
        <Page
          title={"Administration & Staff"}
          current={"Administration"}
          path={"/About/Administration.js"}
        >
          <h4>Administration & Staff</h4>
          {/* <Gallery /> */}
          <p>
            St. Benildus College recognizes that quality education is a
            collaborative effort. We work together with our management,
            students, staff, parents and the wider community to provide a well
            rounded educational experience.
          </p>
          <br />
          <h4>Staff</h4>
          <p>
            The teaching staff of St. Benildus College work with dedication to
            and passion for their teaching profession. They set the highest
            standards for both themselves and their students, and are deeply
            committed to the fundamental ideals of a La Sallian education.
            Teachers also give generously of their time and talents for
            extra-curricular activities.
          </p>
          <br />
          <h4>Administration</h4>
          <p>
            St. Benildus College is a De La Salle school under the trusteeship
            of the Le Chéile Schools Trust. The school is administered by an
            eight member Board of Management, made up of the Chairman, Secretary
            (Principal) and representatives of the Trustees, Parents and Staff.
            School management is vested in the Principal, Mr. Martin Johnson,
            who is responsible for the internal operation, management and good
            order of the school. He is assisted in the daily management of
            school business by the Deputy Principal, Mr. Oisín MacEoin.
          </p>
          <p>
            A tutor system operates for 1st, 2nd and 3rd Year students, with
            tutors assisting the Year Head in pastoral matters.
          </p>
          <p>
            There are seven Year Heads in the College (two in charge of
            Transition Year) who assist the Principal and Deputy Principal:
          </p>
          <ul>
            <li>1st Year Dr. Naomi Lowe</li>
            <li>2nd Year Mr. Brendan Cahill </li>
            <li>3rd Year Mr. Brendan Hoyne</li>
            <li>Transition Year Ms. Ann Fitzpatrick / Ms. Sandra Downey </li>
            <li>5th Year Ms. Jennifer Beadle</li>
            <li>6th Year Mr. Pat Fahy </li>
          </ul>
          <p>
            A tutor system operates for 1st, 2nd and 3rd Year students, with
            tutors assisting the Year Head in pastoral matters.
          </p>
        </Page>
      </div>
    );
  }
}
export default Administration;
