import React, { Component } from "react";

export default class Header extends Component {

    render() {
        const { title, description } = this.props;
        return (
            <>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </>
        )
    }
}