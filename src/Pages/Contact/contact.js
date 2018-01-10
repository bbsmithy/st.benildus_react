
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class Contact extends Component {
render() {
    return (
    <div>
        <Navbar active={'Contact'}/>
        <Page title={'Contact'} current={'Contact'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default Contact;
            