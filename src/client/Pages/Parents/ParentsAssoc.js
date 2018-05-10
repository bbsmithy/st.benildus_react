import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class ParentsAssoc extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Parents Association"} current={"Parents Association"}>
          <p>
            The College is fortunate and grateful to have an active and dynamic
            Parent’s Association. The Association plays a vital role in
            fostering a strong relationship between parents and the College, as
            partners in the education of our students. The association is
            particularly active in fundraising, sponsorship, information
            provision and social events in the school community.
          </p>

          <p>What we do:</p>
          <ul>
            <li>
              Annual general meeting for parents in September/October with a
              guest speaker. This forum also provides an opportunity for
              discussion, suggestions and recruitment of volunteers onto the
              committee
            </li>
            <li>
              Two of our members represent parents on the school Board of
              Management
            </li>
            <li>
              Attend monthly meetings with the school Principal where he
              delivers a report on school developments and to discuss
              suggestions put forward by parents
            </li>
            <li>Participate in first year parents’ meeting</li>
            <li>Provide support during the Transition Year Musical Week</li>
            <li>Provide support at the academic and sport’s awards nights</li>
            <li>Provide support at the annual graduation event</li>
            <li>
              Provide funding for the sixth-year commemorative medals and chess
              club competition travel. We also contribute funds towards the
              development of the school garden
            </li>
            <li>
              Help organise various activities suggested by parents and invite
              guest speakers to talk to parents / students throughout the school
              year
            </li>
            <li>
              Support the creative writing competition that is incorporated into
              annual academic awards
            </li>
            <li>
              Provide funding of miscellaneous items and equipment as required,
              to enhance the school
            </li>
          </ul>
          <br />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Committee Member</th>
                <th scope="col">Position</th>
                <th scope="col">Son’s Year(s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Patricia Pleass (086 2026127)</td>
                <td>Chair</td>
                <td>4th Year</td>
              </tr>
              <tr>
                <td>Angelina Kelly</td>
                <td>Vice Chair</td>
                <td>4th Year</td>
              </tr>
              <tr>
                <td>Siobhán Mc Evitt</td>
                <td>Treasurer</td>
                <td>4th Year</td>
              </tr>
              <tr>
                <td>Uinsionn O’Connor</td>
                <td>Hon Secretary</td>
                <td>1st Year & 3rd Year</td>
              </tr>
              <tr>
                <td>Alan Duggan</td>
                <td>Board of Management</td>
                <td>4th Year</td>
              </tr>
              <tr>
                <td>Orlagh Brady</td>
                <td>Board of Management</td>
                <td>5th Year & 2nd Year</td>
              </tr>
              <tr>
                <td>Siobhan Gentleman</td>
                <td />
                <td>3rd Year</td>
              </tr>
              <tr>
                <td>Regina Mongan</td>
                <td />
                <td>5th Year & 2nd Year</td>
              </tr>
              <tr>
                <td>Teresa Loftus</td>
                <td />
                <td>5th Year</td>
              </tr>
              <tr>
                <td>Anne-Marie Horgan</td>
                <td />
                <td>1st Year, T.Y. & 6th Year</td>
              </tr>
              <tr>
                <td>Carol Mc Enerney</td>
                <td />
                <td>4th Year</td>
              </tr>
              <tr>
                <td>Ciara Moran</td>
                <td />
                <td>3rd Year</td>
              </tr>
              <tr>
                <td>Angie Keane</td>
                <td />
                <td>1st Year</td>
              </tr>
              <tr>
                <td>Robert Mc Conkey</td>
                <td />
                <td>1st Year</td>
              </tr>
              <tr>
                <td>Nicola Conroy</td>
                <td />
                <td>3rd</td>
              </tr>
              <tr>
                <td>Edith Emerson</td>
                <td />
                <td>1st Year</td>
              </tr>
              <tr>
                <td>Niamh Donnelly</td>
                <td />
                <td>2nd Year & 4th Year</td>
              </tr>
              <tr>
                <td>John Mc Donnell</td>
                <td />
                <td>1st Year</td>
              </tr>
              <tr>
                <td>Rachel Crean</td>
                <td />
                <td>2nd Year</td>
              </tr>
              <tr>
                <td>Seamus Moran</td>
                <td />
                <td>3rd Year</td>
              </tr>
              <tr>
                <td>Angelina Kelly</td>
                <td>Vice Chair</td>
                <td>4th Year</td>
              </tr>
            </tbody>
          </table>
        </Page>
      </div>
    );
  }
}
export default ParentsAssoc;
