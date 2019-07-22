import React from 'react';
import './Button.scss';
// import '../../scss/pageLayout/module.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            context: null,
            btnArr: ['btn']
        }
    }
    setClass() {
        this.state.btnArr = ['btn'];
        // 根据按钮type属性，设置按钮显示类别
        if (this.props.type == 'primary') {
            this.state.btnArr.push('btn-primary');
        }

        if (this.props.type == 'success') {
            this.state.btnArr.push('btn-success');
        }

        if (this.props.type == 'waring') {
            this.state.btnArr.push('btn-waring');
        }

        if (this.props.type == 'danger') {
            this.state.btnArr.push('btn-danger');
        }

        // 设置按钮的显示是否镂空
        if (this.props.plain) {
            this.state.btnArr.push('btn-plain');
        }

        // 设置按钮的显示是否可用
        if (this.props.disabled) {
            this.state.btnArr.push('btn-disabled');
        }

        // 设置按钮的显示形状
        if (this.props.round) {
            this.state.btnArr.push('is-round');
        }

        if (this.props.type == 'txt') {
            this.state.btnArr.push('btn-txt');
        }
    }

    render() {
        this.setClass();
        this.state.context = <button className={this.state.btnArr.join(' ')} onClick={this.props.onClick}>{this.props.children}</button>;

        return (this.state.context);
    }
}

export default Button;