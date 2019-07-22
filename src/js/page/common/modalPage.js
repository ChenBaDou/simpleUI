import React from "react";
import Button from "../../../components/Button/Button.js";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import Modal from "../../../components/Modal/Modal";
import {
    Row,
    Col
} from "../../../components/Grid/Grid";

const style = {
    display: 'inline',
    marginRight: 10
};

class ModalPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            basic_visible: false,
            confirm_visible: false,
            info_visible: false,
            success_visible: false,
            error_visible: false,
            warning_visible: false
        };
    }

    showModal(type) {
        this.setState({
            [type]: true
        });
    }

    handleOk(type) {
        this.setState({
            [type]: false
        });
    }

    handleCancel(type) {
        this.setState({
            [type]: false
        });
    }

    render() {
        let basicModalBody = null;
        basicModalBody = (
            <div className="layout-no">
                <ul className="btns">
                    <li style={style}>
                        <Button type="primary" event={()=>{this.showModal('basic_visible')}}>Open Modal</Button>
                    </li>
                </ul>
                <Modal
                    visible={this.state.basic_visible}
                    title="自定义标题"
                    okText="确认"
                    cancelText="取消"
                    onOk={() => {this.handleOk('basic_visible')}}
                    onCancel={() => {this.handleCancel('basic_visible')}}
                >
                    <p>这是自定义content1111</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                </Modal>
            </div>
        );

        let comfirmModalBody = null;
        comfirmModalBody = (
            <div className="layout-no">
                <ul className="btns">
                    <li style={style}>
                        <Button event={()=>{this.showModal('confirm_visible')}}>confirm</Button>
                    </li>
                </ul>
                <Modal
                    visible={this.state.confirm_visible}
                    title="Do you Want to delete these items?"
                    okText="确认"
                    cancelText="取消"
                    type="confirm"
                    onOk={() => {this.handleOk('confirm_visible')}}
                    onCancel={() => {this.handleCancel('confirm_visible')}}
                >
                    <p>这是自定义content2222</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                </Modal>
            </div>
        );

        let infoModalBody = null;
        infoModalBody = (
            <div className="layout-no">
                <ul className="btns">
                    <li style={style}>
                        <Button event={()=>{this.showModal('info_visible')}}>info</Button>
                    </li>
                    <li style={style}>
                        <Button event={()=>{this.showModal('success_visible')}}>success</Button>
                    </li>
                    <li style={style}>
                        <Button event={()=>{this.showModal('error_visible')}}>Error</Button>
                    </li>
                    <li style={style}>
                        <Button event={()=>{this.showModal('warning_visible')}}>Warning</Button>
                    </li>
                </ul>                
                <Modal
                    visible={this.state.info_visible}
                    title="This is a notification message"
                    okText="知道了"
                    type="info"
                    onOk={() => {this.handleOk('info_visible')}}
                    onCancel={() => {this.handleCancel('info_visible')}}
                >
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                </Modal>
                <Modal
                    visible={this.state.success_visible}
                    title="This is a success message"
                    okText="知道了"
                    type="success"
                    onOk={() => {this.handleOk('success_visible')}}
                    onCancel={() => {this.handleCancel('success_visible')}}
                >
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                </Modal>
                <Modal
                    visible={this.state.error_visible}
                    title="This is a error message"
                    okText="知道了"
                    type="error"
                    onOk={() => {this.handleOk('error_visible')}}
                    onCancel={() => {this.handleCancel('error_visible')}}
                >
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                </Modal>
                <Modal
                    visible={this.state.warning_visible}
                    title="This is a warning message"
                    okText="知道了"
                    type="warning"
                    onOk={() => {this.handleOk('warning_visible')}}
                    onCancel={() => {this.handleCancel('warning_visible')}}
                >
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                    <p>这是自定义content</p>
                </Modal>
            </div>
        );

        return (
            <div>
                <ContentHead title="对话框" />
                <Row>
                    <Col span="12">
                        <Card
                            cardHeadTit="基本对话框"
                            cardBody={ basicModalBody }
                        />
                    </Col>
                    <Col span="12">
                        <Card
                            cardHeadTit="确认对话框"
                            cardBody={ comfirmModalBody }
                        />
                    </Col>
                    <Col span="12">
                        <Card
                            cardHeadTit="信息提示"
                            cardBody={ infoModalBody }
                        />
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default ModalPage;