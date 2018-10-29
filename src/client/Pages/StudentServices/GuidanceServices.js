import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class GuidanceServices extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Student Services'} />
        <Page title={'Guidance Services'} current={'Guidance Services'}>
          <p>
            The Guidance Service in St Benildus College offers emotional, educational and vocational support to our
            students. Senior students are given extensive assistance in their process of decision-making. 6th year
            students attend the Irish Times Higher Options Conference in September, and in November, attend our annual
            Careers Evening, a collaborative event between local schools. Information evenings are held for parents and
            students to guide them through the CAO system.
          </p>
          <p>
            <a href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/docs%2FSenior-Guidance-Schedule.docx?alt=media&token=4ff2c35a-c1e4-4447-b78f-c32bb8af59c1">
              Click here for a summary of senior guidance activities
            </a>
          </p>
        </Page>
      </div>
    );
  }
}
export default GuidanceServices;
