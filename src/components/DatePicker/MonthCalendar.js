import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar/lib/MonthCalendar';
import Picker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import './datePicker.scss';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

moment.locale('zh-cn');
const format = 'YYYY-MM';
// const cn = location.search.indexOf('cn') !== -1;
const cn = 1;

// const now = moment();
// if (cn) {
//     now.locale('zh-cn').utcOffset(8);
// } else {
//     now.locale('en-gb').utcOffset(0);
// }

class MonthCalendar extends React.Component {
    static propTypes = {
        value: PropTypes.object,
    }
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    onChange = (value) => {
        this.setState({
            value
        });
        this.props.onChange(value);
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            value: newProps.value
        })
    }
    render() {
        const calendar = (<Calendar locale={cn ? zhCN : enUS} style={{ zIndex: 1000 }} />);
        return (<Picker animation="slide-up"
                        calendar={calendar}
                        value={this.state.value}
                        onChange={this.onChange} >
                        {
                            ({ value }) => {
                                return (<div className="calendar-picker-box">
                                            <input className="date-picker-input" 
                                                        readOnly
                                                        value={value && value.format(format)||''} 
                                                        placeholder="请选择月份" />
                                            <i className="icon icon-rili"></i>
                                        </div>);
                            }
                        }
                </Picker>);
    }
}


export default MonthCalendar;