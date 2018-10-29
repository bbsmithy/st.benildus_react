import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class CommunityInitiatives extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Extra Curricular'} />
        <Page title={'Community Initiatives'} current={'Community Initiatives'}>
          <h3>The Integration through Sports Day</h3>
          <p>
            The ‘Integration through Sports Day’ held each April at the College is our celebration of how young people
            with intellectual disabilities can be included and valued. A Sunday morning’s sporting activities brings
            together the boys of the College, the girls of neighbouring St. Raphaela’s Secondary School and athletes
            from the Special Olympics Clubs, and creates an occasion of real inclusion. There is a place for everyone:
            sport and learning in a positive environment. Participants take part in the soccer and basketball
            competitions. All athletes enjoy this rare opportunity to meet and the games are played in a lovely spirit
            of fun and friendship. Souvenir t-shirts carrying the Special Olympics logo alongside that of St Benildus
            College illustrate the sense of partnership on this day. As a school we welcome such a wonderful opportunity
            for meaningful inclusion. We were honored when the Special Olympics team visited our school with the Special
            Olympics torch.
          </p>
          <h4>The Run for Life Initiative</h4>
          <p>Run for Life is the College’s very own charity fundraising project.</p>
          <a href="/run-for-life">Read More</a>
        </Page>
      </div>
    );
  }
}
export default CommunityInitiatives;
