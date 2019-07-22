import React from "react";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Select from "../../../components/Select/Select";
const Option = Select.Option;

class SelectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleClick = data => {
        this.setState({
            value: data
        });
        console.log(data);
    };

    render() {
        return (
            <div>
                <ContentHead title="Select 组件" />
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="Select 单选-有默认值">
                            <div className="layout-no">
                                <Select
                                    // mode="multiple"
                                    // labelInValue
                                    defaultValue="测试1"
                                    placeholder="请选择"
                                    onChange={this.handleClick}
                                >
                                    <Option disabled value="ds1">
                                        测试1
                                    </Option>
                                    <Option value="ds2">测试2</Option>
                                    <Option value="ds3">测试3</Option>
                                    <Option value="ds4">测试4</Option>
                                    <Option value="ds5">测试5</Option>
                                </Select>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="Select 多选- 有默认值">
                            <div className="layout-no">
                                <Select
                                    mode="multiple"
                                    labelInValue
                                    defaultValue={["测试1", "测试2"]}
                                    placeholder="测试"
                                    onChange={this.handleClick}
                                >
                                    <Option value="ds1">
                                        测试1
                                    </Option>
                                    <Option value="ds2">测试2</Option>
                                    <Option value="ds3">测试3</Option>
                                    <Option value="ds4">测试4</Option>
                                    <Option value="ds5">测试5</Option>
                                </Select>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="Select 单选-无默认值">
                            <div className="layout-no">
                                <Select
                                    // labelInValue
                                    placeholder="请选择"
                                    onChange={this.handleClick}
                                >
                                    <Option disabled value="ds1">
                                        测试1
                                    </Option>
                                    <Option value="ds2">测试2</Option>
                                    <Option value="ds3">测试3</Option>
                                    <Option value="ds4">测试4</Option>
                                    <Option value="ds5">测试5</Option>
                                </Select>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="Select 多选-无默认值">
                            <div className="layout-no">
                                <Select
                                    mode="multiple"
                                    placeholder="请选择"
                                    onChange={this.handleClick}
                                >
                                    <Option disabled value="ds1">
                                        测试1
                                    </Option>
                                    <Option value="ds2">测试2</Option>
                                    <Option value="ds3">测试3</Option>
                                    <Option value="ds4">测试4</Option>
                                    <Option value="ds5">测试5</Option>
                                </Select>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default SelectPage;