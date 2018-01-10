
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class EnrolmentForm extends Component {
render() {
    return (
    <div>
        <Navbar active={'EnrolmentForm'}/>
        <Page title={'EnrolmentForm'} current={'EnrolmentForm'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default EnrolmentForm;
            