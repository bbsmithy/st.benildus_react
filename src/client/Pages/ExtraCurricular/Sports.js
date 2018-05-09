import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Sports extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Extra Curricular"} />
        <Page title={"Sports"} current={"Sports"}>
          <div className="row">
            <div className="col-md-6">
              <img
                className="img img-responsive"
                src={require("../../../assets/headerImages/Sports.jpg")}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <p>
                The philosophy of St. Benildus College is to foster the
                intellectual, physical, social and moral development of each
                pupil. Through an innovative and flexible curriculum, a broad
                inclusive education is provided in an atmosphere of mutual
                respect and co-operation. In this context, we nurture an
                interest in sport among our pupils.The College prioritises
                enjoyment in all forms of physical activity, as we recognise the
                importance of happiness in the enrichment of the complete
                educational experience.
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <p>
                Sport provides an excellent opportunity for students to learn
                leadership skills, teamwork, friendship, develop confidence and
                an awareness of the importance of lifelong activity and health.
                It offers the opportunity for each person to achieve his own
                unique potential. We are very proud to provide opportunities to
                all students irrespective of ability, through our full range of
                sporting activites in the College and the college prioritises
                enjoyment in all forms of physical activity. The College has
                been very successful at the elite level of sport, winning titles
                at local, regional and national level. Amongst the sports
                offered to our students are:
              </p>
              <ul>
                <li>Athletics</li>
                <li>Badminton</li>
                <li>Basketball</li>
                <li>Chess</li>
                <li>Gaelic Football</li>
                <li>Gym Club</li>
                <li>Hurling</li>
                <li>Soccer</li>
                <li>Table Tennis</li>
                <li>Golf</li>
              </ul>
            </div>
          </div>

          <br />
          <p>
            The outreach possibilities of sporting activity are constantly
            explored. Our students are linked with Special Olympics, ‘Run 4
            Life’, local sporting clubs, and the promotion and organisation of
            sports in local primary schools. St Benildus College has links with
            the following local clubs:
          </p>
          <br />
          <ul>
            <li>
              Gaelic Games: Kilmacud Crokes, Naomh Olaf, Ballinteer St John’s.
            </li>
            <li>Soccer: St James’ Athletic.</li>
            <li>Athletics: Dundrum South Dublin Athletics Club.</li>
            <li>
              Special Olympics: South Dublin Sports Club, South Dublin Strikers.
            </li>
            <li>Table Tennis: Dundrum Table Tennis Club.</li>
            <li>Rugby: DLSP</li>
            <li>Yoga: 360°</li>
            <li>Boxing: Angels B.C.</li>
          </ul>
          <br />
          <h4>All Weather Pitch</h4>
          <p>
            The new all weather pitch has been completed. It is a state of the
            art, all weather floodlit GAA pitch, incorporating two full size
            soccer pitches. It is a welcome achievement and a great addition to
            the sporting facilities in the college. The all weather pitch was
            installed by Pride Sports.  For further information please see their
            website.  http://www.pridesports.ie
          </p>
          <br />
          <h4>Interested in hiring?</h4>
          <p>
            Our fantastic sports facilities are available if you have a sports
            league and wish to discuss hiring options:
          </p>
          <br />
          <ul>
            <li>Full Size All Weather 11-A-Side Soccer Pitches (2).</li>
            <li>Full size All Weather Gaelic Football/Hurling Pitch (1).</li>
            <li>All Weather 6-A-Side Soccer Pitches (2)</li>
            <li>
              Indoor sports hall – suitable for badminton, basketball, indoor
              soccer, table tennis, volleyball etc.
            </li>
            <li>Fully equipped gym</li>
            <li>Yoga/dance studio</li>
            <li>
              Please contact Paula Phone – 086 6179000 Email – info@astro.ie St.
              Benildus Integration through Sport 2016
            </li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Sports;
