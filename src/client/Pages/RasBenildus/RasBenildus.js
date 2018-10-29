import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from '../../components/Page/Page';

class GuidanceServices extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Rás Benildus'} />
        <Page title={'Rás Benildus'} current={'Rás Benildus'}>
          <h1>RÁS BENILDUS 2018 – GET INVOLVED IN OUR COMMUNITY INITIATIVE </h1>
          <p>
            St Benildus College is delighted to announce that we will be running our 2nd Annual Rás Benildus 5k Run/Walk
            @ 19:30 on Friday the 18th of May 2018. A total of 274 participants registered for last year’s event, and we
            are hoping to better that again this year.
            <br />
            This is a wonderful community initiative which brings people together to enjoy a healthy and enjoyable
            journey, at whatever pace, through the local communities of Kilmacud and Sandyford. Rás Benildus is a truly
            inclusive event, which is open to individuals and to families, indeed parents with buggies and dogs on leads
            are even welcome!
            <br />
            The course will be well marshalled and local Gardaí will be on hand to provide traffic support. The Rás
            Benildus course is predominantly on footpaths in the locality. In fact there is only one road to be crossed
            which is at the Drummartin Link Rd/Upper Kilmacud Rd intersection.
            <br />
            Online entry to Rás Benildus is only €10 for students and €20 for adults and all finishers will receive the
            exclusive Rás Benildus t-shirt and post-race goodies.
            <br />
            We are very grateful to Action24 for their generous sponsorship of Rás Benildus.
          </p>
          <p>
            The Rás Benildus proceeds will go to Our Lady’s Hospice in memory of our former teacher Mr. Kevin Tuohy
            &amp; to Walk While You Can, Fr. Tony Coote’s initiative in support of Motor Neuron Disease.{' '}
          </p>
          <p>
            With such large numbers participating, it is important that we have a large team of adult volunteers on the
            night. As a result, we are appealing to all adults in your household to help us out. Ní neart go cur le
            chéile – unity is strength! We would truly appreciate your support in relation to this initiative.{' '}
          </p>
          <p>WAYS TO SUPPORT RÁS BENILDUS 2018: </p>
          <p>
            Enter &amp; participate in Rás Benildus –{' '}
            <a href="http://www.popupraces.ie/events/ras-benildus-2/ ">REGISTER ONLINE</a>
          </p>
          <br />
          <p>
            Provide financial support/sponsorship.
            <br />
            Volunteer to help out on the night (stewards/course marshals/results etc.) Friday May 18th 2018 19:00-21:00.
            <br />
            Bake a cake or make some finger food for distribution with a cup of tea on the night.{' '}
          </p>
          <p>
            If you can help out in any way please contact Mr. Oisín Mac Eoin, Deputy Principal St. Benildus College, by
            emailing <a href="omaceoin@stbenilduscollege.com">omaceoin@stbenilduscollege.com</a>
          </p>
          <br />

          <img src="http://www.stbenilduscollege.com/wp-content/uploads/2017/05/Final-Route1.png" alt="race route" />
          <img
            width="200px;"
            height="200px;"
            src="http://www.stbenilduscollege.com/wp-content/uploads/2017/04/Rás-Benildus-T-Shirt-1.jpg"
            alt="Rás Benildus T-Shirt"
          />
          <img
            width="200px;"
            height="200px"
            src="http://www.stbenilduscollege.com/wp-content/uploads/2018/05/Benildus-RAS-Poster-V2-page-001.jpg"
            alt="Rás Benildus Poster"
          />

          <p>
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/crqSgkgP_7o"
              frameborder="0"
              allowfullscreen=""
            />
          </p>
        </Page>
      </div>
    );
  }
}
export default GuidanceServices;
