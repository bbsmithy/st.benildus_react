import React, { Component } from 'react';
// import TwitterTimeline from 'react-twitter-embedded-timeline';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import AppFeed from '../AppFeed';

export default class Page extends Component {
  renderPageContent = () => {
    if (this.props.fullWidth) {
      return (
        <div className="page-content">
          <div className="row page-row">
            <div className="col-md-12">{this.props.children}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="page-content">
        <div className="row page-row">
          <div className="col-md-9">{this.props.children}</div>
          <div className="col-md-3 col-sm-12">
            <AppFeed />

            <div style={{ height: '700px', overflow: 'scroll' }}>
              <a className="twitter-timeline" href="https://twitter.com/benildusnews">
                Tweets by benildusnews
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="content container">
          <div className="page-wrapper" style={{ minHeight: '700px' }}>
            {this.props.title && (
              <header className="page-heading clearfix">
                {this.props.archive && (
                  <label
                    className="button pull-left"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                      this.props.onBackPressArchive();
                    }}
                  >
                    <i className="fa fa-home" /> Home
                  </label>
                )}
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
            {this.renderPageContent()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
