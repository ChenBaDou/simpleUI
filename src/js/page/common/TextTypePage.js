import React from "react";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Button from "../../../components/Button/Button";
import TextType from '../../../components/TextType/TextType';


class TextTypePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <ContentHead title="TextType 文字样式" />
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="文字样式">
                            <div className="layout-no">
                                <ul>
                                    <li>
                                        <span style={{color:'#3FA9FF'}}>特级标题 20px #262626 加粗</span>
                                        <TextType type="tax">
                                            啥的老公撒娇了的广东省
                                        </TextType>
                                    </li>
                                    <li>
                                        <span style={{color:'#3FA9FF'}}>一级标题 16px #262626 加粗</span>
                                        <TextType type="first">
                                            啥的老公撒娇了的广东省
                                        </TextType>
                                    </li>
                                    <li>
                                        <span style={{color:'#3FA9FF'}}>二级标题 14px #262626 加粗</span>
                                        <TextType type="two">
                                            啥的老公撒娇了的广东省
                                        </TextType>
                                    </li>
                                    <li>
                                        <span style={{color:'#3FA9FF'}}>14px #595959 行高22px</span>
                                        <TextType color="#595959" fontSize="14px" fontWeight="400" lineHeight="22px">
                                            啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，
                                            三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，
                                            阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。
                                        </TextType>
                                    </li>
                                    <li>
                                        <span style={{color:'#3FA9FF'}}>14px #8C8C8C 行高22px</span>
                                        <TextType color="#8C8C8C" fontSize="14px" fontWeight="400" lineHeight="22px">
                                            啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，
                                            三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，
                                            阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。
                                        </TextType>
                                    </li>
                                    <li>
                                        <span style={{color:'#3FA9FF'}}>默认 14px #262626</span>
                                        <TextType>
                                            啥的老公撒娇了的广东省
                                        </TextType>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default TextTypePage;