import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer " style={{ marginTop: "20px" }}>
        <div className="footer-content ">
          <div className="container ">
            <div className="row ">
              <div className="footer-col col-md-9 col-sm-4 about ">
                <div className="footer-col-inner ">
                  <h3>Quick Links</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />About us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Contact us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Privacy policy
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Terms &
                            Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />About us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Contact us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Privacy policy
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Terms &
                            Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />About us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Contact us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Privacy policy
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i className="fa fa-caret-right " />Terms &
                            Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-col col-md-3 col-sm-12 contact">
                <div className="footer-col-inner">
                  <h3>Contact us</h3>
                  <div className="row">
                    <p className="adr clearfix col-md-12 col-sm-4">
                      <i className="fa fa-map-marker pull-left" />
                      <span className="adr-group pull-left" />
                      <span className="street-address">College Green</span>
                      <span className="region">56 College Green Road</span>
                      <span className="postal-code">BS16 AP18</span>
                      <span className="country-name">UK</span>
                    </p>
                    <p className="tel col-md-12 col-sm-4 ">
                      <i className="fa fa-phone" />0800 123 4567
                    </p>
                    <p className="email col-md-12 col-sm-4 ">
                      <i className="fa fa-envelope " />
                      <a href="#">enquires@website.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="container">
            <div className="row">
              <small className="copyright col-md-6 col-sm-12 col-xs-12">
                Developed by
                <a href="https://slate.ie/"> Slate</a>
              </small>
              <ul className="social pull-right col-md-6 col-sm-12 col-xs-12">
                <li>
                  <a href="# ">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li className="row-end">
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
