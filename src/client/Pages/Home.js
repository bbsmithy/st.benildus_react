import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Page from '../components/Page/Page';
import Footer from '../components/Footer/Footer';
import AppFeed from '../components/AppFeed';
import Carousel from '../components/Carousel/Carousel';
import VideoCarousel from '../components/Carousel/VideoCarousel';
import { Link } from 'react-router-dom';

import TwitterTimeline from 'react-twitter-embedded-timeline';
import Iframe from 'react-iframe';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar active={'Home'} />
        {/* <div
          className={"shadow"}
          style={{ padding: 0, marginLeft: 55, marginRight: 55 }}
        >
          
        </div> */}
        <div
          className="container shadow"
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0
          }}
        >
          <Carousel />
        </div>
        <div className="content container" style={{ paddingTop: 0 }}>
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
              <div className="row">
                <section class="promo box">
                  <div className="col-md-8">
                    <h1 className="section-heading">Welcome to St.Benildus College</h1>
                    <div className="row">
                      <div className="col-md-6">
                        <p style={{ fontSize: 14 }}>
                          At St. Benildus College you will find a learning environment for your son that is second to
                          none – students and teachers working together in an atmosphere of mutual respect, toward
                          shared goals. The standards we set for ourselves are very high, both in the classroom and
                          outside of it. We expect that our students will strive to reach their potential, and we will
                          be there for them every step of the way.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p style={{ fontSize: 14 }}>
                          The guiding spirit of our school is holistic and democratic. Every student is important, every
                          voice will be heard. We operate out of a belief that fairness and honesty are the cornerstones
                          of trust, and we draw strength and inspiration from our history and tradition as we nurture
                          the citizens of tomorrow. We follow the guidance of Saint Benildus, who ‘did ordinary things
                          extraordinarily well’. Thank you for visiting our website. Please stay a while, and get in
                          touch if you have any questions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h1 className="section-heading">Video Tour</h1>
                    <VideoCarousel />
                    {/* <Link to="gallery/archive" class="btn btn-cta shadow">
                      <i class="fa fa-picture-o" />Celebrating 50 Years
                    </Link> */}
                  </div>
                </section>
              </div>

              <div className="row page-row">
                <div className="col-md-9">
                  <Link to="/archive">
                    <div className="button row" style={{ marginBottom: 20, marginLeft: 3, marginRight: 3 }}>
                      <div style={{ paddingVertical: 30 }} className="col-md-3 col-sm-12">
                        <img
                          src={require('../../assets/benildus-college-archive.jpg')}
                          height={'100%'}
                          style={{ alignSelf: 'center', width: '100%' }}
                        />
                      </div>
                      <div className="col-md-9 col-sm-12">
                        <div style={{ paddingTop: 25 }}>
                          <h2 className="section-heading" style={{ display: 'inline-block' }}>
                            St.Benildus College Archive
                          </h2>
                          <span
                            style={{ display: 'inline-block', padding: 20, fontSize: 20 }}
                            className="glyphicon glyphicon-chevron-right pull-right d-sm-none"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="row page-row">
                    <div className="col-md-12">
                      {/* <section>
                        <h1 class="section-heading text-highlight">
                          <span class="line">Principals Welcome</span>
                        </h1>
                        <div class="section-content" style={{ padding: 0 }}>
                          <img
                            class="img-responsive img-rounded col-md-2 col-sm-12"
                            src="http://www.stbenilduscollege.com/wp-content/uploads/2016/10/Mr.-Johnson.jpg"
                            alt=""
                          />
                          <div class="details col-md-10 col-sm-12">
                            <p>
                              The standards we set for ourselves are very high,
                              both in the classroom and outside of it. We expect
                              that our students will strive to reach their
                              potential, and we will be there for them every
                              step of the way. The College is very well
                              resourced, offering a broad academic curriculum
                              and extensive calendar of co-curricular
                              activities, to help develop young people who are
                              academically confident and socially aware. We are
                              always conscious of developing potential and
                              nurturing a strong social conscience. The guiding
                              spirit of our school is holistic and democratic.
                              Every student is important, every voice will be
                              heard. We operate out of a belief that fairness
                              and honesty are the cornerstones of trust, and we
                              draw strength and inspiration from our history and
                              tradition as we nurture the citizens of tomorrow.
                              We follow the guidance of Saint Benildus, who ‘did
                              ordinary things extraordinarily well’. Thank you
                              for visiting our website. Please stay a while, and
                              get in touch if you have any questions. Martin
                              Johnson
                            </p>
                          </div>
                        </div>
                      </section> */}
                      <section>
                        <h1 class="section-heading text-highlight">
                          <span class="line">School Calender</span>
                        </h1>
                        <div class="section-content" style={{ padding: 0 }}>
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
                      </section>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h1 class="section-heading text-highlight">
                    <span class="line">Twitter</span>
                  </h1>
                  <div style={{ height: '700px', overflow: 'scroll' }}>
                    <a className="twitter-timeline" href="https://twitter.com/benildusnews">
                      Tweets by benildusnews
                    </a>
                  </div>
                  <AppFeed />
                  {/* <h1 class="section-heading text-highlight">
                    <span class="line">App Feed</span>
                  </h1>
                  <Iframe
                    url="https://uniqueschoolapp.ie/site/notifications/school_id/52"
                    width="100%"
                    height="500px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  /> */}
                </div>
                {/* <div className="col-md-3">
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
                </div> */}
                {/* <div className="col-md-6">
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
                  <section>
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
                  </section>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
