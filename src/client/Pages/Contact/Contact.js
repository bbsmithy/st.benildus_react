import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";
import Iframe from "react-iframe";

const StaffMember = props => {
  return (
    <div class="row page-row">
      <figure class="thumb col-md-3 col-sm-4 col-xs-12">
        <img
          class="img-responsive"
          src={require(`../../../assets/teachers/${props.src}`)}
          alt=""
        />
      </figure>
      <div
        class="details col-md-5 col-sm-8 col-xs-12"
        style={{ marginTop: 10 }}
      >
        <h3 class="title">{props.name}</h3>
        <h4>{props.title}</h4>
        <h5>
          Email: <a href={`mailto:${props.email}`}>{props.email}</a>
        </h5>
      </div>
    </div>
  );
};

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
          <div class="team-wrapper col-md-12">
            <h2>Staff Directory</h2>
            <br />
            <StaffMember
              name={"Mr. Martin Johnson"}
              src={"Mr.Johnson.jpg"}
              email={"mjohnson@stbenilduscollege.com"}
              title={"Principal"}
            />
            <StaffMember
              name={"Mr. Oisín Mac Eoin"}
              src={"Mr.McEoin.jpg"}
              email={"omaceoin@stbenilduscollege.com"}
              title={"Deputy Principal"}
            />
            <StaffMember
              name={"Ms. Mary Bohan"}
              src={"Ms.Bohan.jpg"}
              email={"mbrohan@stbenilduscollege.com"}
              title={"Deputy Principal"}
            />
            <StaffMember
              name={"Dr. Naomi Lowe"}
              src={"Dr.Lowe.jpg"}
              email={"nlowe@stbenilduscollege.com"}
              title={"Year Head - 1st Year"}
            />
            <StaffMember
              name={"Mr. Brendan Cahill"}
              src={"Mr.Cahill.jpg"}
              email={"bcahill@stbenilduscollege.com"}
              title={"Year Head - 2nd Year"}
            />
            <StaffMember
              name={"Mr. Brendan Hoyne"}
              src={"Mr.Hoyne.jpg"}
              email={"bhoyne@stbenilduscollege.com"}
              title={"Year Head - 3rd Year"}
            />
            <StaffMember
              name={"Ms. Ann Fitzpatrick"}
              src={"Ms.Fitzpatrick.jpg"}
              email={"afitzpatrick@stbenilduscollege.com"}
              title={"Year Head - 4th Year"}
            />
            <StaffMember
              name={"Ms. Sandra Downey"}
              src={"Ms.Downey.jpg"}
              email={"sdowney@stbenilduscollege.com"}
              title={"Year Head - 5th Year"}
            />
            <StaffMember
              name={"Mr. Pat Fahy"}
              src={"Mr.Fahy.jpg"}
              email={"pfahy@stbenilduscollege.com"}
              title={"Year Head - 6th Year"}
            />
            <StaffMember
              name={"Ms. Mary Molloy"}
              src={"Ms.Molloy.jpg"}
              email={"mmolloy@stbenilduscollege.com"}
              title={"Guidance Counsellor"}
            />
            <StaffMember
              name={"Ms. Ann Keaveny"}
              src={"Ann-Keaveny.jpg"}
              email={"stbenildusoffice@stbenilduscollege.com"}
              title={"School Secretary"}
            />
          </div>
        </Page>
      </div>
    );
  }
}
export default Contact;
