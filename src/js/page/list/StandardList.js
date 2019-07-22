import React from 'react';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Footer from '../../../components/layout/Footer/Footer.js';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Card from '../../../components/Card/Card.js';
import Radio from "../../../components/Radio/Radio";
import Select from 'rc-select';
import Pagination from 'rc-pagination';
import '../../../scss/lib/select.scss';
import '../../../scss/lib/pagination.scss';
import '../../../scss/pageLayout/standardList.scss';

const RadioGroup = Radio.RadioGroup;

class StandardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                going: {
                    per: '72%'
                },
                err: {
                    per: '100%'
                },
                suc: {
                    per: '100%'
                }
            },

            radioGroupBtnData: {
                disable: false,
                options: [{
                    label: "全部",
                    value: 1
                }, {
                    label: "进行中",
                    value: 2
                }, {
                    label: "等待中",
                    value: 3
                }],
                value: 1
            }
        };
    }

    radioGroupBtnChange(val, ele) {
        this.state.radioGroupBtnData.value = val;
        this.setState({
            radioGroupBtnData: this.state.radioGroupBtnData
        });
    }

    render() {
        let taskBody = null,
            standardListBody = null;

        taskBody = (
            <ul className="task-list">
                <li>
                    <div className="task-title">我的待办</div>
                    <div className="task-content">8个任务</div>
                </li>
                <li>
                    <div className="task-title">本周任务平均处理时间</div>
                    <div className="task-content">32分钟</div>
                </li>
                <li>
                    <div className="task-title">本周完成任务数</div>
                    <div className="task-content">24个任务</div>
                </li>
            </ul>
        );

        standardListBody = (
            <div className="basic-list">
                <div className="list-top">
                    <div className="title">标准列表</div>
                    <div className="action-bar">
                        <RadioGroup
                            options={this.state.radioGroupBtnData.options}
                            value={this.state.radioGroupBtnData.value}
                            disabled={this.state.radioGroupBtnData.disable}
                            onChange={this.radioGroupBtnChange.bind(this)}
                            button
                        ></RadioGroup>
                        <input type="text" placeholder="请输入"/>
                    </div>
                    <div className="clearfix"></div>
                    <div className="add"><i className="icon icon-tianjia"></i>添加</div>
                </div>
                <div className="list-container">
                    {/* <div className="list-item">
                        <div className="list-item-content">
                        </div>
                        <div className="list-item-action">                            
                        </div>
                    </div> */}
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="avatar">
                                        <img src={require('../../../resouce/user.png')} alt=""/>
                                    </div>
                                </td>
                                <td>
                                    <dl className="info">
                                        <dt className="task-name">大剑仙</dt>
                                        <dd>万千剑道九重，三分为术，三分为道，剩余三分啸成剑气。张口一吐，便是半个剑宗。</dd>
                                    </dl>
                                </td>
                                <td>
                                    <div className="extra">
                                        <div className="extra-tit clearfix">
                                            <span className="ower">所有人</span>
                                            <span className="time">开始时间</span>
                                        </div>
                                        <div className = "extra-content clearfix">
                                            <span className="ower">上官仙尘</span>
                                            <span className="time">2018-09-08 12：03</span>
                                        </div>
                                    </div>
                                    <div className="status going">
                                        <div className="bar">
                                            <div className="per" style={{width: this.state.status.going.per}}></div>
                                        </div>
                                        <span>72%</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="action">
                                        <a href="javascript:;">编辑</a>
                                        <a href="javascript:;">更多<i className="icon icon-xiajiantou"></i></a>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="avatar">
                                        <img src={require('../../../resouce/user.png')} alt=""/>
                                    </div>
                                </td>
                                <td>
                                    <dl className="info">
                                        <dt className="task-name">大剑仙</dt>
                                        <dd>万千剑道九重，三分为术，三分为道，剩余三分啸成剑气。张口一吐，便是半个剑宗。</dd>
                                    </dl>
                                </td>
                                <td>
                                    <div className="extra">
                                        <div className="extra-tit clearfix">
                                            <span className="ower">所有人</span>
                                            <span className="time">开始时间</span>
                                        </div>
                                        <div className = "extra-content clearfix">
                                            <span className="ower">上官仙尘</span>
                                            <span className="time">2018-09-08 12：03</span>
                                        </div>
                                    </div>
                                    <div className="status err">
                                        <div className="bar">
                                            <div className="per" style={{width: this.state.status.err.per}}></div>
                                        </div>
                                        <span className="icon"><i className="icon icon-guanbi-xiao"></i></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="action">
                                        <a href="javascript:;">编辑</a>
                                        <a href="javascript:;">更多<i className="icon icon-xiajiantou"></i></a>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="avatar">
                                        <img src={require('../../../resouce/user.png')} alt=""/>
                                    </div>
                                </td>
                                <td>
                                    <dl className="info">
                                        <dt className="task-name">大剑仙</dt>
                                        <dd>万千剑道九重，三分为术，三分为道，剩余三分啸成剑气。张口一吐，便是半个剑宗。</dd>
                                    </dl>
                                </td>
                                <td>
                                    <div className="extra">
                                        <div className="extra-tit clearfix">
                                            <span className="ower">所有人</span>
                                            <span className="time">开始时间</span>
                                        </div>
                                        <div className = "extra-content clearfix">
                                            <span className="ower">上官仙尘</span>
                                            <span className="time">2018-09-08 12：03</span>
                                        </div>
                                    </div>
                                    <div className="status suc">
                                        <div className="bar">
                                            <div className="per" style={{width: this.state.status.suc.per}}></div>
                                        </div>
                                        <span className="icon"><i className="icon icon-xuanzhong"></i></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="action">
                                        <a href="javascript:;">编辑</a>
                                        <a href="javascript:;">更多<i className="icon icon-xiajiantou"></i></a>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="avatar">
                                        <img src={require('../../../resouce/user.png')} alt=""/>
                                    </div>
                                </td>
                                <td>
                                    <dl className="info">
                                        <dt className="task-name">大剑仙</dt>
                                        <dd>万千剑道九重，三分为术，三分为道，剩余三分啸成剑气。张口一吐，便是半个剑宗。</dd>
                                    </dl>
                                </td>
                                <td>
                                    <div className="extra">
                                        <div className="extra-tit clearfix">
                                            <span className="ower">所有人</span>
                                            <span className="time">开始时间</span>
                                        </div>
                                        <div className = "extra-content clearfix">
                                            <span className="ower">上官仙尘</span>
                                            <span className="time">2018-09-08 12：03</span>
                                        </div>
                                    </div>
                                    <div className="status suc">
                                        <div className="bar">
                                            <div className="per" style={{width: this.state.status.suc.per}}></div>
                                        </div>
                                        <span className="icon"><i className="icon icon-xuanzhong"></i></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="action">
                                        <a href="javascript:;">编辑</a>
                                        <a href="javascript:;">更多<i className="icon icon-xiajiantou"></i></a>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="avatar">
                                        <img src={require('../../../resouce/user.png')} alt=""/>
                                    </div>
                                </td>
                                <td>
                                    <dl className="info">
                                        <dt className="task-name">大剑仙</dt>
                                        <dd>万千剑道九重，三分为术，三分为道，剩余三分啸成剑气。张口一吐，便是半个剑宗。</dd>
                                    </dl>
                                </td>
                                <td>
                                    <div className="extra">
                                        <div className="extra-tit clearfix">
                                            <span className="ower">所有人</span>
                                            <span className="time">开始时间</span>
                                        </div>
                                        <div className = "extra-content clearfix">
                                            <span className="ower">上官仙尘</span>
                                            <span className="time">2018-09-08 12：03</span>
                                        </div>
                                    </div>
                                    <div className="status suc">
                                        <div className="bar">
                                            <div className="per" style={{width: this.state.status.suc.per}}></div>
                                        </div>
                                        <span className="icon"><i className="icon icon-xuanzhong"></i></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="action">
                                        <a href="javascript:;">编辑</a>
                                        <a href="javascript:;">更多<i className="icon icon-xiajiantou"></i></a>
                                    </div>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagination">
                        <Pagination
                            selectComponentClass={Select}
                            showSizeChanger
                            showQuickJumper={{ goButton: <button>确定</button> }}
                            defaultPageSize={20}
                            defaultCurrent={5}
                            onShowSizeChange={this.onShowSizeChange}
                            onChange={this.onChange}
                            total={450}
                        />
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                <ContentHead title="标准列表">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <i className="icon icon-zhiye" />
                            首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">列表页</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>标准列表</Breadcrumb.Item>
                    </Breadcrumb>
                </ContentHead>
                <Card>{taskBody}</Card>
                <Card>{standardListBody}</Card>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default StandardList;