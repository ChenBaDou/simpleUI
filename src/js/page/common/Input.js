import React from 'react';
import Input from '../../../components/Input/Input';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import Card from "../../../components/Card/Card.js";
import '../../../scss/pageLayout/input.scss';

class InputModule extends React.Component {
    constructor(props) {
        super();

        this.state = {
            userName: 'hello react',
            clearVal: ''
        }
    }

    // 修改组件内容同步更新到父组件
    onChangeUserName = (e) => {
        this.setState({
            userName: e
        });
    }

    onChangeClearVal = (e) => {
        this.setState({
            clearVal: e
        });
    }

    // 设置回车键
    onPressEnter = (e) => {
        console.log('触发回车事件', e.target.value)
    }

    render() {
        let {
            userName,
            clearVal
        } = this.state;

        return (
            <div>
                <ContentHead title="输入框" />
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="input 三种大小">
                            <div className="layout-input">
                                <Input placeholder="LARGE"
                                       size="large" />
                                <Input placeholder="DEFAULT" 
                                       onPressEnter={this.onPressEnter} />
                                <Input placeholder="SMALL" 
                                       size="small"/>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="input 前缀、后缀图标">
                            <div className="layout-input">
                                <Input placeholder="请输入" 
                                    prefix={<i className="icon icon-geren"></i>}
                                    />
                                <Input placeholder="请输入"
                                    value={userName}
                                    onChange={this.onChangeUserName}
                                    suffix={<i className="icon icon-bianji"></i>}
                                    />
                                <Input placeholder="输入之后显示移除图标" 
                                    value={clearVal}
                                    onChange={this.onChangeClearVal}
                                    allowClear 
                                    />
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                <Col span="12">
                    <Card cardHeadTit="input 常用操作">
                        <div className="layout-input">
                            <Input placeholder="禁用"
                                   disabled
                                   onChange={this.onChangeUserName}
                                />
                        </div>
                    </Card>
                </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default InputModule;