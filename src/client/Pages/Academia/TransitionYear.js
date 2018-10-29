import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class TransitionYear extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Academia'} />
        <Page title={'Transition Year'} current={'TransitionYear'}>
          <p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/erWcOAXAfTk"
              frameborder="0"
              allowfullscreen=""
            />
          </p>
          <h3>Transition Year Programme 2016/2017</h3>
          <p>In Transition Year the modules change every six weeks.</p>
          <p>
            {' '}
            Core subjects remain throughout the year:
            <br />
            <br />
            English,&nbsp;Irish,&nbsp;Maths,&nbsp;Spanish,&nbsp;German,&nbsp;French.{' '}
          </p>
          <p> Modular studies include:</p>
          <p>
            {' '}
            Computer Studies:
            <br />
            ECDL,Computer Studies{' '}
          </p>
          <p>
            {' '}
            Business:
            <br />
            Economics, Business Studies, Finance, Accounting, Solids Works
          </p>
          <p>
            {' '}
            Personal Development:
            <br />
            Health, Psychology,Mindfulness, Debating,Cookery,
          </p>
          <p>
            {' '}
            Cultural Interest:
            <br />
            Book Club, Dance, Current Affairs, Dublin Studies, Green Schools, Self Defense{' '}
          </p>
          <p>
            {' '}
            Career Focus:
            <br />
            Marketing, D.I.Y., Goal Setting, Career Guidance
          </p>
          <p>
            {' '}
            Humanities
            <br />
            European Studies, Dublin Studies, Film Studies, Media Studies,Journalism,
            <br />
            Creative Writing, Italian Studies, Chinese, Geography, Classical Studies,
            <br />
            Anthropology, Political Science, History, Art, Music, Leisure, Gender Studies,
            <br />
            Music Performance, Archaeology Glasnevin Programme, Human Rights, Drama, Chess,
            <br />
            Religion,R.S.E., Road Safety.{' '}
          </p>
          <p>
            {' '}
            Sciences
            <br />
            Forensic Science, Geology, Genealogy, Chemistry/Physics, Natural World,
            <br />
            Agricultural Science, Nutrition, Biology.
          </p>
        </Page>
      </div>
    );
  }
}
export default TransitionYear;
