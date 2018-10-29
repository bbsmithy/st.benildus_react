import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class Alumni extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Alumni'} />
        <Page title={'Alumni'} current={'Alumni'}>
          <h2>Past Pupils Database</h2>
          <p>
            In this our 51st year we are working to establish a database of past pupils and retired staff to help us
            stay in touch. To date we have an email address for almost 1000 alumni. However since 1966 over 7000 have
            passed through the gates so there are a great many more we haven’t reached yet. If you know any of those,
            please ask them to contact us or pass on their details yourself to{' '}
            <a href="mailto:benildus50@gmail.com">benildus50@gmail.com</a> We would really appreciate it.
          </p>
          <h2> The story so far</h2>
          <p>Coming soon</p>
          <h2>ENews</h2>
          <p>
            For August 2018 News Letter{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FBenildus-eNews-Edition-3-August-2018.pdf?alt=media&token=8113202d-0cf1-4f53-9b18-9b428bcff958"
              target="blank"
            >
              Click Here
            </a>
          </p>
          <p>
            For December 2017 News Letter{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FBenildus-eNews-Edition-2-December-2017.pdf?alt=media&token=c2b98731-77e8-4ff4-9646-5944ea027789"
              target="blank"
            >
              Click here
            </a>
          </p>
          <p>
            For the March 2017 Newsletter{' '}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/benildus-college.appspot.com/o/pdfs%2FBenildus-eNews-Edition-1-March-2017.pdf?alt=media&token=3a9e922f-39f2-4a4c-822e-3313b93ea2e2"
              target="blank"
            >
              Click here
            </a>
          </p>
        </Page>
      </div>
    );
  }
}
export default Alumni;
