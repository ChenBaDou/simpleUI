import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import Picker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
// import 'rc-calendar/assets/index.css';
// import 'rc-time-picker/assets/index.css';
import './datePicker.scss';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

moment.locale('zh-cn');
const format = 'YYYY-MM-DD HH:mm:ss';
// const cn = location.search.indexOf('cn') !== -1;
const cn = 1;

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

function getFormat(time) {
    return time ? format : 'YYYY-MM-DD';
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = <TimePickerPanel value={moment('00:00:00', 'HH:mm:ss')} />;

class DatePicker extends React.Component {
    static propTypes = {
        value: PropTypes.object,
        defaultCalendarValue: PropTypes.object,
        disabled: PropTypes.bool
    }
    constructor(props) {
        super(props);
        this.state = {
            showTime: false,
            showDateInput: false,
            disabled: props.disabled,
            value: props.value,
            minValue: props.minValue,
            maxValue: props.maxValue
        };
    }
    onChange = (value) => {
        this.setState({
            value,
        });
        this.props.onChange(value);
    }
    toggleDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }
    disabledDate = (current) => {
        let {
            minValue,
            maxValue
        } = this.state
        if (!current) {
            return false;
        }
        if (minValue) {
            return current.valueOf() < minValue.valueOf();
        }
        if (maxValue) {
            return current.valueOf() > maxValue.valueOf();
        }
        return false;
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            value: newProps.value,
            minValue: newProps.minValue,
            maxValue: newProps.maxValue
        })
    }
    render() {
        const state = this.state;
        const calendar = (<Calendar locale={cn ? zhCN : enUS}
                            dateInputPlaceholder="请选择日期" 
                            format={getFormat(state.showTime)}
                            timePicker={state.showTime ? timePickerElement : null}
                            defaultValue={this.props.defaultCalendarValue}
                            showDateInput={state.showDateInput}
                            disabledDate={this.disabledDate} />);
        return (
            <Picker animation="slide-up" 
                    calendar={calendar} 
                    value={state.value} 
                    onChange={this.onChange} 
                    disabled={state.disabled}>
                {
                    ({ value }) => {
                        return (
                            <div className="calendar-picker-box">
                                <input placeholder="请选择日期" 
                                        disabled={state.disabled}  
                                        className="date-picker-input" 
                                        value={value && value.format(getFormat(state.showTime)) || ''} 
                                        readOnly />
                                <i className="icon icon-rili"></i>
                            </div>);
                    }
                }
            </Picker>);
    }
}


export default DatePicker;