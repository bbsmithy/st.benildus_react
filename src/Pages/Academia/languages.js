
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Languages extends Component {
render() {
    return (
    <div>
        <Navbar active={'Languages'}/>
        <Page title={'Languages'} current={'Languages'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default Languages;
            