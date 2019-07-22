import React from "react";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Result from "../../../components/Result/Result";
import Footer from "../../../components/layout/Footer/Footer.js";

class Committing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ContentHead title="提交中"></ContentHead>
                <Result imgUrl="../resouce/success.png" text="提交中" resultTxt="页面提交中，请耐心等待"></Result>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default Committing;