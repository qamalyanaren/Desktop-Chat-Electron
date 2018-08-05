import React from "react";
import PropTypes from "prop-types";
import ChatPane from "./ChatPane.jsx";
import Welcome from "./Welcome.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default class App extends React.Component {
    render() {
        const name = "Անուն";
        return (
            <div className="window">
                <Header></Header>
                <div className="window-content">
                    {name ?
                        (<ChatPane
                        />) :
                        (<Welcome/>)}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}