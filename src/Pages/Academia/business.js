
            import React, { Component } from "react";
            import Navbar from "../components/Navbar/Navbar";
            import Page from "../components/Page/Page";

            class Home extends Component {
            render() {
                return (
                <div>
                    <Navbar />
                    <Page title={"Home"} current={"Home"}>
                    <h1>Hello</h1>
                    </Page>
                </div>
                );
            }
            }
            export default Home;
            