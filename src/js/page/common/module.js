import React from "react";
import Button from "../../../components/Button/Button.js";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import IconModule from "./iconCom";
import "../../../scss/pageLayout/module.scss";
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

class Module extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectval: "",
            checkboxData: {
                disable: false,
                checked: true
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    checkboxChange(val, ele) {
        this.state.checkboxData.checked = val;
        this.setState({
            checkboxData: this.state.checkboxData
        });
    }

    checkboxDisableToggle() {
        this.state.checkboxData.disable = !this.state.checkboxData.disable;
        this.state.checkboxData.disable = !this.state.checkboxData.disable

        this.setState({
            checkboxData: this.state.checkboxData
        });
    }

    // demo事件可参考
    handleClick(a) {
        console.log("在组件上绑定event属性完成事件传递到自组件");
        // this.state.selectval = a;
        console.log(a);
        event.stopPropagation();
    }

    render() {
        let buttonBody = null,
            colorsBody = null;

        colorsBody = (
            <ul className="layout-colors">
                <li>
                    <i className="color-example color-example1" />
                    <span className="color-name">#0099FF</span>
                </li>
                <li>
                    <i className="color-example color-example2" />
                    <span className="color-name">#3FA9FF</span>
                </li>
                <li>
                    <i className="color-example color-example3" />
                    <span className="color-name">#0A6DD9</span>
                </li>
                <li>
                    <i className="color-example color-example4" />
                    <span className="color-name">#E5F7FF</span>
                </li>
                <li>
                    <i className="color-example color-example5" />
                    <span className="color-name">#FF4951</span>
                </li>
                <li>
                    <i className="color-example color-example6" />
                    <span className="color-name">#2CD7AA</span>
                </li>
                <li>
                    <i className="color-example color-example7" />
                    <span className="color-name">#FFC602</span>
                </li>
                <li>
                    <i className="color-example color-example8" />
                    <span className="color-name">#262626</span>
                </li>
                <li>
                    <i className="color-example color-example9" />
                    <span className="color-name">#595959</span>
                </li>
                <li>
                    <i className="color-example color-example10" />
                    <span className="color-name">#8C8C8C</span>
                </li>
                <li>
                    <i className="color-example color-example11" />
                    <span className="color-name">#BFBFBF</span>
                </li>
                <li>
                    <i className="color-example color-example12" />
                    <span className="color-name">#E8E8E8</span>
                </li>
                <li>
                    <i className="color-example color-example13" />
                    <span className="color-name">#D9D9D9</span>
                </li>
            </ul>
        );

        buttonBody = (
            <ul className="layout-button">
                <li>
                    <span>
                        <Button type="primary">主要按钮</Button>
                    </span>
                    <span>
                        <Button type="success">成功按钮</Button>
                    </span>
                    <span>
                        <Button type="waring">警告按钮</Button>
                    </span>
                    <span>
                        <Button type="danger">警告按钮</Button>
                    </span>
                    <span>
                        <Button disabled>禁用按钮</Button>
                    </span>
                </li>
                <li>
                    <span>
                        <Button type="primary" round>
                            圆角按钮
                        </Button>
                    </span>
                    <span>
                        <Button type="success" round>
                            圆角按钮
                        </Button>
                    </span>
                    <span>
                        <Button type="waring" round>
                            圆角按钮
                        </Button>
                    </span>
                    <span>
                        <Button type="danger" round>
                            圆角按钮
                        </Button>
                    </span>
                    <span>
                        <Button round disabled>
                            圆角按钮
                        </Button>
                    </span>
                </li>
                <li>
                    <span>
                        <Button type="primary">两 字</Button>
                    </span>
                    <span>
                        <Button type="primary">三个字</Button>
                    </span>
                    <span>
                        <Button type="primary">主要按钮</Button>
                    </span>
                    <span>
                        <Button type="primary">
                            <i className="icon icon-tianjia" /> 图标
                        </Button>
                    </span>
                </li>
                <li>
                    <span>
                        <Button event={this.handleClick}>默认按钮</Button>
                    </span>
                    <span>
                        <Button plain>主要按钮</Button>
                    </span>
                    <span>
                        <Button plain disabled>
                            禁用按钮
                        </Button>
                    </span>
                </li>
                <li>
                    <span>
                        <Button round>圆角按钮</Button>
                    </span>
                    <span>
                        <Button plain round>
                            主要按钮
                        </Button>
                    </span>
                    <span>
                        <Button plain round disabled>
                            禁用按钮
                        </Button>
                    </span>
                </li>

                <li>
                    <span>
                        <Button type="txt">按钮</Button>
                    </span>
                    <span>
                        <Button type="txt" disabled>
                            按钮
                        </Button>
                    </span>
                </li>
                <li>
                    <span>
                        <Button type="txt">
                            展开 <i className="icon icon-xiajiantou" />
                        </Button>
                    </span>
                    <span>
                        <Button type="txt" disabled>
                            展开 <i className="icon icon-xiajiantou" />
                        </Button>
                    </span>
                </li>
            </ul>
        );

        return (
            <div>
                <ContentHead title="Button 按钮">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <i className="icon icon-zhiye" />
                            首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">公共模块</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Button 按钮</Breadcrumb.Item>
                    </Breadcrumb>
                </ContentHead>
                <Card cardHeadTit="系统常用色">{colorsBody}</Card>
                <Row justify="center">
                    <Col span="12">
                        <Card
                            cardHeadTit="系统按钮组件"
                            cardBody={buttonBody}
                        />
                    </Col>
                    <Col span="12">
                        <Card
                            cardHeadTit="系统按钮组件"
                            cardBody={buttonBody}
                        />
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default Module;