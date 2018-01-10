
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class ParentsAssoc extends Component {
render() {
    return (
    <div>
        <Navbar active={'ParentsAssoc'}/>
        <Page title={'ParentsAssoc'} current={'ParentsAssoc'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default ParentsAssoc;
            