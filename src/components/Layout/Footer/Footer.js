import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="layout-footer">
                    <footer>
                        <div>{this.props.text}</div>
                    </footer>
                </div>)
    }
}

export default Footer;