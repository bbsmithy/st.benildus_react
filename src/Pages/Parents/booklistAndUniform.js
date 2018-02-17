import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class BookListAndUniform extends Component {
  render() {
    return (
      <div>
        <Navbar active={"Parents"} />
        <Page title={"Book List And Uniform"} current={"Book List And Uniform"}>
          <h3>Junior (1st to 3rd Year) Uniform List</h3>
          <ul>
            <li>Grey School Sweater</li>
            <li>Grey Shirt</li>
            <li>Grey Trouser</li>
            <li>School Tie</li>
            <li>School Jacket</li>
            <li>Black School Shoes</li>
            <li>Sports Shorts</li>
            <li>Polo Shirt</li>
            <li>Sports Socks</li>
            <li>Tracksuit</li>
          </ul>
          <h3>Senior (4th to 6th Year) Uniform List</h3>
          <ul>
            <li>Black School Sweater</li>
            <li>White Shirt</li>
            <li>Black Trousers</li>
            <li>School Tie</li>
            <li>School Jacket</li>
            <li>Black School Shoes</li>
            <li>Sports Shorts</li>
            <li>Polo Shirt</li>
            <li>Sports Socks</li>
            <li>Tracksuit</li>
          </ul>
          <p>
            The official supplier of St. Benildus College uniform is  Colin
            David Menswear, Supervalu Shopping Centre, Ballinteer, Dublin 16.
          </p>
        </Page>
      </div>
    );
  }
}
export default BookListAndUniform;
