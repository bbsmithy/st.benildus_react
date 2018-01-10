
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Debating extends Component {
render() {
    return (
    <div>
        <Navbar active={'Debating'}/>
        <Page title={'Debating'} current={'Debating'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default Debating;
            