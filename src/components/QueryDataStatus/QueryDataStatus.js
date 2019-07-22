import React from 'react';
import {
    PropTypes
} from 'prop-types';
import "./QueryDataStatus.scss";
import staticUrl from "../../js/common/static_url";

class QueryDataStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props;

        return (
            <div className={props.queryStatus == 0 || props.queryStatus == 1 ? 'query-status' : 'none'} >
                <img className={props.queryStatus == 1 ? '' : 'none'} src={`${staticUrl}/resouce/no-data.svg`} />
                <p className={props.queryStatus == 0 ? '' : 'none'}>数据查询中...</p> 
                <p className={props.queryStatus == 1 ? '' : 'none'}>暂无数据!</p> 
            </div>
        )
    }
}

export default QueryDataStatus;