import React, { Component } from "react";
import TwitterTimeline from "react-twitter-embedded-timeline";

export default class Page extends Component {
  render() {
    return (
      <div>
        <div className="content container">
          <div className="page-wrapper" style={{ minHeight: "700px" }}>
            {this.props.title && (
              <header className="page-heading clearfix">
                <h1 className="heading-title pull-left">{this.props.title}</h1>
                <div className="breadcrumbs pull-right">
                  <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here!</li>
                    <li>
                      <a href="index.html">{this.props.home}</a>
                      <i className="fa fa-angle-right" />
                    </li>
                    <li className="current">{this.props.current}</li>
                  </ul>
                </div>
              </header>
            )}
            <div className="page-content">
              <div className="row page-row">
                <div className="col-md-9">{this.props.children}</div>
                <div className="col-md-3 col-sm-12">
                  <TwitterTimeline
                    widgetId="675940410338996224"
                    chrome="noborders noheader"
                    limit={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer " style={{ marginTop: "20px" }}>
          <div className="footer-content ">
            <div className="container ">
              <div className="row ">
                <div className="footer-col col-md-3 col-sm-4 about ">
                  <div className="footer-col-inner ">
                    <h3>About</h3>
                    <ul>
                      <li>
                        <a href="about.html ">
                          <i className="fa fa-caret-right " />About us
                        </a>
                      </li>
                      <li>
                        <a href="contact.html ">
                          <i className="fa fa-caret-right " />Contact us
                        </a>
                      </li>
                      <li>
                        <a href="privacy.html ">
                          <i className="fa fa-caret-right " />Privacy policy
                        </a>
                      </li>
                      <li>
                        <a href="terms-and-conditions.html ">
                          <i className="fa fa-caret-right " />Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="footer-col col-md-6 col-sm-8 newsletter ">
                  <div className="footer-col-inner ">
                    <h3>Join our mailing list</h3>
                    <p>
                      Subscribe to get our weekly newsletter delivered directly
                      to your inbox
                    </p>
                    <form className="subscribe-form">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                      <input
                        className="btn btn-theme btn-subscribe"
                        type="submit"
                        value="Subscribe"
                      />>
                    </form>
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
                  Developed By
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
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-skype" />
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
      </div>
    );
  }
}
