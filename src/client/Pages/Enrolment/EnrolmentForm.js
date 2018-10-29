import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class EnrolmentForm extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Enrolement'} />
        <Page title={'Enrolement'} current={'Enrolment Form'}>
          <h3>St.Benildus Enrolement Policy</h3>
          <p>
            This Policy supersedes all pre-existing policies and has been ratified by the Board of Management of St.
            Benildus College on Wednesday 25th January 2017. This Policy applies to students enrolling for September
            2020 and subsequent years.
          </p>
          <p>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FPolicy.pdf?alt=media&token=88f57a81-fc40-47ba-8397-343efca59fe8"
              target="_blank"
            >
              Download a PDF of the ENROLMENT POLICY
            </a>
          </p>
          <p>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FApplication.pdf?alt=media&token=ef59797d-25f1-4915-896a-fe0404e97f8d"
              target="_blank"
            >
              Download a PDF of the ENROLMENT APPLICATION FORM
            </a>
          </p>
          <p>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FTransfer.pdf?alt=media&token=ec16a5a7-bd41-48fb-ac49-013bd2b0d7e9"
              target="_blank"
            >
              Download a PDF of the SCHOOL TRANSFER APPLICATION
            </a>
          </p>
          <p>The closing dates for receipt of applications are as follows:</p>
          <ul>
            <li>For enrolment in September 2020: Closing date March 10th 2017.</li>
            <li>For enrolment in September 2021: Closing date March 16th 2018.</li>
            <li>For enrolment in September 2022: Closing date March 15th 2019.</li>
          </ul>
          <p>
            The Board of Management has decided to offer places for these years within thirty days of the closing dates.
          </p>
        </Page>
      </div>
    );
  }
}
export default EnrolmentForm;
