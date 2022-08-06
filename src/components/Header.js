import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav>
                <span className="left-header">
                    <img class="react-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="logo"/>
                    <h1> ReactFacts </h1>
                </span>

                <h1> React Course - Project 1 </h1>
            </nav>
        );
    }
}

export default Header; 