
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class EnrolmentPolicy extends Component {
render() {
    return (
    <div>
        <Navbar active={'EnrolmentPolicy'}/>
        <Page title={'EnrolmentPolicy'} current={'EnrolmentPolicy'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default EnrolmentPolicy;
            