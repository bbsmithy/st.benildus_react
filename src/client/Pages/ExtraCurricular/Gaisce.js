import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Gaisce extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Extra Curricular"} />
        <Page title={"Gaisce"} current={"Gaisce"}>
          <p>
            The President’s Award is the most prestigious award in Ireland for
            young people aged 15 to 25. Gaisce is an old Irish word which means
            ‘a great achievement’. The award programme is a challenge from the
            President of Ireland to young people to set and pursue personal
            goals in four different areas of activity; Community Involvement,
            Personal Skills, Physical Recreation and an Adventure Journey, with
            the support of an adult leader.  This year, over 60 Transition Year
            students have signed up to undertake the Gaisce Bronze Medal Award
            and 2 fifth year students to take the Silver Award. The Bronze award
            involves the students doing 13 hours community service, 13 hours on
            developing a new personal skill and 13 hours participating in a new
            physical activity.  They will also have to do an overnight adventure
            trip as well as an additional 13 hours of their choice from the
            above. The Silver award involves the students doing double the
            workload.
          </p>

          <p>
            Examples of community involvement are working in local charity
            shops, volunteering in local community groups and working in
            mentoring programmes within the school. Examples of new personal
            skills involve students learning a musical instrument, learning sign
            language or completing a first aid course. Students do a range of
            activities to fulfill their physical recreation requirement such as
            attend the college gym, join a new sports group or do a new
            activity. All activities are done outside of school hours and in the
            students own time.
          </p>

          <p>
            The adventure journey takes the students on a two day hike along the
            Wicklow Way from Marley Park to Roundwood, stopping overnight in
            Knockree Youth Hostel. The students take this challenge seriously
            and have an enjoyable 40km walk.   Gaisce is a worthwhile and
            enjoyable activity that teaches students to be aware of broader
            issues in the community and to develop themselves physically and
            socially. Over the past number of years we have maintained a high
            number of Bronze Award medalist and a steady number of Gold and
            Silver medalists
          </p>
        </Page>
      </div>
    );
  }
}
export default Gaisce;
