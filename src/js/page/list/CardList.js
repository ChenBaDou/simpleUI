import React from 'react';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Footer from '../../../components/layout/Footer/Footer.js';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Card from '../../../components/Card/Card.js';
import Select from 'rc-select';
import Pagination from 'rc-pagination';
import '../../../scss/lib/select.scss';
import '../../../scss/lib/pagination.scss';
import '../../../scss/pageLayout/cardList.scss';

class cardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let addCardBody = null,
            cardListBody = null;

        addCardBody = (
            <div className="add-card"><i className="icon icon-tianjia"></i>新增产品</div>
        );

        cardListBody = (
            <div className="card-list-item">
                <dl>
                    <dt>A产品1</dt>
                    <dd className="pic">
                        <img src={require('../../../resouce/user.png')} alt=""/>
                    </dd>
                    <dd className="des">爱上了关键是大哥的设计稿拉杆夹深度国际十多个阿三哥都是钢筋萨达刚加了个沈杜公路熬过来sad感动死了个大…</dd>
                </dl>
                <ul>
                    <li><a href="javascript:;">操作一</a></li>
                    <li><a href="javascript:;">操作二</a></li>
                </ul>
            </div>
        );

        return (
            <div>
                <ContentHead title="卡片列表">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <i className="icon icon-zhiye" />
                            首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">列表页</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>卡片列表</Breadcrumb.Item>
                    </Breadcrumb>
                </ContentHead>
                <Row justify="center">
                    <Col span="8">
                        <Card
                            cardBody={addCardBody}
                        />
                    </Col>
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                    <Col span="8">
                        <Card
                            cardBody={cardListBody}
                        />
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default cardList;