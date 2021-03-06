import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ marginTop: '20px' }}>
        <div className="footer-content ">
          <div className="container ">
            <div className="row ">
              <div className="footer-col col-md-8 col-sm-4 about ">
                <div className="footer-col-inner ">
                  <h3>Quick Links</h3>
                  <div className="row">
                    <div className="col-md-3">
                      <ul>
                        <li>
                          <Link to={'/about'}>
                            <i className="fa fa-caret-right " />
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link to={'/about/mission-statement'}>
                            <i className="fa fa-caret-right " />
                            Mission Statement
                          </Link>
                        </li>
                        <li>
                          <Link to={'/about/administration-staff'}>
                            <i className="fa fa-caret-right " />
                            Administration & Staff
                          </Link>
                        </li>
                        <li>
                          <Link to={'/academia/core'}>
                            <i className="fa fa-caret-right " />
                            Core Subjects
                          </Link>
                        </li>
                        <li>
                          <Link to={'/academia/sciences'}>
                            <i className="fa fa-caret-right " />
                            Sciences
                          </Link>
                        </li>
                        <li>
                          <Link to={'/academia/languages'}>
                            <i className="fa fa-caret-right " />
                            Languages
                          </Link>
                        </li>
                        <li>
                          <Link to={'/academia/technology'}>
                            <i className="fa fa-caret-right " />
                            Technology
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li>
                          <Link to={'/academia/humanities'}>
                            <i className="fa fa-caret-right " />
                            Humanities
                          </Link>
                        </li>
                        <li>
                          <Link to={'/academia/business'}>
                            <i className="fa fa-caret-right " />
                            Business
                          </Link>
                        </li>
                        <li>
                          <Link to={'/academia/transition-year'}>
                            <i className="fa fa-caret-right " />
                            Transition Year
                          </Link>
                        </li>
                        <li>
                          <Link to={'/extra-curricular/sports'}>
                            <i className="fa fa-caret-right " />
                            Sports
                          </Link>
                        </li>
                        <li>
                          <Link to={'/extra-curricular/community-initiatives'}>
                            <i className="fa fa-caret-right " />
                            Community Initiatives
                          </Link>
                        </li>
                        <li>
                          <Link to={'/extra-curricular/gaisce'}>
                            <i className="fa fa-caret-right " />
                            Gaisce
                          </Link>
                        </li>
                        <li>
                          <Link to={'/extra-curricular/bank-of-ireland-program'}>
                            <i className="fa fa-caret-right " />
                            BOI Programme
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li>
                          <Link to={'/extra-curricular/debating'}>
                            <i className="fa fa-caret-right " />
                            Debating
                          </Link>
                        </li>
                        <li>
                          <Link to={'/parents/book-list-and-uniform'}>
                            <i className="fa fa-caret-right " />
                            Book List and Uniform
                          </Link>
                        </li>
                        <li>
                          <Link to={'/parents/code-of-behaviour'}>
                            <i className="fa fa-caret-right " />
                            Code of Behaviour
                          </Link>
                        </li>
                        <li>
                          <Link to={'/parents/disciplinary-procedure'}>
                            <i className="fa fa-caret-right " />
                            Disciplinary Procedure
                          </Link>
                        </li>
                        <li>
                          <Link to={'/parents/parents-association'}>
                            <i className="fa fa-caret-right " />
                            Parents Association
                          </Link>
                        </li>
                        <li>
                          <Link to={'/parents/policy-procedure'}>
                            <i className="fa fa-caret-right " />
                            Policy Procedure
                          </Link>
                        </li>
                        <li>
                          <Link to={'/enrolement'}>
                            <i className="fa fa-caret-right " />
                            Enrolement
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul>
                        <li>
                          <Link to={'/gallery'}>
                            <i className="fa fa-caret-right " />
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link to={'/contact'}>
                            <i className="fa fa-caret-right " />
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-col col-md-4 col-sm-12 contact">
                <div className="footer-col-inner">
                  <h3>Contact us</h3>
                  <div className="row">
                    <p className="tel col-md-12 col-sm-4 ">
                      <i className="fa fa-map-marker" />
                      Kilmacud Road Upper, Co. Dublin
                    </p>
                    <p className="tel col-md-12 col-sm-4 ">
                      <i className="fa fa-phone" />
                      01 2986539
                    </p>
                    <p className="email col-md-12 col-sm-4 ">
                      <i className="fa fa-envelope " />
                      <a href="mailto:stbenildusoffice@stbenilduscollege.com">stbenildusoffice@stbenilduscollege.com</a>
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
                <a href="http://www.bsmithdev.com/about" target="_blank">
                  {' '}
                  Brian Smith{' '}
                </a>
                and
                <a href="https://www.linkedin.com/in/harry-c-038681103/" target="_blank">
                  {' '}
                  Harry Condron
                </a>
              </small>
              <ul className="social pull-right col-md-6 col-sm-12 col-xs-12">
                <li>
                  <a href="https://twitter.com/benildusnews?lang=en&lang=en" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCJffDKtQt_kmmeRceEVbGUQ" target="_blank">
                    <i className="fa fa-youtube" />
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
