import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class PolicyProcedure extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Parents'} />
        <Page title={'Policy Procedure'} current={'Policy Procedure'}>
          <p>
            Download the St Benildus College{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FCodeOfBehaviour.pdf?alt=media&token=7e611614-7f99-4d5f-ab03-091d9a753b93"
              target="blank"
            >
              Anti-bullying Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FChild-Protection.pdf?alt=media&token=34695ebe-97ed-4b26-93a0-adbf74c1eb25"
              target="blank"
            >
              Child Protection Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{' '}
            <a href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/docs%2FSt-Benildus-College-RSE-Policy-.docx?alt=media&token=4ec4dc30-179c-4383-8a3e-ec9c572c56c1">
              RSE Policy here.
            </a>
          </p>{' '}
          <p>
            Download the St Benildus College House{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FHouse-Examination.pdf?alt=media&token=629de24a-c836-4890-86f8-4c4f1b46cd0f"
              target="blank"
            >
              Examination Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FLearning-Support-and-Resource-Policy.pdf?alt=media&token=94463567-7bd8-4b31-86a7-abf474a262d2"
              target="blank"
            >
              Learning Support and Resource Policy here.
            </a>
          </p>{' '}
          <p>
            Download the St Benildus College School{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FSchool-Substance-Misuse.pdf?alt=media&token=b503e896-b4c8-4799-a009-ccdd54486810"
              target="blank"
            >
              Substance Misuse Policy here.
            </a>
          </p>
          <p>
            Download the St Benildus College{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FATTENDANCE-STRATEGY.pdf?alt=media&token=f2215ec1-2d9a-47df-8bdf-de2547037fde"
              target="blank"
            >
              Attendence Strategy here.
            </a>
          </p>
        </Page>
      </div>
    );
  }
}
export default PolicyProcedure;
