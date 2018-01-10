
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Sciences extends Component {
render() {
    return (
    <div>
        <Navbar active={'Sciences'}/>
        <Page title={'Sciences'} current={'Sciences'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default Sciences;
            