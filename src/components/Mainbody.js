import React, { Component } from "react";

class Mainbody extends Component {
    render() {
        return (
        <div className="main-body">
            <h1> Reasons I want to learn React </h1>
            <span className="list-reason">
                <ul>
                    <li> It's fun </li>
                    <li> I want to make nice websites </li>
                    <li> I want to get better at web development </li>
                </ul>
            </span>
        </div>
        );
    };
}

export default Mainbody;