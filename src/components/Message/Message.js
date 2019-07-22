import React from 'react';
import './message.scss';
class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`message-box ${this.props.type}`}>
                {
                    this.props.state ==='show' &&
                    <p>
                        {
                            this.props.type==='error'?<i className="icon icon-guanbishibaimianxing"></i>:<i className="icon icon-chenggongmianxing"></i>
                        }
                        {this.props.content}
                    </p>
                }
            </div>
        )
    }
}
export default Message;