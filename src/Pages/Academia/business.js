
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Business extends Component {
render() {
    return (
    <div>
        <Navbar active={'Business'}/>
        <Page title={'Business'} current={'Business'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default Business;
            