import React from 'react';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Card from '../../../components/Card/Card.js';
import {
    Row,
    Col
} from '../../../components/Grid/Grid.js';
import Button from '../../../components/Button/Button.js';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Input from '../../../components/Input/Input';
import Select from '../../../components/Select/Select';
import DatePicker from '../../../components/DatePicker/DatePicker';
import CheckBox from "../../../components/CheckBox/CheckBox";
import Footer from '../../../components/layout/Footer/Footer.js';
import SelectPage from 'rc-select';
import Pagination from 'rc-pagination';
import '../../../scss/lib/select.scss';
import '../../../scss/lib/pagination.scss';

const Option = Select.Option;

class BasicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: '',
            data2: '',
            date: {
                value: null
            },
            selectData1: '',
            selectData2: '',
            selectData3: '',
            checkboxData: {
                disable: false,
                checked: false
            }
        };
    }
    /**
     * 
     * @param {*} str 传入的当前下拉框字段名
     * @param {*} val 当前选中的下拉框选项
     */
    changeSearch = (par, val) => {
        this.setState({
            [par]: val
        });
    }
    dateChange = (date) => {
        this.setState({
            date: {
                value: date
            }
        });
    }
    checkboxChange(val, ele) {
        this.state.checkboxData.checked = val;
        this.setState({
            checkboxData: this.state.checkboxData
        });
    }
    onShowSizeChange = (current, pageSize) => {
        console.log(current);
        console.log(pageSize);
    }

    onChange = (current, pageSize) => {
        console.log('onChange:current=', current);
        console.log('onChange:pageSize=', pageSize);
    }
    render() {
        return (
            <div>
                <ContentHead title="查询表格">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <i className="icon icon-zhiye" />
                            首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">列表页</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>查询表格</Breadcrumb.Item>
                    </Breadcrumb>
                </ContentHead>
                <Card>
                    <div className="list-box">
                        <Row>
                            <Col span="8">
                                <dl>
                                    <dt>规则名称：</dt>
                                    <dd>
                                        <Input value={this.state.data1} onChange={this.changeSearch.bind(this,'data1')} />
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="8">
                                <dl>
                                    <dt>使用状态：</dt>
                                    <dd>
                                        <Select defaultValue={this.state.selectData1}
                                            placeholder="请选择"
                                            onChange={this.changeSearch.bind(this,'selectData1')}>
                                            <Option value="type1">类型一</Option>
                                            <Option value="type2">类型二</Option>
                                            <Option value="type3">类型三</Option>
                                            <Option value="type4">类型四</Option>
                                            <Option value="type5">类型五</Option>
                                        </Select>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="8">
                                <dl>
                                    <dt>调用次数：</dt>
                                    <dd>
                                        <Input value={this.state.data2} onChange={this.changeSearch.bind(this,'data2')} />
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <dl>
                                    <dt>更新日期：</dt>
                                    <dd>
                                        <DatePicker value={this.state.date.value} onChange={this.dateChange.bind(this)} />
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="8">
                                <dl>
                                    <dt>使用状态：</dt>
                                    <dd>
                                        <Select defaultValue={this.state.selectData2}
                                            placeholder="请选择"
                                            onChange={this.changeSearch.bind(this,'selectData2')}>
                                            <Option value="type1">类型一</Option>
                                            <Option value="type2">类型二</Option>
                                            <Option value="type3">类型三</Option>
                                            <Option value="type4">类型四</Option>
                                            <Option value="type5">类型五</Option>
                                        </Select>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="8">
                                <dl>
                                    <dt>使用状态：</dt>
                                    <dd>
                                        <Select defaultValue={this.state.selectData3}
                                            placeholder="请选择"
                                            onChange={this.changeSearch.bind(this,'selectData3')}>
                                            <Option value="type1">类型一</Option>
                                            <Option value="type2">类型二</Option>
                                            <Option value="type3">类型三</Option>
                                            <Option value="type4">类型四</Option>
                                            <Option value="type5">类型五</Option>
                                        </Select>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                        <div className="table-operator">
                            <span>
                                <Button type="primary">
                                    <i className="icon icon-tianjia" /> 新建
                                </Button>
                            </span>
                            <span>
                                <Button plain>批量操作</Button>
                            </span>
                            <span>
                                <Button plain>更多操作</Button>
                            </span>
                        </div>
                        <div className="table-info">
                            <i className="icon icon-xinxi-mianxing"></i>
                            <span className="ant-alert-message">
                                已选择 <span>0</span> 项&nbsp;&nbsp;
                                <span>服务调用次数总计&nbsp;<span>0 万</span></span>
                                <a href="javascript:;">清空</a>
                            </span>
                        </div>
                        <div className="table-content">
                            <table className="table-list">
                                <thead className="table-thead">
                                    <tr>
                                        <th className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </th>
                                        <th className="table-align-left">公司名称</th>
                                        <th className="table-align-left">联络人</th>
                                        <th className="table-align-left">产品</th>
                                        <th className="table-align-left">处理状态</th>
                                        <th className="table-align-left">分配状态</th>
                                        <th className="table-align-left">更新时间</th>
                                        <th className="table-align-center">操作</th>
                                    </tr>
                                </thead>
                                <tbody className="table-tbody">
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-processing"></span>运行中
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-default"></span>已关闭
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-default"></span>已关闭
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-success"></span>已上线
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-success"></span>已上线
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-error"></span>异常
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-error"></span>异常
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-error"></span>异常
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-error"></span>异常
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-processing"></span>运行中
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-processing"></span>运行中
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-processing"></span>运行中
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-processing"></span>运行中
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-processing"></span>运行中
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                    <tr>
                                        <td className="table-align-center">
                                            <CheckBox checked={this.state.checkboxData.checked}
                                                disabled={this.state.checkboxData.disable}
                                                onChange={this.checkboxChange.bind(this)}>
                                            </CheckBox>
                                        </td>
                                        <td className="table-align-left">剑宗剑气凌空堂投资(北京)有限公司</td>
                                        <td className="table-align-left">徐北游</td>
                                        <td className="table-align-left">登顶江都</td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-warning"></span>运行中
                                        </td>
                                        <td className="table-align-left">
                                            <span className="badge-status-dot badge-status-warning"></span>运行中
                                        </td>
                                        <td className="table-align-left">2018/9/26 14:39</td>
                                        <td className="table-align-center"><i className="icon icon-gengduocaozuo"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-pagination">
                            <Pagination
                              selectComponentClass={SelectPage}
                              showSizeChanger
                              showQuickJumper={{ goButton: <button>确定</button> }}
                              defaultPageSize={20}
                              pageSize={20}
                              defaultCurrent={5}
                              onShowSizeChange={this.onShowSizeChange}
                              onChange={this.onChange}
                              total={450}
                            />
                        </div>
                    </div>
                </Card>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default BasicList;