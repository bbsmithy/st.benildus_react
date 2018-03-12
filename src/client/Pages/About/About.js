import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar active={"About"} />
        <Page title={"About"} current={"About"}>
          <h4>Our Unique History & Inspiration </h4>
          <p>
            Now part of the Le Céile Trust, the De la Salle Brothers founded the
            college in 1966. Their founder was St John Baptist De la Salle, born
            into a wealthy French family in 1651. Soon after his ordination in
            1678 he was moved by the plight of poor children and formed a
            community of Brothers to offer free education.
          </p>
          <p>
            Despite opposition, De la Salle and his Brothers established a
            network of free schools that taught a broader curriculum. He and his
            community went on to found teacher training colleges, technical and
            secondary schools. After his death in 1719 the work continued and
            spread throughout the world. In 1950, De la Salle was made the
            patron saint of all who work in education.
          </p>
          <p>
            The College is named after Saint Benildus. Born Pierre Romancon, he
            joined the Brothers in 1820. A devoted and deeply religious teacher,
            he spent most of his life working in a village in south eastern
            France where by day his school catered for students of all abilities
            and in the evening offered classes for adults. Brother Benildus who
            ‘did ordinary things extraordinarily well’, was made a saint in
            1967.
          </p>
          <br />
          <h4>Active in the Community</h4>
          <p>
            Today the College caters for more than 700 young men from 1st Year
            through to 6th Year. Set against the backdrop of the Dublin
            Mountains, the 25 acre college campus has extensive academic,
            sporting and recreational facilities, which benefit both the
            students and the wider local community.
          </p>
          <p>
            The unique traditions of our LaSallian heritage inspire our
            educational mission, which is to foster the intellectual, physical,
            social and moral development of each student. Academic achievement
            is stressed but participation in artistic and sporting activities is
            also strongly encouraged. The Irish language has a firm and secure
            place in the life of the school and many facets of Irish life,
            language and literature are studied and enjoyed.
          </p>
          <p>
            Our focus is on the holistic development of each of our students and
            the qualities of politeness, confidence and self esteem are core
            aspects of the educational programme here in the College.
          </p>
          <p>
            We’re particularly proud of the ongoing participation of all of our
            students in the Run for Life initiative. Special qualities of
            leadership, benevolence and social awareness are fostered through
            this student-led initiative, which has since 2002, raised more than
            €500,000 for various charities in Ireland.
          </p>
          <br />
          <h4>A Bright Future</h4>
          <p>
            St. Benildus College looks forward to celebrating our half-Centenary
            in 2016. This milestone offers us a chance to reflect on and
            celebrate all we have achieved – the huge sporting, cultural and
            academic successes of our students past and present, and the
            opportunities that we offer our students now and into the future.
          </p>
        </Page>
      </div>
    );
  }
}
export default About;
