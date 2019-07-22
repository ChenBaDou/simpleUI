import React from "react";
import {
    createPortal
} from "react-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./Modal.scss";
import Button from "../../components/Button/Button.js";
// import Transition from "../../components/Transition/Transition.js";

/**
 * Modal 组件所传属性描述
 * visible          对话框是否可见      boolean
 * type             对话框类型         string            不传值，默认样式
 * width            对话框宽度         string|number
 * title            标题              string|ReactNode
 * children         主体              string|ReactNode
 * header           头部              string|ReactNode   默认对话框：不传值，显示默认头部，带标题； 传!null，不显示底部；传节点，自定义底部内容
 * footer           底部              string|ReactNode   默认对话框：不传值，显示默认底部，带确认取消按钮； 传!null，不显示底部；传节点，自定义底部内容
 * okText           确认按钮文字       string|ReactNode
 * cancelText       取消按钮文字       string|ReactNode 
 * picture_path     图片路径
 * closeIcon        右上角的x号        string         写属性是没有x号
 */

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleMaskClick = this.handleMaskClick.bind(this);

        this.state = {
            visible: false
        };

        this.node = document.createElement('div');
        document.body.appendChild(this.node);
    }

    componentDidMount() {
        this.setState({
            visible: this.props.visible
        });
    }

    componentWillReceiveProps(props) {
        // console.log(props);
    }

    // 点击确认，更新modal中的 visible 状态
    handleOk() {
        const {
            onOk
        } = this.props;
        onOk && onOk();
    }

    // 点击取消，更新modal中的 visible 状态
    handleCancel() {
        const {
            onCancel
        } = this.props;
        onCancel && onCancel();
    }

    // 点击蒙层，更新modal中的 visible 状态
    handleMaskClick() {
        this.setState({
            visible: false
        })
    }

    render() {
        const {
            visible,
            type,
            width,
            title,
            children,
            header,
            footer,
            okText,
            cancelText,
            picture_path,
			closeIcon
        } = this.props;

        if (!visible) {
            return null;
        }
        const style = {
            width: width + 'px'
        };

        const defaultHeader = (
            <div className="modal-header">
                <div className="modal-title">{title}</div>
            </div>
        );

        const defaultFooter = (
            <div className="modal-footer">
                <Button onClick={this.handleCancel}>{cancelText}</Button>
                <Button type="primary" onClick={this.handleOk}>{okText}</Button>
            </div>
        );

        let modalLayout = null;

        switch (type) {
            case 'confirm':
                modalLayout = (
                    <div className="modal modal-confirm modal-confirm-confirm" style={style}>                                
                        <div className="modal-content">
                            <div className="modal-confirm-body">
                                <div className="modal-confirm-title"><i className="icon icon-bangzhu confirm"></i>{title}</div>
                                <div className="modal-confirm-content">{children}</div>
                            </div>
                            <div className="modal-confirm-btns">
                                <Button onClick={this.handleCancel}>{cancelText}</Button>
                                <Button type="primary" onClick={this.handleOk}>{okText}</Button>
                            </div>
                        </div>                                
                    </div>
                );
                break;
            case 'info':
                modalLayout = (
                    <div className="modal modal-confirm modal-confirm-info" style={style}>                                
                        <div className="modal-content">
                            <div className="modal-confirm-body">
                                <div className="modal-confirm-title"><i className="icon icon-xinxi-xianxing info"></i>{title}</div>
                                <div className="modal-confirm-content">{children}</div>
                            </div>
                            <div className="modal-confirm-btns">
                                <Button type="primary" onClick={this.handleOk}>{okText}</Button>
                            </div>
                        </div>                                
                    </div>
                );
                break;
            case 'success':
                modalLayout = (
                    <div className="modal modal-confirm modal-confirm-success" style={style}>                                
                        <div className="modal-content">
                            <div className="modal-confirm-body">
                                <div className="modal-confirm-title"><i className="icon icon-jieguoye success"></i>{title}</div>
                                <div className="modal-confirm-content">{children}</div>
                            </div>
                            <div className="modal-confirm-btns">
                                <Button type="primary" onClick={this.handleOk}>{okText}</Button>
                            </div>
                        </div>                                
                    </div>
                );
                break;
            case 'error':
                modalLayout = (
                    <div className="modal modal-confirm modal-confirm-error" style={style}>                                
                        <div className="modal-content">
                            <div className="modal-confirm-body">
                                <div className="modal-confirm-title"><i className="icon icon-guanbishibaixianxing error"></i>{title}</div>
                                <div className="modal-confirm-content">{children}</div>
                            </div>
                            <div className="modal-confirm-btns">
                                <Button type="primary" onClick={this.handleOk}>{okText}</Button>
                            </div>
                        </div>                                
                    </div>
                );
                break;
            case 'warning':
                modalLayout = (
                    <div className="modal modal-confirm modal-confirm-warning" style={style}>                                
                        <div className="modal-content">
                            <div className="modal-confirm-body">
                                <div className="modal-confirm-title"><i className="icon icon-xinxi-xianxing warning"></i>{title}</div>
                                <div className="modal-confirm-content">{children}</div>
                            </div>
                            <div className="modal-confirm-btns">
                                <Button type="primary" onClick={this.handleOk}>{okText}</Button>
                            </div>
                        </div>                                
                    </div>
                );
                break;
            case 'picture_view':
                modalLayout = (
                    <div className="modal picture-view-modal" style={style}>
                        <div className="modal-close" onClick={this.handleCancel}>
							{
								this.props.closeIcon === 'hide' ?
									'':
									<i className="icon icon-guanbi-xiao"></i>
							}
                        </div>
                        <div className="modal-header">
                            <div className="modal-title">{title}</div>
                        </div>
                        <div className="modal-content">
                            <img src={picture_path} />
                        </div>                      
                    </div>
                );
                break;
            default:
                modalLayout = (
                    <div className="modal" style={style}>
                        <div className="modal-close" onClick={this.handleCancel}>
							{
								this.props.closeIcon === 'hide' ?
									'':
									<i className="icon icon-guanbi-xiao"></i>
							}
                        </div>
                        {!header ? defaultHeader : header}
                        <div className="modal-content">
                            {children}
                        </div>
                        {!footer ? defaultFooter : footer}
                    </div>
                );
                break;
        }

        return (
            createPortal(
                <div className="modal-wrapper">
                    {modalLayout}
                    <div className="mask" onClick={this.handleMaskClick}></div>
                </div>, //塞进传送门的JSX
                this.node //传送门的另一端DOM node
            )
        );
    }

    componentWillUnmount() {
        document.body.removeChild(this.node);
    }
}

export default Modal;