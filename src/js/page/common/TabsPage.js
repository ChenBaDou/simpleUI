import React from "react";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import NavTab from "../../../components/NavTab/NavTab";

const NavContents = NavTab.NavContents;
class TabsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <ContentHead title="tabs 标签" />
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="tabs位置（上）">
                            <div className="layout-no">
                                <NavTab tabPosition="top" defaultActiveKey={0}>
                                    {
                                        [{
                                            name:'基本设置',
                                            number:'8',
                                            content:'1111111111111111',
                                        }, {
                                            name:'安全设置',
                                            number:'18',
                                            content:'2222222222',
                                        } ,{
                                            name:'账号绑定',
                                            number:'28',
                                            content:'3333333333333333',
                                        }, {
                                            name:'新消息通知',
                                            number:'28',
                                            content:'444444444444444',
                                        }].map((item,key)=>{
                                            return (
                                                <NavContents tab={item.name} key={item.name}>
                                                    <div>{[{
                                                        name:'基本设置',
                                                        number:'8',
                                                        content:'1111111111111111',
                                                    }, {
                                                        name:'安全设置',
                                                        number:'18',
                                                        content:'2222222222',
                                                    } ,{
                                                        name:'账号绑定',
                                                        number:'28',
                                                        content:'3333333333333333',
                                                    }, {
                                                        name:'新消息通知',
                                                        number:'28',
                                                        content:'444444444444444',
                                                    }][key].content}</div>
                                                </NavContents>
                                            )
                                        })
                                    }
                                </NavTab>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="tabs位置（右）">
                            <div className="layout-no">
                                <NavTab tabPosition="right" defaultActiveKey={0}>
                                    {
                                        [{
                                            name:'基本设置',
                                            number:'8',
                                            content:'1111111111111111',
                                        }, {
                                            name:'安全设置',
                                            number:'18',
                                            content:'2222222222',
                                        } ,{
                                            name:'账号绑定',
                                            number:'28',
                                            content:'3333333333333333',
                                        }, {
                                            name:'新消息通知',
                                            number:'28',
                                            content:'444444444444444',
                                        }].map((item,key)=>{
                                            return (
                                                <NavContents tab={item.name} key={item.name}>
                                                    {
                                                        [1,2,3,4].map((item)=>{
                                                            return (
                                                                <div key={item}>{item}</div>
                                                            )
                                                        })
                                                    }
                                                </NavContents>
                                            )
                                        })
                                    }
                                </NavTab>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="tabs位置（下）">
                            <div className="layout-no">
                                <NavTab tabPosition="bottom" defaultActiveKey={0}>
                                    {
                                        [{
                                            name:'基本设置',
                                            number:'8',
                                            content:'1111111111111111',
                                        }, {
                                            name:'安全设置',
                                            number:'18',
                                            content:'2222222222',
                                        } ,{
                                            name:'账号绑定',
                                            number:'28',
                                            content:'3333333333333333',
                                        }, {
                                            name:'新消息通知',
                                            number:'28',
                                            content:'444444444444444',
                                        }].map((item,key)=>{
                                            return (
                                                <NavContents tab={item.name} key={item.name}>
                                                    {
                                                        [1,2,3,4].map((item)=>{
                                                            return (
                                                                <div key={item}>{item}</div>
                                                            )
                                                        })
                                                    }
                                                </NavContents>
                                            )
                                        })
                                    }
                                </NavTab>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="tabs位置（左）">
                            <div className="layout-no">
                                <NavTab tabPosition="left" defaultActiveKey={0}>
                                    {
                                        [{
                                            name:'基本设置',
                                            number:'8',
                                            content:'1111111111111111',
                                        }, {
                                            name:'安全设置',
                                            number:'18',
                                            content:'2222222222',
                                        } ,{
                                            name:'账号绑定',
                                            number:'28',
                                            content:'3333333333333333',
                                        }, {
                                            name:'新消息通知',
                                            number:'28',
                                            content:'444444444444444',
                                        }].map((item,key)=>{
                                            return (
                                                <NavContents tab={item.name} key={item.name}>
                                                    {
                                                        [1,2,3,4].map((item)=>{
                                                            return (
                                                                <div key={item}>{item}</div>
                                                            )
                                                        })
                                                    }
                                                </NavContents>
                                            )
                                        })
                                    }
                                </NavTab>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="tabs位置（上）--不可用某项">
                            <div className="layout-no">
                                <NavTab tabPosition="top" defaultActiveKey={0} disabledKey={1}>
                                    {
                                        [{
                                            name:'基本设置',
                                            number:'8',
                                            content:'1111111111111111',
                                        }, {
                                            name:'安全设置',
                                            number:'18',
                                            content:'2222222222',
                                        } ,{
                                            name:'账号绑定',
                                            number:'28',
                                            content:'3333333333333333',
                                        }, {
                                            name:'新消息通知',
                                            number:'28',
                                            content:'444444444444444',
                                        }].map((item,index)=>{
                                            return (
                                                <NavContents tab={item.name} key={item.name}>
                                                    <div>{[{
                                                        name:'基本设置',
                                                        number:'8',
                                                        content:'1111111111111111',
                                                    }, {
                                                        name:'安全设置',
                                                        number:'18',
                                                        content:'2222222222',
                                                    } ,{
                                                        name:'账号绑定',
                                                        number:'28',
                                                        content:'3333333333333333',
                                                    }, {
                                                        name:'新消息通知',
                                                        number:'28',
                                                        content:'444444444444444',
                                                    }][index].content}</div>
                                                </NavContents>
                                            )
                                        })
                                    }
                                </NavTab>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default TabsPage;