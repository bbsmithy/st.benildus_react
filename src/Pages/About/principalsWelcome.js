
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";

class PrincipalsWelcome extends Component {
render() {
    return (
    <div>
        <Navbar active={'PrincipalsWelcome'}/>
        <Page title={'PrincipalsWelcome'} current={'PrincipalsWelcome'}>
        <h1>Content here please</h1>
        </Page>
    </div>
    );
}
}
export default PrincipalsWelcome;
            