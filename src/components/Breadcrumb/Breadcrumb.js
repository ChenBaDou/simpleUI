import React from "react";
import "./breadcrumb.scss";

class Breadcrumb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: Array.isArray(this.props.children)
                ? this.props.children
                : [this.props.children]
        };
    }
    
    render() {
        return (
            <div className="breadcrumb-box">
                {this.state.items.map((v, i) => {
                    return (
                        <span key={v + i}>
                            {v}
                            <span className="breadcrumb-separator">
                                {this.state.items.length > (i +1 ) && this.props.separator}
                            </span>
                        </span>
                    );
                })}
            </div>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => (
        <span className="breadcrumb-link">{this.props.children}</span>
    );
}

Breadcrumb.Item = Item;

export default Breadcrumb;
