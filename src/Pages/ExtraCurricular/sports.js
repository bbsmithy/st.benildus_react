
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Sports extends Component {
render() {
    return (
    <div>
        <Navbar active={'Sports'}/>
        <Page title={'Sports'} current={'Sports'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default Sports;
            