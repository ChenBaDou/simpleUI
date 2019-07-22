import React from 'react';
import Card from '../Card/Card.js';
import './exception.scss';

class Exception extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <div className="exception-box">
                        <img src={this.props.imgUrl}/>
                        <p>{this.props.text}</p>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Exception;