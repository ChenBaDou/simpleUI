import React from 'react';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Footer from '../../../components/layout/Footer/Footer.js';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Card from '../../../components/Card/Card.js';
import Button from "../../../components/Button/Button.js";
import Select from 'rc-select';
import Pagination from 'rc-pagination';
import '../../../scss/lib/select.scss';
import '../../../scss/lib/pagination.scss';
import '../../../scss/pageLayout/searchList.scss';

class SearchArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let taskBody = null,
            articleListBody = null;

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
                <Row justify="space-between">
                    <Col span="15">
                        <Card>
                            <div className="article-list main">
                                <ul>
                                    <li>
                                        <div className="title">
                                            <h5>如何设计实时数据平台</h5>
                                            <span className="set-top">置顶</span>
                                        </div>
                                        <div className="tags">
                                            <span>设计语言</span>
                                            <span>金融云计算</span>
                                            <span>框架</span>
                                        </div>
                                        <div className="text">啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。</div>
                                        <div className="extra">
                                            <img src={require('../../../resouce/user.png')} alt=""/>
                                            <span className="name">公孙仲谋</span>
                                            <span className="time">2018-11-12 13:49</span>
                                        </div>
                                        <div className="handle">
                                            <ul>
                                                <li><i className="icon icon-shoucang-xianxing"></i>104</li>
                                                <li><i className="icon icon-dianzan-xianxing"></i>122</li>
                                                <li><i className="icon icon-pinglun"></i>104</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            <h5>如何设计实时数据平台</h5>
                                        </div>
                                        <div className="tags">
                                            <span>设计语言</span>
                                            <span>金融云计算</span>
                                            <span>框架</span>
                                        </div>
                                        <div className="text">啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。</div>
                                        <div className="extra">
                                            <img src={require('../../../resouce/user.png')} alt=""/>
                                            <span className="name">公孙仲谋</span>
                                            <span className="time">2018-11-12 13:49</span>
                                        </div>
                                        <div className="handle">
                                            <ul>
                                                <li><i className="icon icon-shoucang-xianxing"></i>104</li>
                                                <li><i className="icon icon-dianzan-xianxing"></i>122</li>
                                                <li><i className="icon icon-pinglun"></i>104</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            <h5>如何设计实时数据平台</h5>
                                        </div>
                                        <div className="tags">
                                            <span>设计语言</span>
                                            <span>金融云计算</span>
                                            <span>框架</span>
                                        </div>
                                        <div className="text">啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。</div>
                                        <div className="extra">
                                            <img src={require('../../../resouce/user.png')} alt=""/>
                                            <span className="name">公孙仲谋</span>
                                            <span className="time">2018-11-12 13:49</span>
                                        </div>
                                        <div className="handle">
                                            <ul>
                                                <li><i className="icon icon-shoucang-xianxing"></i>104</li>
                                                <li><i className="icon icon-dianzan-xianxing"></i>122</li>
                                                <li><i className="icon icon-pinglun"></i>104</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="btn-more">
                                    <Button>加载更多</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span="9">
                        <div className="right-list">
                            <Card>
                                <div className="article-list main">
                                    <ul>
                                        <li>
                                            <div className="title">
                                                <h5>如何设计实时数据平台</h5>
                                            </div>
                                            <div className="tags">
                                                <span>设计语言</span>
                                                <span>金融云计算</span>
                                                <span>框架</span>
                                            </div>
                                            <div className="text">啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。</div>
                                            <div className="extra">
                                                <img src={require('../../../resouce/user.png')} alt=""/>
                                                <span className="name">公孙仲谋</span>
                                                <span className="time">2018-11-12 13:49</span>
                                            </div>
                                            <div className="handle">
                                                <ul>
                                                    <li><i className="icon icon-shoucang-xianxing"></i>104</li>
                                                    <li><i className="icon icon-dianzan-xianxing"></i>122</li>
                                                    <li><i className="icon icon-pinglun"></i>104</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card>
                                <div className="article-list main">
                                    <ul>
                                        <li>
                                            <div className="title">
                                                <h5>如何设计实时数据平台</h5>
                                            </div>
                                            <div className="tags">
                                                <span>设计语言</span>
                                                <span>金融云计算</span>
                                                <span>框架</span>
                                            </div>
                                            <div className="text">啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。</div>
                                            <div className="extra">
                                                <img src={require('../../../resouce/user.png')} alt=""/>
                                                <span className="name">公孙仲谋</span>
                                                <span className="time">2018-11-12 13:49</span>
                                            </div>
                                            <div className="handle">
                                                <ul>
                                                    <li><i className="icon icon-shoucang-xianxing"></i>104</li>
                                                    <li><i className="icon icon-dianzan-xianxing"></i>122</li>
                                                    <li><i className="icon icon-pinglun"></i>104</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card>
                                <div className="article-list main">
                                    <ul>
                                        <li>
                                            <div className="title">
                                                <h5>如何设计实时数据平台</h5>
                                            </div>
                                            <div className="tags">
                                                <span>设计语言</span>
                                                <span>金融云计算</span>
                                                <span>框架</span>
                                            </div>
                                            <div className="text">啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个 ，三大感觉拉杆夹，爱上大家来噶十多个家连锁店，谁打过来尬鸡蛋干，阿萨德古拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。</div>
                                            <div className="extra">
                                                <img src={require('../../../resouce/user.png')} alt=""/>
                                                <span className="name">公孙仲谋</span>
                                                <span className="time">2018-11-12 13:49</span>
                                            </div>
                                            <div className="handle">
                                                <ul>
                                                    <li><i className="icon icon-shoucang-xianxing"></i>104</li>
                                                    <li><i className="icon icon-dianzan-xianxing"></i>122</li>
                                                    <li><i className="icon icon-pinglun"></i>104</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default SearchArticleList;