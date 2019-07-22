import React from 'react';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Exception from '../../../components/Exception/Exception.js';
import Footer from '../../../components/layout/Footer/Footer.js';

class Exception403 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <ContentHead title="403无权访问"></ContentHead>
                <Exception imgUrl="../resouce/403.png" text="抱歉！您无权访问"></Exception>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default Exception403;