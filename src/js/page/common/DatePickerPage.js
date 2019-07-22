import React from 'react';
import Card from '../../../components/Card/Card';
import ContentHead from '../../../components/ContentHead/ContentHead';
import Footer from '../../../components/layout/Footer/Footer.js';
import DatePicker from '../../../components/DatePicker/DatePicker';
import MonthCalendar from '../../../components/DatePicker/MonthCalendar';
import WeekCalendar from '../../../components/DatePicker/WeekCalendar';
import RangeCalendar from '../../../components/DatePicker/RangeCalendar';
import TextType from '../../../components/TextType/TextType';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import '../../../scss/pageLayout/icon.scss';
class DatePickerPage extends React.Component {
    constructor() {
        super();
        this.state = {
            date: {
                value: null
            },
            month: {
                value: null
            },
            week: {
                value: null
            }
        }
    }
    dateChange = (date) => {
        this.setState({
            date: {
                value: date
            }
        });
    }
    monthChange = (month) => {
        this.setState({
            month: {
                value: month
            }
        });
    }
    weekChange = (week) => {
        this.setState({
            week: {
                value: week
            }
        });
    }
    render() {
        return (
            <div>
                <ContentHead title="DatePicker 日期选择器"></ContentHead>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="日期选择">
                            <div className="layout-no">
                                <DatePicker 
                                    value={this.state.date.value} 
                                    onChange={this.dateChange.bind(this)} />
                                <br />
                                <TextType type="first">基本</TextType>
                                <TextType>最简单的用法，在浮层中可以选择日期。</TextType>
                            </div>
                        </Card>
                    </Col>

                    <Col span="12">
                        <Card cardHeadTit="月份选择">
                            <div className="layout-no">
                                <MonthCalendar 
                                    value={this.state.month.value} 
                                    onChange={this.monthChange.bind(this)}/>
                                <br />
                                <TextType type="first">基本</TextType>
                                <TextType>在浮层中可以选择月份。</TextType>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="开始日期~结束日期">
                            <div className="layout-no">
                                <RangeCalendar />
                                <br />
                                <TextType type="first">基本</TextType>
                                <TextType>在浮层中可以选择开始和结束日期。</TextType>
                            </div>
                        </Card>
                    </Col>

                    <Col span="12">
                        <Card cardHeadTit="周选择">
                            <div className="layout-no">
                                <WeekCalendar 
                                    value={this.state.week.value} 
                                    onChange={this.weekChange.bind(this)} />
                                <br />
                                <TextType type="first">基本</TextType>
                                <TextType>在浮层中可以选择第几周。</TextType>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        )
    }
}

export default DatePickerPage;