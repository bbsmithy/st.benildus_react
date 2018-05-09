import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class StudentCouncil extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Student Services"} />
        <Page title={"Student Council"} current={"Student Council"}>
          <p>
            The Student Council of St. Benildus College was founded in 2003. It
            is now an established, respected and important part of College life.
          </p>

          <h4>Why do we have a Student Council?</h4>
          <p>To officially represent the students.</p>
          <p>To give the students a voice in the College.</p>
          <p>To channel new ideas and initiatives.</p>
          <p>To create an advisory body of trained students.</p>
          <p>
            To provide a forum for students to express and hear views on school
            and community matters.
          </p>
          <p>
            To help the students, management, staff, parents and community work
            together to benefit our school.
          </p>

          <h4>What is the structure of the Council?</h4>

          <p>14 Member Student Council</p>

          <h4>Members</h4>

          <p>3 x 6th Years</p>
          <p>3 x 5th Years</p>
          <p>3 x Transition Years</p>
          <p>2 x 3rd Years</p>
          <p>2 x 2nd Years</p>
          <p>1 x Staff Liaison Member (non-voting)</p>

          <h4>Officers</h4>
          <p>Chairman (6th Year Student)</p>
          <p>Deputy Chairman</p>
          <p>Secretary</p>
          <p>Treasurer</p>
          <p>PR Officer</p>

          {/* Meetings are held once a month in the Board Room.

  How are students elected to the Student Council?
Elections for the Student Council are held in September each year. This is a very formal, transparent and democratic process.

Nomination Each candidate must receive 2 student and 2 staff nominations and submit their nomination form. By becoming a candidate, the student undertakes to abide by all Council  rules.

Election On Polling Day, each year votes by secret ballot and preference for the candidates from their year. An Open Count is held when voting is closed.

Induction New Members attend an afternoon Induction Course and receive their Student Council badges.

What does the Student Council do? 
Some of the Student Council Activities since our foundation include:

• Addresses to Staff, Board of Management and Parent’s Association
• Membership of Comhairle na nÓg.
• Student Council Noticeboard.
• Undertaken a process of self-evaluation and improvement.
• Student Council email address
• Annual application for funding from the Board of Management and the Parents’ Association.
• Major Student Body Survey
• Marked World Book Day.
• Set up an Irish Sub-Committee
• Lobbied for Hardback journals for all students.
• Promotion of Healthy Eating.
• Annual Anti-Bullying Campaign
• Field trip to Dáil Éireann

Why should you join the Student Council?
To become actively involved in YOUR school.
To BE the communication link between the students and the College.
To develop self-confidence, independence and responsibility, and leadership skills.
To help to make YOUR Student Council the best that it can be!! */}
        </Page>
      </div>
    );
  }
}
export default StudentCouncil;
