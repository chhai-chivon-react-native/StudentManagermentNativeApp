/**
 * Created by chhaichivon on 8/30/17.
 */
import React from "react";
import App from "./app/App";

export default class App1 extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    render() {
        return <App />;
    }
}