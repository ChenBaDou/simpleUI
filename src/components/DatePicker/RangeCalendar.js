import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar/lib/RangeCalendar';
import Picker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import './datePicker.scss';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

// moment.locale('zh-cn');
// const cn = location.search.indexOf('cn') !== -1;
const cn = 1;

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = (
    <TimePickerPanel
    defaultValue={[moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]}
  />
);

function newArray(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

const formatStr = 'YYYY-MM-DD';

function format(v) {
    return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
    return v && v[0] && v[1];
}

function onStandaloneChange(value) {
    console.log('onChange');
    console.log(value[0] && format(value[0]), value[1] && format(value[1]));
}

function onStandaloneSelect(value) {
    console.log('onSelect');
    console.log(format(value[0]), format(value[1]));
}

class RangeCalendar extends React.Component {
    state = {
        value: [],
        hoverValue: [],
    }

    onChange = (value) => {
        console.log('onChange', value);
        this.setState({
            value
        });
    }

    onHoverChange = (hoverValue) => {
        this.setState({
            hoverValue
        });
    }

    render() {
        const state = this.state;
        const calendar = (<Calendar hoverValue={state.hoverValue}
                                    onHoverChange={this.onHoverChange}
                                    dateInputPlaceholder={['开始日期', '结束日期']}
                                    defaultValue={[now, now.clone().add(1, 'months')]}
                                    locale={cn ? zhCN : enUS} />);
        return (<Picker value={state.value}
                        onChange={this.onChange}
                        animation="slide-up"
                        calendar={calendar}>
                    {
                        ({ value }) => {
                        return (<div className="range-calendar-picker-box">
                                    <input placeholder="开始日期" 
                                            className="calendar-range-picker-input" 
                                            readOnly 
                                            value={isValidRange(value) && format(value[0]) || ''} />
                                    <span className="calendar-range-picker-separator"> ~ </span>
                                    <input placeholder="结束日期" 
                                            className="calendar-range-picker-input" 
                                            readOnly 
                                            value={isValidRange(value) && format(value[1]) || ''} />
                                    <i className="icon icon-rili"></i>
                                </div>);
                        }
                    }
                </Picker>);
    }
}


export default RangeCalendar;