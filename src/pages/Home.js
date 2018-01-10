import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Page from "../components/Page/Page";
import TwitterTimeline from "react-twitter-embedded-timeline";
import Iframe from "react-iframe";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Home"} />
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
                <section class="promo box box-dark">
                  <div class="col-md-9">
                    <h1 class="section-heading">
                      Welcome to St.Benildus College
                    </h1>
                    <p>
                      At St. Benildus College you will find a learning
                      environment for your son that is second to none – students
                      and teachers working together in an atmosphere of mutual
                      respect, toward shared goals. The standards we set for
                      ourselves are very high, both in the classroom and outside
                      of it. We expect that our students will strive to reach
                      their potential, and we will be there for them every step
                      of the way.
                    </p>
                  </div>
                  <div class="col-md-3">
                    <a class="btn btn-cta shadow" href="#">
                      <i class="fa fa-picture-o" />Celebrating 50 Years
                    </a>
                  </div>
                </section>
              </div>

              <div className="row page-row">
                <div className="col-md-9">
                  <section class="video">
                    <h1 class="section-heading text-highlight">
                      <span class="line">Video Tour</span>
                    </h1>
                    <div class="carousel-controls">
                      <a class="prev" href="#videos-carousel" data-slide="prev">
                        <i class="fa fa-caret-left" />
                      </a>
                      <a class="next" href="#videos-carousel" data-slide="next">
                        <i class="fa fa-caret-right" />
                      </a>
                    </div>
                    <div class="section-content">
                      <div
                        id="videos-carousel"
                        class="videos-carousel carousel slide"
                      >
                        <div class="carousel-inner">
                          <div class="item active">
                            <iframe
                              class="video-iframe"
                              src="https://www.youtube.com/embed/WdtIGmlmOdg?rel=0&amp;wmode=transparent"
                              frameborder="0"
                              allowfullscreen=""
                            />
                          </div>

                          <div class="item">
                            <iframe
                              class="video-iframe"
                              src="https://www.youtube.com/embed/Ew2pUx3cF_0?rel=0&amp;wmode=transparent"
                              frameborder="0"
                              allowfullscreen=""
                            />
                          </div>

                          <div class="item">
                            <iframe
                              class="video-iframe"
                              src="https://www.youtube.com/embed/eLGjFvIMWSI?rel=0&amp;wmode=transparent"
                              frameborder="0"
                              allowfullscreen=""
                            />
                          </div>

                          <div class="item">
                            <iframe
                              class="video-iframe"
                              src="https://www.youtube.com/embed/fW8DIlitjko?rel=0&amp;wmode=transparent"
                              frameborder="0"
                              allowfullscreen=""
                            />
                          </div>

                          <div class="item">
                            <iframe
                              class="video-iframe"
                              src="https://www.youtube.com/embed/gvcHIHPTh1k?rel=0&amp;wmode=transparent"
                              frameborder="0"
                              allowfullscreen=""
                            />
                          </div>
                          <div class="item">
                            <iframe
                              class="video-iframe"
                              src="https://www.youtube.com/embed/aqCv4u8T8tg?rel=0&amp;wmode=transparent"
                              frameborder="0"
                              allowfullscreen=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="events">
                    <h1 class="section-heading text-highlight">
                      <span class="line">Events</span>
                    </h1>
                    <div class="section-content">
                      {/* <div class="event-item">
                        <p class="date-label">
                          <span class="month">FEB</span>
                          <span class="date-number">18</span>
                        </p>
                        <div class="details">
                          <h2 class="title">Open Day</h2>
                          <p class="time">
                            <i class="fa fa-clock-o" />10:00am - 18:00pm
                          </p>
                          <p class="location">
                            <i class="fa fa-map-marker" />East Campus
                          </p>
                        </div>
                      </div>
                      <div class="event-item">
                        <p class="date-label">
                          <span class="month">SEP</span>
                          <span class="date-number">06</span>
                        </p>
                        <div class="details">
                          <h2 class="title">E-learning at College Green</h2>
                          <p class="time">
                            <i class="fa fa-clock-o" />10:00am - 16:00pm
                          </p>
                          <p class="location">
                            <i class="fa fa-map-marker" />Learning Center
                          </p>
                        </div>
                      </div>
                      <div class="event-item">
                        <p class="date-label">
                          <span class="month">JUN</span>
                          <span class="date-number">23</span>
                        </p>
                        <div class="details">
                          <h2 class="title">Career Fair</h2>
                          <p class="time">
                            <i class="fa fa-clock-o" />09:45am - 16:00pm
                          </p>
                          <p class="location">
                            <i class="fa fa-map-marker" />Library
                          </p>
                        </div>
                      </div>
                      <div class="event-item">
                        <p class="date-label">
                          <span class="month">May</span>
                          <span class="date-number">17</span>
                        </p>
                        <div class="details">
                          <h2 class="title">Science Seminar</h2>
                          <p class="time">
                            <i class="fa fa-clock-o" />14:00pm - 18:00pm
                          </p>
                          <p class="location">
                            <i class="fa fa-map-marker" />Library
                          </p>
                        </div>
                      </div>
                      <a class="read-more" href="events.html">
                        All events<i class="fa fa-chevron-right" />
                      </a> */}
                      <Iframe
                        url="https://calendar.google.com/calendar/embed?src=st.benildus.calendar%40gmail.com&amp;ctz=Europe/Dublin"
                        width="100%"
                        height="700px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        allowFullScreen
                      />
                    </div>
                  </section>
                </div>
                <div className="col-md-3">
                  <h1 class="section-heading text-highlight">
                    <span class="line">App Feed</span>
                  </h1>
                  <Iframe
                    url="http://uniqueschoolapp.ie/site/notifications/school_id/52"
                    width="100%"
                    height="700px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
                  <h1 class="section-heading text-highlight">
                    <span class="line">Twitter</span>
                  </h1>
                  <div>
                    <TwitterTimeline
                      style={{ height: "500px" }}
                      widgetId="675940410338996224"
                      chrome="noborders noheader"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
