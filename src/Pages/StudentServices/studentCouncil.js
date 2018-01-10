
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class StudentCouncil extends Component {
render() {
    return (
    <div>
        <Navbar active={'StudentCouncil'}/>
        <Page title={'StudentCouncil'} current={'StudentCouncil'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default StudentCouncil;
            