import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class Overview extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Academia'} />
        <Page title={'Academia'} current={'Academia'}>
          <p class="intro">
            <b>
              St Benildus College prioritises academic excellence, and our Leaving Certificate students consistently
              outperform the national average. At each stage of the academic programme, students are monitored for both
              performance and participation. Exceptional teaching is a pillar of our success – support and encouragement
              are provided to every child at every level of ability, particularly by our outstanding Learning Support
              &amp; Special Needs Department.{' '}
            </b>
          </p>
          <p>
            <strong>Junior Certificate</strong>
          </p>
          <p>
            The three-year Junior Certificate Programme is assessed by State Examination at the end of 3rd Year.
            Students undertake the core subjects of English, Irish, Maths, P.E. and R.E, along with Business Studies,
            C.S.P.E, History, Geography, Science, S.P.H.E, a language and one other subject from a choice. Students are
            welcomed from their first day, and encouraged to embrace the ethos of the College community.
          </p>
          <p>
            <strong>Transition Year</strong>
          </p>
          <p>
            The Transition Year Programme is a one-year optional programme following Junior Certificate. It provides a
            bridge to enable students to make the transition for the more dependent type of learning associated with the
            Junior Cycle to the independent learning environment of the Senior cycle. It encourages personal and social
            development and fosters academic achievement as students prepare for a Leaving Certificate programme,
            further study and adult and working life. Crucially, it seeks to promote maturity. The core subjects are
            continued throughout the year, and a wide range of interesting modules are developed by the staff, allowing
            students to explore individual areas of interest. All this is supplemented by an extensive non-academic
            programme of activities.
          </p>
          <p>
            <strong>Leaving Certificate (Established)</strong>
          </p>
          <p>
            The two-year programme, throughout 5th and 6th Year, prepares the student for the Leaving Certificate exam.
            Students undertake the core subjects of English, Irish, Maths, P.E. and R.E., along with four other subjects
            chosen from the wide selection offered. Graduation ceremony takes place in May each year, as we wish our
            students every success in their exams and future.
          </p>
          <p>Leaving Certificate Vocational Programme (LCVP)</p>
          <p>
            The LCVP combines the academic strengths of the Leaving Certificate with a dynamic focus on self-directed
            learning, innovation and enterprise. This two-year programme aims to prepare young people for adult life by
            ensuring that they are educated in the broadest sense, with an ability to cope and thrive in an environment
            of rapid change. Throughout the programme, students are encouraged to develop skills and qualities equally
            relevant to the needs of those preparing for further education, seeking employment or planning to start
            their own business. The LCVP is available to students in Fifth Year.
          </p>
        </Page>
      </div>
    );
  }
}
export default Overview;
