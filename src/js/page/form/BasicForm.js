import React from 'react';
import Card from '../../../components/Card/Card.js';
import {
    Row,
    Col
} from '../../../components/Grid/Grid.js';
import Button from '../../../components/Button/Button.js';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Footer from '../../../components/layout/Footer/Footer.js';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import TextType from '../../../components/TextType/TextType';
import Input from '../../../components/Input/Input';
import Select from "../../../components/Select/Select";
import RangeCalendar from '../../../components/DatePicker/RangeCalendar';

const Option = Select.Option;

class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: '',
            data2: 'data2',
            data3: '',
            data4: '',
            data5: '',
            data6: '',
            data7: '',
            errObj: {
                data1: '',
                data2: '',
                data3: '',
                data4: '',
                data5: '',
                data6: '',
                data7: ''
            }
        };
    }
    /**
     * 输入操作处理，选择付款账户及账号，付款原因等
     */
    handleChange = (par, val) => {
        this.setState({
            [par]: val
        });
    }
    /**
     * 表单校验
     */
    checkForm = () => {
        let status = false;

        if (!this.state.data1) {
            status = this.changeFlag('data1', '必填项不能为空！');
        } else {
            status = this.changeFlag('data1');
        }

        if (!this.state.data2) {
            status = this.changeFlag('data2', '必填项不能为空！');
        } else {
            status = this.changeFlag('data2');
        }

        if (!this.state.data3) {
            status = this.changeFlag('data3', '必填项不能为空！');
        } else {
            status = this.changeFlag('data3');
        }

        if (!this.state.data4) {
            status = this.changeFlag('data4', '必填项不能为空！');
        } else {
            status = this.changeFlag('data4');
        }
        if (!this.state.data5) {
            status = this.changeFlag('data5', '必填项不能为空！');
        } else {
            status = this.changeFlag('data5');
        }
        if (!this.state.data6) {
            status = this.changeFlag('data6', '必填项不能为空！');
        } else {
            status = this.changeFlag('data6');
        }
        if (!this.state.data7) {
            status = this.changeFlag('data7', '必填项不能为空！');
        } else {
            status = this.changeFlag('data7');
        }
        return status;
    }
    /**
     * @param {*} par 对应的不同的表单项
     * @param {*} text 对应表单项的提示语
     */
    changeFlag = (par, text) => {
        let flag = false;

        Object.assign(this.state.errObj, {
            [par]: text
        });

        this.setState({
            errObj: this.state.errObj,
        });

        for (let key in this.state.errObj) {
            if (this.state.errObj[key]) {
                flag = true;
            }
        }
        return flag;
    }
    /**
     * 提交
     */
    handleSubmit = () => {
        // 表单校验，true表示校验不通过
        if (this.checkForm()) return;
        alert('提交成功');
    }
    render() {
        return (
            <div>
                <ContentHead title="基础表单" text="表单页用于向用户收集或验证信息，基础表单常见于数据较少的表单场景。">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <i className="icon icon-zhiye" />首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            表单
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>基础表单</Breadcrumb.Item>
                    </Breadcrumb>
                </ContentHead>
                <Card>
                    <div className="base-form-box transaction">
                        <Row>
                            <Col span="8">
                                <div className="form-label">
                                    <label htmlFor="">
                                        <span>标题：</span>
                                    </label>
                                </div>
                            </Col>
                            <Col span="9">
                                <div className={`form-input ${this.state.errObj.data1 ? 'input-wrapper-error' : ''}`}>
                                    <Input value={this.state.data1} onChange={this.handleChange.bind(this, 'data1')} placeholder="给目标起个名字" />
                                    <span className="error-msg">{this.state.errObj.data1}</span>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <div className="form-label">
                                    <label htmlFor="">
                                        <span>起止日期：</span>
                                    </label>
                                </div>
                            </Col>
                            <Col span="9">
                                <div className={`form-input ${this.state.errObj.data2 ? 'input-wrapper-error' : ''}`}>
                                    <RangeCalendar />
                                    <span className="error-msg">{this.state.errObj.data2}</span>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <div className="form-label">
                                    <label htmlFor="">
                                        <span>目标类型：</span>
                                    </label>
                                </div>
                            </Col>
                            <Col span="9">
                                <div className={`form-input ${this.state.errObj.data3 ? 'input-wrapper-error' : ''}`}>
                                    <Select defaultValue={this.state.data3}
                                        placeholder="请选择"
                                        onChange={this.handleChange.bind(this,'data3')}>
                                        <Option value="type1">类型一</Option>
                                        <Option value="type2">类型二</Option>
                                        <Option value="type3">类型三</Option>
                                        <Option value="type4">类型四</Option>
                                        <Option value="type5">类型五</Option>
                                    </Select>
                                    <span className="error-msg">{this.state.errObj.data3}</span>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <div className="form-label">
                                    <label htmlFor="">
                                        <span>目标描述：</span>
                                    </label>
                                </div>
                            </Col>
                            <Col span="9">
                                <div className={`form-input ${this.state.errObj.data4 ? 'input-wrapper-error' : ''}`}>
                                    <textarea className="input" 
                                        rows="4" 
                                        placeholder="给目标起个名字" 
                                        value={this.state.data4} 
                                        onChange={this.handleChange.bind(this, 'data4')} />
                                    <span className="error-msg">{this.state.errObj.data4}</span>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <div className="form-label">
                                    <label htmlFor="">
                                        <span>衡量标准：</span>
                                    </label>
                                </div>
                            </Col>
                            <Col span="9">
                                <div className={`form-input ${this.state.errObj.data5 ? 'input-wrapper-error' : ''}`}>
                                    <textarea className="input" 
                                        rows="4" 
                                        placeholder="给目标起个名字" 
                                        value={this.state.data5} 
                                        onChange={this.handleChange.bind(this, 'data5')} />
                                    <span className="error-msg">{this.state.errObj.data5}</span>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <div className="form-label">
                                    <label htmlFor="">
                                        <span>客户（选填）：</span>
                                    </label>
                                </div>
                            </Col>
                            <Col span="9">
                                <div className={`form-input ${this.state.errObj.data6 ? 'input-wrapper-error' : ''}`}>
                                    <Input value={this.state.data6} onChange={this.handleChange.bind(this, 'data6')} placeholder="给目标起个名字" />
                                    <span className="error-msg">{this.state.errObj.data6}</span>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <div className="form-label">
                                    <label htmlFor="">
                                        <span>权重（选填）：</span>
                                    </label>
                                </div>
                            </Col>
                            <Col span="9">
                                <div className={`form-input ${this.state.errObj.data7 ? 'input-wrapper-error' : ''}`}>
                                    <Input value={this.state.data7} onChange={this.handleChange.bind(this, 'data7')} placeholder="给目标起个名字" />
                                    <span className="error-msg">{this.state.errObj.data7}</span>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                        <Row>
                            <Col span="8"></Col>
                            <Col span="9">                            
                                <div className="btn-box">
                                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                                        提交
                                    </Button>
                                    <Button>
                                        保存
                                    </Button>
                                </div>
                            </Col>
                            <Col span="7"></Col>
                        </Row>
                    </div>
                </Card>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default BasicForm;