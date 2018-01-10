
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class StudyTips extends Component {
render() {
    return (
    <div>
        <Navbar active={'StudyTips'}/>
        <Page title={'StudyTips'} current={'StudyTips'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default StudyTips;
            