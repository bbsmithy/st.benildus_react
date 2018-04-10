import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class PrincipalsWelcome extends Component {
  render() {
    return (
      <div>
        <Navbar active={"About"} />
        <Page
          title={"Welcome to St.Benildus College"}
          current={"Principals Welcome"}
        >
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-md-3">
              <img
                src={require(`../../../assets/teachers/Mr.Johnson.jpg`)}
                width="200px"
              />
            </div>
            <div className="col-md-8">
              <i style={{ fontSize: 20 }}>
                "Here you will find a learning environment for your son that is
                second to none – students and teachers working together in an
                atmosphere of mutual respect, toward shared goals."
              </i>
            </div>
          </div>

          <p>
            The standards we set for ourselves are very high, both in the
            classroom and outside of it. We expect that our students will strive
            to reach their potential, and we will be there for them every step
            of the way.
          </p>
          <p>
            The College is very well resourced, offering a broad academic
            curriculum and extensive calendar of co-curricular activities, to
            help develop young people who are academically confident and
            socially aware. We are always conscious of developing potential and
            nurturing a strong social conscience.
          </p>
          <p>
            The guiding spirit of our school is holistic and democratic. Every
            student is important, every voice will be heard. We operate out of a
            belief that fairness and honesty are the cornerstones of trust, and
            we draw strength and inspiration from our history and tradition as
            we nurture the citizens of tomorrow. We follow the guidance of Saint
            Benildus, who ‘did ordinary things extraordinarily well’.
          </p>
          <p>
            Thank you for visiting our website. Please stay a while, and get in
            touch if you have any questions.
          </p>
          <b>Martin Johnson</b>
        </Page>
      </div>
    );
  }
}
export default PrincipalsWelcome;
