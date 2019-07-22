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

class SearchProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let filterBody = null,
            productListBody = null;

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

        productListBody = (
            <div className="product-list-item">
                    <div className="pic">
                        <img src={require('../../../resouce/user.png')} alt=""/>
                    </div>
                    <h4>产品</h4>
                    <p>产品sadgas撒大哥大声公开，啥感觉了大帅哥</p>
                    <div className="extra">
                        <div className="time">几秒前</div>
                        <ul className="observers">
                            <li><img src={require('../../../resouce/success.png')} alt=""/></li>
                            <li><img src={require('../../../resouce/user.png')} alt=""/></li>
                            <li><img src={require('../../../resouce/fail.png')} alt=""/></li>
                        </ul>
                    </div>
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
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                    <Col span="6">
                        <Card
                            cardBody={productListBody}
                        />
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default SearchProductList;