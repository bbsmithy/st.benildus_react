import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";
import Iframe from "react-iframe";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Contact"} />
        <Page title={"Contact"} current={"Contact"}>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9541.093686843085!2d-6.221376!3d53.284637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2755be8ec28e6c1d!2sBenildus+College+Secondary+School!5e0!3m2!1sen!2sie!4v1429718541039"
            width="100%"
            height="400"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
          <div class="team-wrapper col-md-12 col-sm-12">
            <br />
            <div class="row page-row">
              <figure class="thumb col-md-3 col-sm-4 col-xs-6">
                <img
                  class="img-responsive"
                  src="http://www.stbenilduscollege.com/wp-content/uploads/2016/10/Mr.-Johnson.jpg"
                  alt=""
                />
              </figure>
              <div
                class="details col-md-9 col-sm-8 col-xs-6"
                style={{ marginTop: 20 }}
              >
                <h3 class="title">Mr. Martin Johnson</h3>
                <h4>Principle</h4>
                <h5>
                  Email:{" "}
                  <a
                    href="mailto:mjohnson@stbenilduscollege.com"
                    target="_blank"
                  >
                    mjohnson@stbenilduscollege.com
                  </a>
                </h5>
              </div>
            </div>
            <div class="row page-row">
              <figure class="thumb col-md-3 col-sm-4 col-xs-6">
                <img
                  class="img-responsive"
                  src="http://www.stbenilduscollege.com/wp-content/uploads/2016/10/Mr.-Mac-Eoin.jpg"
                  alt=""
                />
              </figure>
              <div
                class="details col-md-9 col-sm-8 col-xs-6"
                style={{ marginTop: 20 }}
              >
                <h3 class="title">Mr. Oisín Mac Eoin</h3>
                <h4>Deputy Principle</h4>
                <h5>
                  Email:{" "}
                  <a
                    href="mailto:omaceoin@stbenilduscollege.com"
                    target="_blank"
                  >
                    omaceoin@stbenilduscollege.com
                  </a>
                </h5>
              </div>
            </div>
            <div class="row page-row">
              <figure class="thumb col-md-3 col-sm-4 col-xs-6">
                <img
                  class="img-responsive"
                  src="http://www.stbenilduscollege.com/wp-content/uploads/2017/11/Mary.jpg"
                  alt=""
                />
              </figure>
              <div
                class="details col-md-9 col-sm-8 col-xs-6"
                style={{ marginTop: 20 }}
              >
                <h3 class="title">Ms. Mary Bohan</h3>
                <h4>Deputy Principle</h4>
                <h5>
                  Email:{" "}
                  <a
                    href="mailto:mjohnson@stbenilduscollege.com"
                    target="_blank"
                  >
                    mjohnson@stbenilduscollege.com
                  </a>
                </h5>
              </div>
            </div>
            <div class="row page-row">
              <figure class="thumb col-md-3 col-sm-4 col-xs-6">
                <img
                  class="img-responsive"
                  src="http://www.stbenilduscollege.com/wp-content/uploads/2016/10/Mr.-Johnson.jpg"
                  alt=""
                />
              </figure>
              <div
                class="details col-md-9 col-sm-8 col-xs-6"
                style={{ marginTop: 20 }}
              >
                <h3 class="title">Mr. Martin Johnson</h3>
                <h4>Principle</h4>
                <h5>
                  Email:{" "}
                  <a
                    href="mailto:mjohnson@stbenilduscollege.com"
                    target="_blank"
                  >
                    mjohnson@stbenilduscollege.com
                  </a>
                </h5>
              </div>
            </div>
            <div class="row page-row">
              <figure class="thumb col-md-3 col-sm-4 col-xs-6">
                <img
                  class="img-responsive"
                  src="http://www.stbenilduscollege.com/wp-content/uploads/2016/10/Mr.-Johnson.jpg"
                  alt=""
                />
              </figure>
              <div
                class="details col-md-9 col-sm-8 col-xs-6"
                style={{ marginTop: 20 }}
              >
                <h3 class="title">Mr. Martin Johnson</h3>
                <h4>Principle</h4>
                <h5>
                  Email:{" "}
                  <a
                    href="mailto:mjohnson@stbenilduscollege.com"
                    target="_blank"
                  >
                    mjohnson@stbenilduscollege.com
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </Page>
      </div>
    );
  }
}
export default Contact;
