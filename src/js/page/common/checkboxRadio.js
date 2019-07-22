import React from "react";
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import Button from "../../../components/Button/Button.js";
import CheckBox from "../../../components/CheckBox/CheckBox";
import Radio from "../../../components/Radio/Radio";

const CheckBoxGroup = CheckBox.CheckBoxGroup;
const RadioGroup = Radio.RadioGroup;


class CheckboxRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxData: {
                disable: false,
                checked: true
            },
            checkboxGroupData: {
                disable: false,
                options: [{
                    label: "选项一",
                    value: 1
                }, {
                    label: "选项二",
                    value: 2
                }],
                value: [1]
            },
            radioData: {
                disable: false,
                checked: false
            },
            radioGroupData: {
                disable: false,
                options: [{
                    label: "选项一",
                    value: 1
                }, {
                    label: "选项二",
                    value: 2
                }],
                value: 1
            },
            radioGroupBtnData: {
                disable: false,
                options: [{
                    label: "选项一",
                    value: 1
                }, {
                    label: "选项二",
                    value: 2
                }, {
                    label: "选项三",
                    value: 3
                }],
                value: 1
            }
        };
    }

    checkboxChange(val, ele) {
        this.state.checkboxData.checked = val;
        this.setState({
            checkboxData: this.state.checkboxData
        });
    }

    checkboxDisableToggle() {
        this.state.checkboxData.disable = !this.state.checkboxData.disable;

        this.setState({
            checkboxData: this.state.checkboxData
        })
    }

    checkboxGroupChange(val) {
        this.state.checkboxGroupData.value = val;
        this.setState({
            checkboxGroupData: this.state.checkboxGroupData
        });
    }

    checkboxGroupDisableToggle() {
        this.state.checkboxGroupData.disable = !this.state.checkboxGroupData.disable;

        this.setState({
            checkboxGroupData: this.state.checkboxGroupData
        })
    }



    radioChange(val, ele) {
        this.state.radioData.checked = val;
        this.setState({
            radioData: this.state.radioData
        });
    }

    radioDisableToggle() {
        this.state.radioData.disable = !this.state.radioData.disable;

        this.setState({
            radioData: this.state.radioData
        })
    }

    radioGroupChange(val, ele) {
        this.state.radioGroupData.value = val;
        this.setState({
            radioGroupData: this.state.radioGroupData
        });
    }

    radioGroupDisableToggle() {
        this.state.radioGroupData.disable = !this.state.radioGroupData.disable;

        this.setState({
            radioGroupData: this.state.radioGroupData
        })
    }

    radioGroupBtnChange(val, ele) {
        this.state.radioGroupBtnData.value = val;
        this.setState({
            radioGroupBtnData: this.state.radioGroupBtnData
        });
    }

    radioGroupBtnDisableToggle() {
        this.state.radioGroupBtnData.disable = !this.state.radioGroupBtnData.disable;

        this.setState({
            radioGroupBtnData: this.state.radioGroupBtnData
        })
    }

    render() {
        return (
            <div>
                <ContentHead title="单选 多选" />

                <Row>
                    <Col span="12">
                        <Card cardHeadTit="CheckBox 选择框">
                            <div className="layout-no">
                                <Button
                                    event={(e) => this.checkboxDisableToggle(e)}
                                    // event={this.checkboxDisableToggle.bind(this)}
                                    type={'primary'}
                                >启用、禁用</Button>

                                <br/>

                                <CheckBox
                                    checked={this.state.checkboxData.checked}
                                    disabled={this.state.checkboxData.disable}
                                    onChange={this.checkboxChange.bind(this)}
                                >选择</CheckBox>

                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="CheckBoxGroup 选择框">
                            <div className="layout-no">
                                <div>value: {this.state.checkboxGroupData.value}</div>

                                <Button
                                    event={this.checkboxGroupDisableToggle.bind(this)}
                                    type={'primary'}
                                >启用、禁用</Button>

                                <CheckBoxGroup
                                    options={this.state.checkboxGroupData.options}
                                    value={this.state.checkboxGroupData.value}
                                    disabled={this.state.checkboxGroupData.disable}
                                    onChange={this.checkboxGroupChange.bind(this)}
                                ></CheckBoxGroup>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col span="12">
                        <Card cardHeadTit="Radio 选择框">
                            <div className="layout-no">
                                <Button
                                    event={this.radioDisableToggle.bind(this)}
                                    type={'primary'}
                                >启用、禁用</Button>

                                <br/>

                                <Radio
                                    checked={this.state.radioData.checked}
                                    disabled={this.state.radioData.disable}
                                    onChange={this.radioChange.bind(this)}
                                >选择</Radio>

                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit='Radio 组 单选项'>
                            <div className="layout-no">

                                <div>value: {this.state.radioGroupData.value}</div>

                                <Button
                                    event={this.radioGroupDisableToggle.bind(this)}
                                    type={'primary'}
                                >启用、禁用</Button>

                                <RadioGroup
                                    options={this.state.radioGroupData.options}
                                    value={this.state.radioGroupData.value}
                                    disabled={this.state.radioGroupData.disable}
                                    onChange={this.radioGroupChange.bind(this)}
                                ></RadioGroup>
                            </div>
                        </Card>
                    </Col>

                    <Col span="12">
                        <Card cardHeadTit='Radio 组 单选项'>
                            <div className="layout-no">

                                <div>value: {this.state.radioGroupBtnData.value}</div>

                                <Button
                                    event={this.radioGroupBtnDisableToggle.bind(this)}
                                    type={'primary'}
                                >启用、禁用</Button>

                                <RadioGroup
                                    options={this.state.radioGroupBtnData.options}
                                    value={this.state.radioGroupBtnData.value}
                                    disabled={this.state.radioGroupBtnData.disable}
                                    onChange={this.radioGroupBtnChange.bind(this)}
                                    button
                                ></RadioGroup>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default CheckboxRadio;