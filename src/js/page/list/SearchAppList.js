import React from 'react';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Footer from '../../../components/layout/Footer/Footer.js';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Button from "../../../components/Button/Button.js";
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Card from '../../../components/Card/Card.js';
import Select from 'rc-select';
import Pagination from 'rc-pagination';
import '../../../scss/lib/select.scss';
import '../../../scss/lib/pagination.scss';
import '../../../scss/pageLayout/searchList.scss';

class SearchAppList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let filterBody = null,
            appListBody = null;

        filterBody = (
            <div className="filter">
                    <div className="filter-item clearfix">
                        <div className="filter-item-name">所属类目：</div>
                        <div className="filter-item-list">
                            <span>全部</span>
                            <span>类目一</span>
                            <span>类目二</span>
                            <span>类目三</span>
                            <span>类目四</span>
                            <span>类目五</span>
                            <span>类目六</span>
                            <span>类目七</span>
                            <span>类目八</span>
                            <span>类目九</span>
                            <span>类目十</span>
                        </div>
                        <Button type="txt">
                            展开 <i className="icon icon-xiajiantou" />
                        </Button>
                    </div>
                    <div className="filter-item clearfix">
                        <div className="filter-item-name lh32">其他选项：</div>
                        <div className="filter-item-list">
                            <dl>
                                <dt className="lh32">作者：</dt>
                                <dd>
                                    <select name="author" id="">
                                        <option value="不限">不限</option>
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="lh32">好评度：</dt>
                                <dd>
                                    <select name="author" id="">
                                        <option value="不限">不限</option>
                                    </select>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
        );

        appListBody = (
            <div className="app-list-item">
                    <div className="app-info clearfix">
                        <div className="avatar">
                            <img src={require('../../../resouce/user.png')} alt=""/>
                        </div>
                        <h4>呵呵哒</h4>
                        <div className="extra">
                            <dl>
                                <dt>活跃用户</dt>
                                <dd>11万</dd>
                            </dl>
                            <dl>
                                <dt>新增用户</dt>
                                <dd>1,354</dd>
                            </dl>
                        </div>
                    </div>
                    <ul className="action">
                        <li>
                            <i className="icon icon-xiazai"></i>
                        </li>
                        <li>
                            <i className="icon icon-bianji"></i>
                        </li>
                        <li>
                            <i className="icon icon-fenxiang"></i>
                        </li>
                        <li>
                            <i className="icon icon-gengduo"></i>
                        </li>
                    </ul>
                </div>
        );

        return (
            <div>
                <ContentHead title="搜索列表">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <i className="icon icon-zhiye" />
                            首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">列表页</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>搜索列表（文章）</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="search-bar">
                        <input type="text" placeholder="请输入"/>
                        <button>搜索</button>
                    </div>
                </ContentHead>
                <Card>{filterBody}</Card>
                <Row justify="center">
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={appListBody}
                        />
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default SearchAppList;