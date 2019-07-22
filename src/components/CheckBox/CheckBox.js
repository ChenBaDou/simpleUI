import React from 'react';
// import checkboxStyle from './CheckBox.scss';
import './CheckBox.scss';
import ElementUtils from "../../js/common/ElementUtils";

/**
 * CheckBox
 * props.onChange 选择时触发回调 is function 参数是当前选择的值, 返回布尔。ex:true/false
 * props.checked 指定当前是否选中
 * props.indeterminate 混合状态(半选)
 * props.disabled 失效状态
 */
class CheckBox extends React.Component {
    constructor(props) {
        super(props);

        this.checkboxWrapper = React.createRef();

        this.state = {
            hover: false
        };
        // this.checkedToggle = this.checkedToggle.bind(this);

    }

    /**
     * 选择框最外层需要的class
     * @returns {string}
     */
    getCheckboxWrapperClassName(){
        let result = ['checkbox-wrapper'];
        // let result = [checkboxStyle.checkbox-wrapper];

        if(!utils.isEmpty(this.props.disabled) && this.props.disabled){
            result.push('checkbox-disabled');
            // result.push(checkboxStyle.checkbox-disabled);
        }

        if(this.state.hover){
            result.push('checkbox-hover');
        }

        if(!utils.isEmpty(this.props.checked) && this.props.checked){
            result.push('checkbox-checked');
        }

        if(!utils.isEmpty(this.props.indeterminate) && this.props.indeterminate && (utils.isEmpty(this.props.checked) || !this.props.checked)){
            result.push('checkbox-indeterminate');
        }

        return result.join(' ');
    }

    /**
     * 点击事件
     * @param e
     * @returns {boolean}
     */
    checkedToggle(e) {
        if (this.props.disabled) {
            return false;
        }
        this.props.onChange(!this.props.checked, this.checkboxWrapper.current)
    }

    /**
     * 鼠标悬停-进入
     * @param e
     */
    checkedMouseOver(e) {
        if (this.props.disabled) {
            return false;
        }

        this.setState({hover: true});
    }

    /**
     * 鼠标悬停-离开
     * @param e
     */
    checkedMouseLeave(e) {
        if (this.props.disabled) {
            return;
        }

        this.setState({hover: false});
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({disabled: nextProps.disabled || false});
    }

    render() {
        return (
            <div className={this.getCheckboxWrapperClassName()} ref={this.checkboxWrapper}
                 onClick={(e) => this.checkedToggle(e)}
                 onMouseOver={(e) => this.checkedMouseOver(e)}
                 onMouseLeave={(e) => this.checkedMouseLeave(e)}
            >
                <span className="checkbox"></span>
                <span className="checkbox-text">{this.props.children}</span>
            </div>

        );
    }
}


/**
 * CheckBoxGroup
 * props.onChange 选择时触发回调 is function 参数是当前选择的值, 返回布尔。ex:true/false
 * props.options 指定可选项, 返回list. ex: [{label: "选项一", value: 1}, {label: "选项2", value: 2}]
 * props.value 选中的选项, 返回list. ex: [1, 2]
 * props.disabled 整组失效状态, 返回布尔。ex:true/false
 */
class CheckBoxGroup extends React.Component {
    constructor(props) {
        super(props);

        this.checkboxWrapper = React.createRef();

        this.state = {
            options: this.getCheckboxGroupOptionList()
        };
        // this.checkedToggle = this.checkedToggle.bind(this);

    }

    /**
     * 获取options解析后的本组件要使用的数据
     * 在要props的基础上添加一些属性
     */
    getCheckboxGroupOptionList(){
        let itemOptions = [];
        for (var i = 0; i < this.props.options.length; i++) {
            var optionItem = this.props.options[i];
            if(this.props.value.includes(optionItem.value)){
                optionItem.checked = true;
            } else {
                optionItem.checked = false;
            }
            itemOptions.push(optionItem);
        }
        return itemOptions;
    }

    /**
     * 选择框组最外层需要的class
     * @returns {string}
     */
    getCheckboxGroupClassName(){
        let result = ['checkbox-group'];

        if(!utils.isEmpty(this.props.disabled) && this.props.disabled){
            result.push('checkbox-group-disabled');
        }

        return result.join(' ');
    }

    getCheckboxItemClassName(idx){
        let classNameArr = ['checkbox-item-wrapper'];

        if(!utils.isEmpty(this.state.options[idx].checked) && this.state.options[idx].checked){
            classNameArr.push('checkbox-item-checked');
        }

        return classNameArr.join(' ');
    }

    /**
     * 点击事件
     * @param e
     * @returns {boolean}
     */
    itemToggle(idx, e) {
        if (this.props.disabled) {
            return false;
        }
        // console.log(idx,'---',this.state.options[idx]);
        this.state.options[idx].checked = !this.state.options[idx].checked;
        let checkboxGroupValue = [];
        // this.setState({options: this.state.options});
        for (let i = 0; i < this.state.options.length; i++) {
            let optionItem = this.state.options[i];
            if(optionItem.checked){
                checkboxGroupValue.push(optionItem.value);
            }
        }

        // console.log('value:', checkboxGroupValue);
        this.props.onChange(checkboxGroupValue)
    }

    /**
     *
     * @returns {string}
     */
    getCheckboxItemList(){
        const checkboxItemList = this.state.options.map((item, index) =>
            <div className={this.getCheckboxItemClassName(index)}
                 key={'item'+(index+1)}
                 value={item.value}
                 onClick={(e) => this.itemToggle(index, e)}
            >
                <span className="checkbox-item"></span>
                <span className="checkbox-item-text">{item.label}</span>
            </div>
        );

        return (checkboxItemList);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({options: this.getCheckboxGroupOptionList()});
    }

    render() {
        return (
            <div className={this.getCheckboxGroupClassName()}>
                {this.getCheckboxItemList()}
            </div>

        );
    }
}

CheckBox.CheckBoxGroup = CheckBoxGroup;

export default CheckBox;