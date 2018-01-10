
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Core extends Component {
render() {
    return (
    <div>
        <Navbar active={'Core'}/>
        <Page title={'Core'} current={'Core'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default Core;
            