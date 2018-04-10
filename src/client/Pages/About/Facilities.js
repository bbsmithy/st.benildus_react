import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Facilities extends Component {
  render() {
    return (
      <div>
        <Navbar active={"About"} />
        <Page title={"Facilities"} current={"Facilities"}>
          <p>
            St Benildus College is committed to providing the very best
            facilities to our students, and to our staff. The Board of
            Management seeks constantly to upgrade and develop the College, and
            as a living institution, the College aims to continue to progress.
          </p>
          <div className="row">
            <div className="col-md-6">
              <h4>Specialised Rooms</h4>
              <ul>
                <li>Design and Communication graphics Room</li>
                <li>Geography Room</li>
                <li>Computer Studies Room</li>
                <li>
                  Four Science Laboratories (Biology, Chemistry, Physics and
                  Junior Science)
                </li>
                <li>Science Preparation Room</li>
                <li>Two Learning Support Rooms</li>
                <li>Art Room</li>
                <li>Music Room</li>
                <li>Construction Studies Room></li>
                <li>Materials Technology Room</li>
                <li>English Teachers Resource Room</li>
                <li>Six Teachers Study Rooms</li>
                <li>Oratory</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>Sport</h4>
              <ul>
                <li>
                  State of the art, all weather floodlit GAA pitch,
                  incorporating two full size soccer pitches
                </li>
                <li>Four all weather 5-a-side Field turf pitches</li>
                <li>Sports Hall</li>
                <li>Fully equipped gym</li>
                <li>Two basketball courts – indoor and outdoor</li>
                <li>Four outdoor pitches</li>
                <li>Extensive green space</li>
                <li>Changing facilities</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4>Administration</h4>
              <ul>
                <li>Secretarial Facilities</li>
                <li>Student Officer</li>
                <li>Reception for parents and visitors</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>Lasallian Rooms</h4>
              <ul>
                <li>Staff facilities</li>
                <li>Boardroom</li>
              </ul>
            </div>
          </div>

          <h4>Other Facilities</h4>
          <ul>
            <li>Laptop & data projector in every classroom</li>
            <li>Wi-Fi access for teachers</li>
            <li>
              Audio/Visual equipment School Hall equipped for concerts and
              productions
            </li>
            <li>School canteen</li>
            <li>Library</li>
          </ul>
        </Page>
      </div>
    );
  }
}
export default Facilities;
