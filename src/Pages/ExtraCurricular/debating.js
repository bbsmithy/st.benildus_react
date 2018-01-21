import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Debating extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Extra Curricular"} />
        <Page title={"Debating"} current={"Debating"}>
          <p>
            Once again this year the Senior Debating team will take on the
            challenging task of participating in the ‘Concern’ National Debating
            Competitions. The debates focus around issues of development and
            equality and a lot of research and time is put into each student’s
            four minute speech. The team won their first debate against John
            Scottus Secondary school in Donnybrook on Tuesday 11th November
            opposing the motion ‘Ireland must deliver on its 0.7% overseas aid
            promise’; a tough task. The next debate is here in the college
            against St Joseph of Cluny where they must convince the judges that
            ‘Scotland should have voted for independence.’ The next debate is
            away to Jesus and Mary College, Our Lady’s Grove on February the 9th
            to propose the motion ‘The Ebola epidemic demonstrates the
            international communities’ indifference to Africa.’ The final debate
            is in Sandford Park school, where the students will debate
            ‘Ireland’s commitment to tackling climate change is a load of hot
            air.’
          </p>
          <p>
            Having taken on and beaten, two of the four schools in previous
            years, confidence is high and if the boys gain enough points they
            will continue to the knockout phase in the competition; with the
            overall winners traveling to Africa to see one of the ‘Concern’
            projects in action! All spectators, parents and students in the
            college, are welcome to attend and participate in the lively open
            forum that follows each debate! We wish the team the very best of
            luck.{" "}
          </p>
        </Page>
      </div>
    );
  }
}
export default Debating;
