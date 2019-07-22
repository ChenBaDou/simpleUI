import React from "react";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Result from "../../../components/Result/Result";
import Footer from "../../../components/layout/Footer/Footer.js";

class Fail extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ContentHead title="提交失败"></ContentHead>
                <Result imgUrl="../resouce/fail.png" text="提交失败" resultTxt="请核对并修改以下信息后，再重新提交。"></Result>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default Fail;