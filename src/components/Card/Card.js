import React from 'react';
import './Card.scss';

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="layout-com-box">
                {
                    this.props.cardHeadTit?<h1 className="layout-com-tit">{this.props.cardHeadTit}</h1>:''
                }
                {this.props.cardBody}
                {this.props.children}
            </div>
        )
    }
}

export default Card;