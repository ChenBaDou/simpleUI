import React from 'react';
import Card from '../../../components/Card/Card.js';
import {
    Row,
    Col
} from '../../../components/Grid/Grid.js';
import Button from '../../../components/Button/Button.js';
import ContentHead from '../../../components/ContentHead/ContentHead.js';
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import TextType from '../../../components/TextType/TextType';
import Input from '../../../components/Input/Input';
import Select from "../../../components/Select/Select";
import RangeCalendar from '../../../components/DatePicker/RangeCalendar';

const Option = Select.Option;

class ComplexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: '',
            data2: '',
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
            <div className="complex-form-box">
                <ContentHead title="高级表单" text="高级表单常见于一次性输入和提交大批量数据的场景。">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <i className="icon icon-zhiye" />首页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            表单
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>高级表单</Breadcrumb.Item>
                    </Breadcrumb>
                </ContentHead>
                <Card cardHeadTit="仓库管理">
                    <div className="complex-form">
                        <Row>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            仓库名
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data1 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data1} onChange={this.handleChange.bind(this,'data1')} />
                                        <em className="red">{this.state.errObj.data1}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            仓库域名
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data2 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data2} onChange={this.handleChange.bind(this,'data2')} />
                                        <em className="red">{this.state.errObj.data2}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            仓库管理员
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data3 ? '' : 'input-wrapper-error'}>
                                    <Select defaultValue={this.state.data3}
                                        placeholder="请选择"
                                        onChange={this.handleChange.bind(this,'data3')}>
                                        <Option value="type1">类型一</Option>
                                        <Option value="type2">类型二</Option>
                                        <Option value="type3">类型三</Option>
                                        <Option value="type4">类型四</Option>
                                        <Option value="type5">类型五</Option>
                                    </Select>
                                        <em className="red">{this.state.errObj.data3}</em>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            审批人
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data4 ? '' : 'input-wrapper-error'}>
                                    <Select defaultValue={this.state.data4}
                                        placeholder="请选择"
                                        onChange={this.handleChange.bind(this,'data4')}>
                                        <Option value="type1">类型一</Option>
                                        <Option value="type2">类型二</Option>
                                        <Option value="type3">类型三</Option>
                                        <Option value="type4">类型四</Option>
                                        <Option value="type5">类型五</Option>
                                    </Select>
                                        <em className="red">{this.state.errObj.data4}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            生效日期
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data5 ? '' : 'input-wrapper-error'}>
                                        <RangeCalendar />
                                        <em className="red">{this.state.errObj.data5}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            仓库类型
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data6 ? '' : 'input-wrapper-error'}>
                                    <Select defaultValue={this.state.data6}
                                        placeholder="请选择"
                                        onChange={this.handleChange.bind(this,'data6')}>
                                        <Option value="type1">类型一</Option>
                                        <Option value="type2">类型二</Option>
                                        <Option value="type3">类型三</Option>
                                        <Option value="type4">类型四</Option>
                                        <Option value="type5">类型五</Option>
                                    </Select>
                                        <em className="red">{this.state.errObj.data6}</em>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <Card cardHeadTit="任务管理">
                    <div className="complex-form">
                        <Row>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            任务名
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data1 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data1} onChange={this.handleChange.bind(this,'data1')} />
                                        <em className="red">{this.state.errObj.data1}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            任务描述
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data2 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data2} onChange={this.handleChange.bind(this,'data2')} />
                                        <em className="red">{this.state.errObj.data2}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            执行人
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data3 ? '' : 'input-wrapper-error'}>
                                    <Select defaultValue={this.state.data3}
                                        placeholder="请选择"
                                        onChange={this.handleChange.bind(this,'data3')}>
                                        <Option value="type1">类型一</Option>
                                        <Option value="type2">类型二</Option>
                                        <Option value="type3">类型三</Option>
                                        <Option value="type4">类型四</Option>
                                        <Option value="type5">类型五</Option>
                                    </Select>
                                        <em className="red">{this.state.errObj.data3}</em>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            责任人
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data4 ? '' : 'input-wrapper-error'}>
                                    <Select defaultValue={this.state.data4}
                                        placeholder="请选择"
                                        onChange={this.handleChange.bind(this,'data4')}>
                                        <Option value="type1">类型一</Option>
                                        <Option value="type2">类型二</Option>
                                        <Option value="type3">类型三</Option>
                                        <Option value="type4">类型四</Option>
                                        <Option value="type5">类型五</Option>
                                    </Select>
                                        <em className="red">{this.state.errObj.data4}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            生效日期
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data5 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data5} onChange={this.handleChange.bind(this,'data5')} />
                                        <em className="red">{this.state.errObj.data5}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            任务类型
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data6 ? '' : 'input-wrapper-error'}>
                                    <Select defaultValue={this.state.data6}
                                        placeholder="请选择"
                                        onChange={this.handleChange.bind(this,'data6')}>
                                        <Option value="type1">类型一</Option>
                                        <Option value="type2">类型二</Option>
                                        <Option value="type3">类型三</Option>
                                        <Option value="type4">类型四</Option>
                                        <Option value="type5">类型五</Option>
                                    </Select>
                                        <em className="red">{this.state.errObj.data6}</em>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <Card cardHeadTit="成员管理">
                    <div className="complex-form">
                        <Row>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            商户名称
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data1 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data1} onChange={this.handleChange.bind(this,'data1')} />
                                        <em className="red">{this.state.errObj.data1}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            开户银行
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data2 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data2} onChange={this.handleChange.bind(this,'data2')} />
                                        <em className="red">{this.state.errObj.data2}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            公司证件类型
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data3 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data3} onChange={this.handleChange.bind(this,'data3')} />
                                        <em className="red">{this.state.errObj.data3}</em>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            法人姓名
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data4 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data4} onChange={this.handleChange.bind(this,'data4')} />
                                        <em className="red">{this.state.errObj.data4}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            法人手机号
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data5 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data5} onChange={this.handleChange.bind(this,'data5')} />
                                        <em className="red">{this.state.errObj.data5}</em>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span="3"></Col>
                            <Col span="6">
                                <dl>
                                    <dt className="form-label">
                                        <label htmlFor="">
                                            公司证件号码
                                        </label>
                                    </dt>
                                    <dd className={!this.state.errObj.data6 ? '' : 'input-wrapper-error'}>
                                        <Input value={this.state.data6} onChange={this.handleChange.bind(this,'data6')} />
                                        <em className="red">{this.state.errObj.data6}</em>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <div className="btn-box">
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                </div>
            </div>
        )
    }
}

export default ComplexForm;