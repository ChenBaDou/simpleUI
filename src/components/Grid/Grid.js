import React from "react";
import "./Grid.scss";
/**
 * Row
 * props: justify -> start (default), center, end, space-between, space-around
 * props: align - > top (default), center, bottom
 * ex: <Row justify="center" align="center"></Row>
 */

 const removeDuplicateClass = arr => Array.from(new Set(arr));;

class Row extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: ["row"],
            context: null
        };

        this.setClass();
    }

    setClass() {
        let justify = '',
            align = '';

        if (this.props.justify) {
            switch (this.props.justify) {
                case 'end':
                    justify = 'row-flex-justify-end';
                    break;
                case 'center':
                    justify = 'row-flex-justify-center';
                    break;
                case 'space-around':
                    justify = 'row-flex-justify-space-around';
                    break;
                case 'space-between':
                    justify = 'row-flex-justify-space-between';
                    break;
                default:
                    justify = 'row-flex-justify-start';
                    break;
            }
        }

        if (this.props.align) {
            switch (this.props.align) {
                case 'middle':
                    align = 'row-flex-align-middle';
                    break;
                case 'bottom':
                    align = 'row-flex-align-bottom';
                    break;
                default:
                    align = 'row-flex-align-top';
                    break;
            }
        }

        this.props.justify && this.state.className.push(justify);
        this.props.align && this.state.className.push(align);

        removeDuplicateClass(this.state.className);
    }

    render() {
        return (
            <div className={this.state.className.join(" ")}>
                {this.props.children}
            </div>
        );
    }
}


/**
 * 分割成24个网格，每格宽度是100%/24
 * Col
 * props: span (Number) ->  1,2,3,4,5,6...24
 * props: offset(Number) - > -24 -- 24 取值区间, 没有0
 * ex: <Col span="12" offset="1"></Col>
 */
class Col extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: ["col"],
            context: null
        };
        this.setClass();
    }

    setClass() {
        let span = "";
        let offset = "";

        this.props.span && (span = "col-" + this.props.span);
        this.props.offset && (offset = this.props.offset > 0 ? "col-offset-" + this.props.offset : "col-right-offset-" + Math.abs(this.props.offset));

        span && this.state.className.push(span);
        offset && this.state.className.push(offset);
        removeDuplicateClass(this.state.className);
    }

    render(props) {

        return (
            <div className={this.state.className.join(" ")}>
                {this.props.children}
            </div>
        );
    }
}

export {
    Row,
    Col
};