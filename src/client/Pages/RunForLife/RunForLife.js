import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class RunForLife extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Run For Life'} />
        <Page title={'Run For Life'} current={'Run For Life'}>
          <p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/riunkc4dd30"
              frameborder="0"
              gesture="media"
              allow="encrypted-media"
              allowfullscreen=""
            />
            <br />
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/gvcHIHPTh1k"
              frameborder="0"
              allowfullscreen=""
            />
            <br />
            The Run for Life Initiative is the College’s own charity fundraising project. Deeply rooted in our Lasallian
            tradition, money is raised through sponsorship with the central focus of fundraising being the annual Run
            for Life Sponsored Run/Walk held every November. Since 2001 the school community of St. Benildus College
            have raised more than €600,000 through Run for Life and in 2016 alone we raised over €70,000. The St.
            Vincent de Paul in the local parishes is a major local beneficiary as are the local Special Olympics Clubs,
            sports clubs which cater for young people with special needs. Run for Life also supports the National
            Children’s Hospital Crumlin, the Laura Lynn House, Cancer Care Research, Beaumont Hospital and the Peter
            McVerry Trust. Moreover, Run for Life supports educational projects in Malawi, Zambia, Ethiopia, Tanzania,
            South Africa, Haiti, Argentina and the USA.
            <br />
            We support other worthy causes as diverse as Aware, Irish Meningitis Research Foundation, Dublin Simon,
            Headway and Pieta House.
            <br />
            The Run for Life fundraising activities help enrich the school experience for students and draw on the good
            will of the whole school community, students, parents, teachers and friends alike. Get involved in 2017!
            This year we are aiming to raise €80,000!
          </p>
          <h2> STUDENTS CONTRIBUTE TO RUN FOR LIFE THE FOLLOWING WAYS</h2>
          <ul>
            <li> Securing corporate sponsorship (All students).</li>
            <li>Collecting sponsorship using the Run for Life sponsorship card (Junior students).</li>
            <li> Supporting the Run for Life sponsored sports tournaments –soccer etc.(Senior students).</li>
            <li>Get involved in other Run for Life events –raffle, carol singing, bag pack etc. (All students).</li>
            <li>Becoming a member of the Run for Life Student Committee.</li>
          </ul>
          <p>&nbsp;</p>
          <h2>
            <strong>Run for Life 2017 Rewards</strong>{' '}
          </h2>
          <img
            src="http://www.stbenilduscollege.com/wp-content/uploads/2017/06/RFLRewards.jpg"
            alt="Run for Life Tracksuit"
          />
          <br />
          <strong>Please note: </strong> The Run for Life initiative always endeavours to keep costs to a minimum in
          order to contribute the maximum amount possible to as many deserving charitable causes as possible. In order
          to qualify for reward(s), students must make the required contribution. All Run for Life Sponsorship cards
          must be returned to the College
          <br />
          &nbsp;
          <br />
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/wgXICcvM4wo"
            frameborder="0"
            gesture="media"
            allowfullscreen=""
          />
          <p>
            <iframe
              width="480"
              height="270"
              src="https://www.youtube.com/embed/H4qRc-1GBGg"
              frameborder="0"
              gesture="media"
              allowfullscreen=""
            />
          </p>
          <p>
            <iframe
              width="480"
              height="270"
              src="https://www.youtube.com/embed/4tQaIafvjBU"
              frameborder="0"
              gesture="media"
              allowfullscreen=""
            />
          </p>
          <p>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FDonations-Summary-20161.pdf?alt=media&token=8746c5e6-c193-4035-bbc1-167ca6746040"
              alt="Donation Distributions by Year"
              target="blank"
            >
              Distributions by year
            </a>
          </p>
          <p>
            To make a personal donation or provide corporate sponsorship email{' '}
            <a href="benildusrunforlife@yahoo.ie">benildusrunforlife@yahoo.ie</a> .<br />
            Provide a prize for our ‘Combat Homelessness Raffle’ (for further information email{' '}
            <a href="mailto:benildusrunforlife@yahoo.ie"> Click here for further information</a> ).
            <br />
            Enter our online <a href=" http://bit.ly/2iRHV7B">‘Last Man Standing’ competition.</a>
            <br />
            <br />
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/docs%2FRun-for-Life-2015-Piece-for-Yearbook.docx?alt=media&token=37c2ce40-0e09-4dff-a965-e9ef1de3892a"
              alt="Yearbook piece on Run for life word Document"
              target="blank"
            >
              Run for Life 2015 Yearbook Article.
            </a>
            <br />
            <br />
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FRun-for-Life-Event-2016-Yearbook.pdf?alt=media&token=a6dd4f8e-4f3b-4e06-9ff4-efdd1b1f175af"
              target="blank"
            >
              {' '}
              Run for Life 2016 Yearbook Article.
            </a>
            <br />
          </p>
        </Page>
      </div>
    );
  }
}
export default RunForLife;
