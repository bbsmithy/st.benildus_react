import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Page from "../components/Page/Page";
import Carousel from "../components/Carousel/Carousel";
import VideoCarousel from "../components/Carousel/VideoCarousel";

import TwitterTimeline from "react-twitter-embedded-timeline";
import Iframe from "react-iframe";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Home"} />
        <div
          className={"shadow"}
          style={{ padding: 0, marginLeft: 55, marginRight: 55 }}
        >
          <Carousel />
        </div>
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
                    <p style={{ fontSize: 14 }}>
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
                <div className="col-md-3">
                  <section class="testimonials">
                    <h1 class="section-heading text-highlight">
                      <span class="line"> Testimonials</span>
                    </h1>
                    <div class="carousel-controls">
                      <a
                        class="prev"
                        href="#testimonials-carousel"
                        data-slide="prev"
                      >
                        <i class="fa fa-caret-left" />
                      </a>
                      <a
                        class="next"
                        href="#testimonials-carousel"
                        data-slide="next"
                      >
                        <i class="fa fa-caret-right" />
                      </a>
                    </div>
                    <div class="section-content">
                      <div
                        id="testimonials-carousel"
                        class="testimonials-carousel carousel slide"
                      >
                        <div class="carousel-inner">
                          <div class="item active">
                            <blockquote class="quote">
                              <p>
                                <i class="fa fa-quote-left" />I’m very happy
                                interdum eget ipsum. Nunc pulvinar ut nulla eget
                                sollicitudin. In hac habitasse platea dictumst.
                                Integer mattis varius ipsum, posuere posuere est
                                porta vel. Integer metus ligula, blandit ut
                                fermentum a, rhoncus in ligula. Duis luctus.
                              </p>
                            </blockquote>
                            <div class="row">
                              <p class="people col-md-9 col-sm-3 col-xs-8">
                                <span class="name">Marissa Spencer</span>
                                <br />
                                <span class="title">Curabitur commodo</span>
                              </p>
                              <img
                                class="profile col-md-2"
                                src="assets/images/testimonials/profile-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="item">
                            <blockquote class="quote">
                              <p>
                                <i class="fa fa-quote-left" /> I'm very pleased
                                commodo gravida ultrices. Sed massa leo, aliquet
                                non velit eu, volutpat vulputate odio. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus. Suspendisse porttitor metus eros, ut
                                fringilla nulla auctor a.
                              </p>
                            </blockquote>
                            <div class="row">
                              <p class="people col-md-9 col-sm-3 col-xs-8">
                                <span class="name">Marco Antonio</span>
                                <br />
                                <span class="title"> Gravida ultrices</span>
                              </p>
                              <img
                                class="profile col-md-2"
                                src="assets/images/testimonials/profile-2.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="item">
                            <blockquote class="quote">
                              <p>
                                <i class="fa fa-quote-left" /> I'm delighted
                                commodo gravida ultrices. Sed massa leo, aliquet
                                non velit eu, volutpat vulputate odio. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus. Suspendisse porttitor metus eros, ut
                                fringilla nulla auctor a.
                              </p>
                            </blockquote>
                            <div class="row">
                              <p class="people col-md-9 col-sm-3 col-xs-8">
                                <span class="name">Kate White</span>
                                <br />
                                <span class="title"> Gravida ultrices</span>
                              </p>
                              <img
                                class="profile col-md-2"
                                src="assets/images/testimonials/profile-3.png"
                                alt=""
                              />
                            </div>
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
                      <div class="event-item">
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
                      </a>{" "}
                    </div>
                  </section>
                </div>
                <div className="col-md-6">
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
                      <VideoCarousel />
                    </div>
                  </section>
                  <section>
                    <h1 class="section-heading text-highlight">
                      <span class="line">Principals Welcome</span>
                    </h1>
                    <div class="section-content" style={{ padding: 0 }}>
                      <figure class="thumb col-md-4 col-sm-4 col-xs-6">
                        <img
                          class="img-responsive"
                          src="http://www.stbenilduscollege.com/wp-content/uploads/2015/05/Principal-Martin-Johnson-e1432549080194-150x150.jpg"
                          alt=""
                        />
                      </figure>
                      <div class="details col-md-8 col-sm-8 col-xs-6">
                        <p>
                          The standards we set for ourselves are very high, both
                          in the classroom and outside of it. We expect that our
                          students will strive to reach their potential, and we
                          will be there for them every step of the way. The
                          College is very well resourced, offering a broad
                          academic curriculum and extensive calendar of
                          co-curricular activities, to help develop young people
                          who are academically confident and socially aware. We
                          are always conscious of developing potential and
                          nurturing a strong social conscience. The guiding
                          spirit of our school is holistic and democratic. Every
                          student is important, every voice will be heard. We
                          operate out of a belief that fairness and honesty are
                          the cornerstones of trust, and we draw strength and
                          inspiration from our history and tradition as we
                          nurture the citizens of tomorrow. We follow the
                          guidance of Saint Benildus, who ‘did ordinary things
                          extraordinarily well’. Thank you for visiting our
                          website. Please stay a while, and get in touch if you
                          have any questions. Martin Johnson
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* <section>
                    <div>
                      <Iframe
                        url="https://calendar.google.com/calendar/embed?src=st.benildus.calendar%40gmail.com&amp;ctz=Europe/Dublin"
                        width="100%"
                        height="550"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        allowFullScreen
                      />
                    </div>
                  </section> */}
                </div>
                <div className="col-md-3">
                  <h1 class="section-heading text-highlight">
                    <span class="line">Twitter</span>
                  </h1>
                  <div>
                    <TwitterTimeline
                      widgetId="675940410338996224"
                      chrome="noborders noheader"
                      limit={3}
                    />
                  </div>
                  <h1 class="section-heading text-highlight">
                    <span class="line">App Feed</span>
                  </h1>
                  <Iframe
                    url="http://uniqueschoolapp.ie/site/notifications/school_id/52"
                    width="100%"
                    height="400px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
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
