import React from "react";
import "./contentHead.scss";

class ContentHead extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content-head">
                {this.props.children}
                <h1 className="title">{this.props.title}</h1>
                {this.props.text && <p className="text">{this.props.text}</p>}
            </div>
        );
    }
}

export default ContentHead;
