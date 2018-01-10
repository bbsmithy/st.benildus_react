
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class About extends Component {
render() {
    return (
    <div>
        <Navbar active={'About'}/>
        <Page title={'About'} current={'About'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default About;
            