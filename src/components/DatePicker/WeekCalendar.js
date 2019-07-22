import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
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

const format = 'YYYY-Wo';


class WeekCalendar extends React.Component {
    static propTypes = {
        defaultValue: PropTypes.object,
        defaultCalendarValue: PropTypes.object,
    }
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            open: false
        };
    }

    onChange = (value) => {
        this.setState({
            value,
        });
        this.props.onChange(value);
    }

    onOpenChange = (open) => {
        this.setState({
            open,
        });
    }

    dateRender = (current) => {
        const selectedValue = this.state.value;
        if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
            return (<div className="rc-calendar-selected-day">
                        <div className="rc-calendar-date">
                            {current.date()}
                        </div>
                    </div>);
        }
        return (<div className="rc-calendar-date">{current.date()}</div>);
    }

    render() {
        const state = this.state;
        const calendar = (
            <Calendar className="week-calendar" 
                    showWeekNumber 
                    dateRender={this.dateRender}
                    locale={cn ? zhCN : enUS}
                    format={format}
                    style={{ zIndex: 1000 }}
                    dateInputPlaceholder="请输入第几周"
                    defaultValue={now}
                    showDateInput={false} />);
        return (<Picker onOpenChange={this.onOpenChange}
                    open={this.state.open}
                    animation="slide-up"
                    calendar={calendar}
                    value={state.value}
                    onChange={this.onChange}>
                    {
                        ({ value }) => {
                            return (
                                <div className="calendar-picker-box">
                                    <input placeholder="请选择周"  
                                        className="date-picker-input" 
                                        value={value && value.format(format) || ''} 
                                        readOnly />
                                    <i className="icon icon-rili"></i>
                                </div>);
                        }
                    }
                </Picker>);
    }
}



export default WeekCalendar;