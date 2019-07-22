import React from "react";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Tree from '../../../components/Tree/Tree';
import Tree2 from '../../../components/Tree/Tree2';

const node = [{
    title: '0',
    key: '0',
    level: 'level1',
    open: true,
    child: [{
        title: '0-0',
        key: '0-0',
        level: 'level2',
        open: true,
        child: [{
            title: '0-0-0',
            key: '0-0-0',
            level: 'level3',
        }, {
            title: '0-0-1',
            key: '0-0-1',
            level: 'level3',
            open: true,
            child: [{
                title: '0-0-1-0',
                key: '0-0-1-0',
                level: 'level4',
                open: true,
                child: [{
                    title: '0-0-1-0-0',
                    key: '0-0-1-0-0',
                    level: 'level5',
                }]
            }]
        }, {
            title: '0-0-2',
            key: '0-0-2',
            level: 'level3',
        }, ]
    }, {
        title: '0-1',
        key: '0-1',
        level: 'level2',
        open: false,
        child: [{
            title: '0-1-0',
            key: '0-1-0',
            level: 'level3',
        }, {
            title: '0-1-1',
            key: '0-1-1',
            level: 'level3',
        }, {
            title: '0-1-2',
            key: '0-1-2',
            level: 'level3',
        }]
    }]
}];
const node2 = [{
    title: '0',
    key: '0',
    level: 'level1',
    open: true,
    child: [{
        title: '0-0',
        key: '0-0',
        level: 'level2',
        open: true,
        child: [{
            title: '0-0-0',
            key: '0-0-0',
            level: 'level3',
        }, {
            title: '0-0-1',
            key: '0-0-1',
            level: 'level3',
            open: true,
            child: [{
                title: '0-0-1-0',
                key: '0-0-1-0',
                level: 'level4',
                open: true,
                child: [{
                    title: '0-0-1-0-0',
                    key: '0-0-1-0-0',
                    level: 'level5',
                }]
            }]
        }, {
            title: '0-0-2',
            key: '0-0-2',
            level: 'level3',
        }, ]
    }, {
        title: '0-1',
        key: '0-1',
        level: 'level2',
        open: false,
        child: [{
            title: '0-1-0',
            key: '0-1-0',
            level: 'level3',
        }, {
            title: '0-1-1',
            key: '0-1-1',
            level: 'level3',
        }, {
            title: '0-1-2',
            key: '0-1-2',
            level: 'level3',
        }]
    }]
}];
const node3 = [{
    title: '0',
    key: '0',
    level: 'level1',
    open: false,
    child: []
}];
const node4 = [{
    title: '0',
    key: '0',
    level: 'level1',
    open: true,
    child: [{
        title: '0-0',
        key: '0-0',
        level: 'level2',
        open: true,
        child: [{
            title: '0-0-0',
            key: '0-0-0',
            level: 'level3',
        }, {
            title: '0-0-1',
            key: '0-0-1',
            level: 'level3',
            open: true,
            child: [{
                title: '0-0-1-0',
                key: '0-0-1-0',
                level: 'level4',
                open: true,
                child: [{
                    title: '0-0-1-0-0',
                    key: '0-0-1-0-0',
                    level: 'level5',
                }]
            }]
        }, {
            title: '0-0-2',
            key: '0-0-2',
            level: 'level3',
        }, ]
    }, {
        title: '0-1',
        key: '0-1',
        level: 'level2',
        open: false,
        child: [{
            title: '0-1-0',
            key: '0-1-0',
            level: 'level3',
        }, {
            title: '0-1-1',
            key: '0-1-1',
            level: 'level3',
        }, {
            title: '0-1-2',
            key: '0-1-2',
            level: 'level3',
        }]
    }]
}];
const data5 = [{
    code: "0",
    parentCode: "",
    name: "产品中心",
    isOpen: true,
    type: '0'
}, {
    code: "11001",
    id: 42,
    name: "解决方案类",
    parentCode: "0",
    propertyList: [],
    type: "1"
}, {
    code: "11002",
    id: 43,
    name: "产品与服务类",
    parentCode: "0",
    propertyList: [],
    type: "1",
}, {
    code: "11003",
    id: 44,
    name: "商务合作类",
    parentCode: "0",
    propertyList: [],
    type: "1",
}, {
    code: "12010",
    id: 45,
    name: "分期支付",
    parentCode: "11001",
    propertyList: [],
    type: "2",
}, {
    code: "12023",
    id: 57,
    name: "渠道合作",
    parentCode: "11003",
    propertyList: [],
    type: "2",
}];
const data6 = [{
    code: "0",
    parentCode: "",
    name: "产品中心",
    isOpen: true,
    type: '0'
}, {
    code: "11001",
    id: 42,
    name: "解决方案类",
    parentCode: "0",
    propertyList: [],
    type: "1"
}, {
    code: "11002",
    id: 43,
    name: "产品与服务类",
    parentCode: "0",
    propertyList: [],
    type: "1",
}, {
    code: "11003",
    id: 44,
    name: "商务合作类",
    parentCode: "0",
    propertyList: [],
    type: "1",
}, {
    code: "12010",
    id: 45,
    name: "分期支付",
    parentCode: "11001",
    propertyList: [],
    type: "2",
}, {
    code: "12023",
    id: 57,
    name: "渠道合作",
    parentCode: "11003",
    propertyList: [],
    type: "2",
}];

class TreePage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.loadDataAction = this.loadDataAction.bind(this);
        this.state = {
            notice: false,
        };
    }
    onClick(item) {
        if (!item.child) {
            alert('标题:' + item.title);
        }
    }
    loadDataAction(item) {
        //这里对应数据格式去依据判断标准
        // console.log(item);
        if (!(item.child && item.child.length)) {
            if (item.title == '0') {
                item.child.push({
                    title: '0-0',
                    key: '0-0',
                    level: 'level2',
                    open: false,
                    child: []
                }, {
                    title: '0-1',
                    key: '0-1',
                    level: 'level2',
                    open: false,
                    child: []
                });
            } else if (item.title == '0-0') {
                item.child.push({
                    title: '0-0-0',
                    key: '0-0-0',
                    level: 'level3',
                })
            } else if (item.title == '0-1') {
                item.child.push({
                    title: '0-1-0',
                    key: '0-1-1',
                    level: 'level3',
                })
            }
            this.setState({
                notice: true,
            });
        }
    }
    clickNodeGetInfo(node) {
        console.log('节点id是：' + node.id + ';节点name是：' + node.name);
        console.log(node);
    }

    render() {
        return (
            <div>
                <ContentHead title="Tree 树形控件" />
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="tree - 1 - 正常模式">
                            <div className="layout-no">
                                <Tree treeList={node}></Tree>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="tree - 2 - 子点击独立响应事件">
                            <div className="layout-no">
                                <Tree treeList={node2} onClick={this.onClick}></Tree>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="tree - 3 - 可勾选">
                            <div className="layout-no">
                                <Tree
                                    treeList={node4}
                                    type="check"
                                >

                                </Tree>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="tree2 - 1">
                            <div className="layout-no">
                                <Tree2 treeData={data5}
                                       iconclick = {true}
                                       canSelected = {true}
                                       clickNodeGetInfo = {this.clickNodeGetInfo}
                                >
                                </Tree2>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="tree2 - 2">
                            <div className="layout-no">
                                <Tree2 treeData={data6}
                                       iconclick = {false}
                                       canSelected = {true}
                                       clickNodeGetInfo = {this.clickNodeGetInfo}
                                >
                                </Tree2>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default TreePage;