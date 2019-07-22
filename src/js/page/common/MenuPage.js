import React from "react";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Menu from '../../../components/Layout/Menu/Menu';
import Radio from "../../../components/Radio/Radio";

const RadioGroup = Radio.RadioGroup;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;

class MenuPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            radioGroupData: {
                disable: false,
                options: [{
                    label: "白色底",
                    value: 'normal'
                }, {
                    label: "暗黑底",
                    value: 'dark'
                }],
                value: 'normal'
            },
            radioGroupData2: {
                disable: false,
                options: [{
                    label: "展开",
                    value: 'show'
                }, {
                    label: "缩起",
                    value: 'hide'
                }],
                value: 'hide'
            },
        };
    }

    radioGroupChange(val, ele) {
        this.state.radioGroupData.value = val;
        this.setState({
            radioGroupData: this.state.radioGroupData,
        });
    }
    radioGroupChange2(val, ele) {
        this.state.radioGroupData2.value = val;
        this.setState({
            radioGroupData2: this.state.radioGroupData2,
        });
    }

    handleClick(e) {
        // console.log(e.target);
    }

    render() {
        return (
            <div>
                <ContentHead title="Menu 导航菜单" />
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="1 - 正常模式 默认选中某项">
                            <div className="layout-no">
                                {/*以下组件写上key相当于类似id，每个组件都有各自的标记，避免重复渲染影响性能*/}
                                <Menu
                                    onClick={this.handleClick}
                                    style={{ width: 256 }}
                                >
                                    <SubMenu key="sub1" title={<span><i className="icon icon-tongzhi-mianxing"></i><span>Navigation One</span></span>}>
                                        <MenuItemGroup key="g1" title="Item 1">
                                            <Menu.Item key="1">Option 1</Menu.Item>
                                            <Menu.Item key="2">Option 2</Menu.Item>
                                        </MenuItemGroup>
                                        <MenuItemGroup key="g2" title="Item 2">
                                            <Menu.Item key="3">Option 3</Menu.Item>
                                            <Menu.Item key="4">Option 4</Menu.Item>
                                        </MenuItemGroup>
                                    </SubMenu>
                                    <SubMenu defaultOpenKeys key="sub2" title={<span><i className="icon icon-liebiaoye"></i><span>Navigation Two</span></span>}>
                                        <Menu.Item key="5" defaultSelectedKeys>Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                        <SubMenu key="sub3" title="Submenu">
                                            <Menu.Item key="7">Option 7</Menu.Item>
                                            <Menu.Item key="8">Option 8</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                    <SubMenu key="sub4" title={<span><i className="icon icon-shezhi"></i><span>Navigation Three</span></span>}>
                                        <Menu.Item key="9">Option 9</Menu.Item>
                                        <Menu.Item key="10">Option 10</Menu.Item>
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="2 - 可切换主题">
                            <div className="layout-no">
                                <RadioGroup
                                    options={this.state.radioGroupData.options}
                                    value={this.state.radioGroupData.value}
                                    disabled={this.state.radioGroupData.disable}
                                    onChange={this.radioGroupChange.bind(this)}
                                ></RadioGroup>
                                <Menu
                                    onClick={this.handleClick}
                                    style={{ width: 256 }}
                                    theme={this.state.radioGroupData.value}
                                >
                                    <SubMenu key="sub1" title={<span><i className="icon icon-tongzhi-mianxing"></i><span>Navigation One</span></span>}>
                                        <MenuItemGroup key="g1" title="Item 1">
                                            <Menu.Item key="1">Option 1</Menu.Item>
                                            <Menu.Item key="2">Option 2</Menu.Item>
                                        </MenuItemGroup>
                                        <MenuItemGroup key="g2" title="Item 2">
                                            <Menu.Item key="3">Option 3</Menu.Item>
                                            <Menu.Item key="4">Option 4</Menu.Item>
                                        </MenuItemGroup>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><i className="icon icon-liebiaoye"></i><span>Navigation Two</span></span>}>
                                        <Menu.Item key="5">Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                        <SubMenu key="sub3" title="Submenu">
                                            <Menu.Item key="7">Option 7</Menu.Item>
                                            <Menu.Item key="8">Option 8</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                    <SubMenu key="sub4" title={<span><i className="icon icon-shezhi"></i><span>Navigation Three</span></span>}>
                                        <Menu.Item key="9">Option 9</Menu.Item>
                                        <Menu.Item key="10">Option 10</Menu.Item>
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="3 - 缩起/展开">
                            <div className="layout-no">
                                <div>{this.state.radioGroupData2.value}</div>
                                <RadioGroup
                                    options={this.state.radioGroupData2.options}
                                    value={this.state.radioGroupData2.value}
                                    disabled={this.state.radioGroupData2.disable}
                                    onChange={this.radioGroupChange2.bind(this)}
                                ></RadioGroup>
                                <Menu
                                    onClick={this.handleClick}
                                    style={{ width: 256 }}
                                    theme='dark'
                                    model={this.state.radioGroupData2.value}
                                >
                                    <SubMenu model={this.state.radioGroupData2.value} key="sub1" title={<span><i className="icon icon-tongzhi-mianxing"></i><span>Navigation One</span></span>}>
                                        <Menu.Item key="1">Option 1</Menu.Item>
                                        <Menu.Item key="2">Option 2</Menu.Item>
                                        <Menu.Item key="3">Option 3</Menu.Item>
                                        <Menu.Item key="4">Option 4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu model={this.state.radioGroupData2.value} key="sub2" title={<span><i className="icon icon-liebiaoye"></i><span>Navigation Two</span></span>}>
                                        <Menu.Item key="5">Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                        <SubMenu model={this.state.radioGroupData2.value} key="sub3" title="Submenu">
                                            <Menu.Item key="7">Option 7</Menu.Item>
                                            <Menu.Item key="8">Option 8</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                    <SubMenu model={this.state.radioGroupData2.value} key="sub4" title={<span><i className="icon icon-shezhi"></i><span>Navigation Three</span></span>}>
                                        <Menu.Item key="9">Option 9</Menu.Item>
                                        <Menu.Item key="10">Option 10</Menu.Item>
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default MenuPage;