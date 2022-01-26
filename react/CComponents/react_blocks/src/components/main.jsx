import React, { Component } from "react";
import Subcontents from './subcontents';
import Advertisement from './advertisement';


class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="flex">
                    <Subcontents />
                    <Subcontents />
                    <Subcontents />
                </div>
                <Advertisement />
            </div>);
    }
}

export default Main;