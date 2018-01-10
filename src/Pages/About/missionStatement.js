
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class MissionStatement extends Component {
render() {
    return (
    <div>
        <Navbar active={'MissionStatement'}/>
        <Page title={'MissionStatement'} current={'MissionStatement'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default MissionStatement;
            