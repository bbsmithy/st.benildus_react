import React, { Component } from "react";
import TwitterTimeline from "react-twitter-embedded-timeline";

export default class Page extends Component {
  render() {
    return (
      <div className="content container">
        <div className="page-wrapper">
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
              <div className="col-md-3">
                <TwitterTimeline
                  widgetId="675940410338996224"
                  chrome="noborders noheader"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
