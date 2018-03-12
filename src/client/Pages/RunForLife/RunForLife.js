
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class RunForLife extends Component {
render() {
    return (
    <div>
        <Navbar active={'RunForLife'}/>
        <Page title={'RunForLife'} current={'RunForLife'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default RunForLife;
            