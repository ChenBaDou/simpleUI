import React from "react";
import "./Select.scss";

const removeClass = (className, ...arg) => {
    let classNameArr = className.split(" ");

    arg.map(n => {
        classNameArr.indexOf(n) >= 0 &&
            classNameArr.splice(classNameArr.indexOf(n), 1);
    });

    return classNameArr;
};

/**
 * Select
 * props.onChange is function 参数是当前选择的数值, 返回字符串，多个值以‘,’逗号隔开
 * props.defaultValue 填写Option里的文本值。单个直接填写，多个请用数组['测试1', '测试2']
 * props.labelInValue 是否把label文本放进选中值里
 * props.disabled
 */
class Select extends React.PureComponent {
    constructor(props) {
        super(props);

        const defaultValue = this.props.defaultValue;
        const placeholder = this.props.placeholder;

        let initValue = [];

        if (Array.isArray(defaultValue)) {
            defaultValue.map((v, i) => {
                initValue.push({
                    txt: v
                });
            });
        } else if (defaultValue) {
            initValue.push({
                txt: defaultValue
            });
        } else {
            initValue.push({
                txt: placeholder
            });
        }

        let initSelectClass = [];
        let selectOptionClassName = {};

        initValue.map((v, i) => {
            if (v.txt !== placeholder) {
                selectOptionClassName[v.txt] = 'cur'
            }
        });

        // 默认值为本地数据，判断传入属性类型，当为字符串和数组，处理的方式不同
        initSelectClass = typeof defaultValue == 'string' ? defaultValue ? ["select", "default"] : ["select"] : Array.isArray(defaultValue) && defaultValue.length ? ["select", "default"] : ["select"];

        this.selectFocusClass = "focus selectOpen";
        this.selectFocusWarperOptionClass = "select-dropdown-show select-dropdown slide-up-enter";
        this.selectedValue = []; // 当前选中的选项的value值
        this.selectedLabel = []; // 当前选中的选项的value值
        this.removeItemNum = [];

        let childrens = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        // 为selectedValue数组，插入选中的值，当不传入labelInValue时只返回当前选项的value值，反之labelInValue为true则将当前选中的值以value|label的方式插入
        initValue.map((vi, ii) => {
            childrens.map((v, i) => {
                if (v.props.value == vi.txt) {
                    if (this.props.labelInValue) {
                        this.selectedValue.push(v.props.value + '|' + v.props.children);
                    } else {
                        this.selectedValue.push(v.props.value);
                    }
                    this.selectedLabel.push({
                        txt: v.props.children,
                        value: v.props.value,
                        class: ["zoom-in"]
                    })
                }
            })
        });

        if (this.selectedLabel.length === 0 && this.props.placeholder) {
            this.selectedLabel.push({
                txt: this.props.placeholder,
                class: ['zoom-in']
            });
        }

        this.state = {
            searchInput: '',
            selectClass: initSelectClass, // select class
            selectedValue: this.selectedLabel, // 设置选中的值
            selectWarperOptionClass: [
                "selectItemList",
                "select-dropdown-hidden"
            ], // 选项warper class
            selectInputClass: placeholder && !defaultValue ? "placeholder" : "", // 多选时无默认值class控制
            selectOptionClassName: selectOptionClassName
        };

        // 将当前选中的值回传给父组件
        // if(this.props.mode === 'multiple'){
        //     this.props.onChange(this.selectedValue);
        // }else{
        //     this.props.onChange(this.selectedValue.join(','));
        // }

        this.removeDuplicateClass = arr => Array.from(new Set(arr));

        this.handelClick = this.handelClick.bind(this);
        this.handelInpClick = this.handelInpClick.bind(this);
        this.handelBlur = this.handelBlur.bind(this);
        this.handleSelectOptionClick = this.handleSelectOptionClick.bind(this);
        this.handleSelectInputItemRemove = this.handleSelectInputItemRemove.bind(this);
    }

    componentWillReceiveProps(newprops) {
        // console.log('newprops==' , newprops);
        if (newprops.defaultValue == undefined) return;
        const defaultValue = newprops.defaultValue;
        const placeholder = newprops.placeholder;
        // console.log('defaultValue', defaultValue);
        let initValue = [];

        if (Array.isArray(defaultValue)) {
            defaultValue.map((v, i) => {
                initValue.push({
                    txt: v
                });
            });
        } else if (defaultValue) {
            initValue.push({
                txt: defaultValue
            });
        } else {
            initValue.push({
                txt: placeholder
            });
        }

        let selectOptionClassName = {};
        let initSelectClass = [];
        this.selectedLabel = [];
        this.selectedValue = [];

        initValue.map((v, i) => {
            if (v.txt !== placeholder) {
                selectOptionClassName[v.txt] = 'cur'
            }
        });

        // 默认值为接口返回，判断传入属性类型，当为字符串和数组，处理的方式不同
        initSelectClass = typeof defaultValue == 'string' ? defaultValue ? ["select", "default"] : ["select"] : Array.isArray(defaultValue) && defaultValue.length ? ["select", "default"] : ["select"];

        let childrens = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
        let selectInputClass = '';
        // 为selectedValue数组，插入选中的值，当不传入labelInValue时只返回当前选项的value值，反之labelInValue为true则将当前选中的值以value|label的方式插入
        initValue.map((vi, ii) => {
            childrens.map((v, i) => {
                if (v.props.value == vi.txt) {
                    if (this.props.labelInValue) {
                        this.selectedValue.push(v.props.value + '|' + v.props.children);
                    } else {
                        this.selectedValue.push(v.props.value);
                    }
                    this.selectedLabel.push({
                        txt: v.props.children,
                        value: v.props.value,
                        class: ["zoom-in"]
                    })
                }
            })
        });

        if (this.selectedLabel.length === 0 && this.props.placeholder) {
            selectInputClass = 'placeholder';
            this.selectedLabel.push({
                txt: this.props.placeholder,
                class: ['zoom-in']
            });
        }

        this.setState({
            selectClass: initSelectClass, // select class
            selectedValue: this.selectedLabel, // 设置选中的值
            selectOptionClassName: selectOptionClassName,
            selectInputClass: selectInputClass
        })
    }

    /**
     * 鼠标点击时触发的事件
     * @param {*} event 
     */
    handelClick(event) {
        // console.log('冒泡到父级别')
        event.stopPropagation();
        event.preventDefault();
        event.nativeEvent.stopImmediatePropagation();
        this.props.onSearch && this.refs.myInput.focus();
        if (this.state.selectClass.includes('focus selectOpen')) {
            this.handelSelectOptionHidden();
        } else {
            this.handelSelectOptionShow();
        }
    }

    /**
     * 切换select框时样式变化
     * @param {*} event 
     */
    handelSelectOptionShow(event) {
        let selectWarperOptionClass = [...this.state.selectWarperOptionClass];
        let seleceClass = [...this.state.selectClass];

        seleceClass.indexOf('selectClose') >= 0 && seleceClass.splice(
            selectWarperOptionClass.indexOf("selectClose"),
            1
        );

        selectWarperOptionClass.indexOf("select-dropdown-hidden") >= 0 && selectWarperOptionClass.splice(
            selectWarperOptionClass.indexOf("select-dropdown-hidden"),
            1
        );

        selectWarperOptionClass.indexOf("select-dropdown-up") >= 0 && selectWarperOptionClass.splice(
            selectWarperOptionClass.indexOf("select-dropdown-up"),
            1
        );

        selectWarperOptionClass.indexOf("slide-up-leave") >= 0 && selectWarperOptionClass.splice(
            selectWarperOptionClass.indexOf("slide-up-leave"),
            1
        );

        this.setState({
            selectClass: this.removeDuplicateClass([
                ...seleceClass,
                this.selectFocusClass
            ]),
            selectWarperOptionClass: this.removeDuplicateClass([
                ...selectWarperOptionClass,
                this.selectFocusWarperOptionClass
            ])
        });
    }

    /**
     * 切换select框时样式变化
     */
    handelSelectOptionHidden() {
        let selectClassName = [...this.state.selectClass];
        let selectWarperOptionClassName = [...this.state.selectWarperOptionClass];

        if (selectClassName.includes('selectClose')) {
            return false;
        }

        this.setState({
            selectClass: this.removeDuplicateClass([
                ...removeClass(
                    selectClassName.join(" "),
                    "focus",
                    "selectOpen"
                ),
                "selectClose"
            ]),
            selectWarperOptionClass: this.removeDuplicateClass([
                ...removeClass(
                    selectWarperOptionClassName.join(" "),
                    "select-dropdown-show",
                    "select-dropdown",
                    "slide-up-enter"
                ),
                "select-dropdown-up",
                "slide-up-leave"
            ])
        });
    }

    /**
     * 鼠标点击离开时触发的事件
     * @param {*} event 
     */
    handelBlur(event) {
        event.preventDefault();
        event.nativeEvent.stopImmediatePropagation();
        event.stopPropagation();

        this.handelSelectOptionHidden();
    }

    handleSelectOptionClick(event) {

        console.log('当前触发事件的元素')
        event.preventDefault();
        event.nativeEvent.stopImmediatePropagation();
        event.stopPropagation();
        this.setState({
            searchInput: ''
        });
        this.props.onSearch && this.props.onSearch('');
        console.log('event-nodeName', event.target.nodeName);

        if (event.target.nodeName == 'LI' || event.target.nodeName == 'SPAN' || event.target.nodeName == 'I') {
            let target = event.target.nodeName == 'LI' ? event.target : event.target.parentNode;
            let selectOptionClassNameObj = {};
            let selectedValueTmp = [];
            let txt = target.innerText;
            let value = target.getAttribute('value');
            let selectClass = [...this.state.selectClass];
            let timer = null;
            // console.log('event-target', target);

            if (target.className === 'disabled') {
                return false;
            }

            if (this.props.mode === 'multiple') {
                Object.assign(selectOptionClassNameObj, this.state.selectOptionClassName);
                selectedValueTmp = [...this.state.selectedValue];
            } else {
                this.selectedValue = [];
            }

            if (this.state.selectOptionClassName[value] === 'cur' && this.props.mode === 'multiple') {
                delete selectOptionClassNameObj[value];
                selectedValueTmp.map((v, i) => {
                    if (v.txt === txt) {
                        selectedValueTmp[i].class = ['zoom-in-leave', 'zoom-out'];
                        this.removeItemNum.push(i);
                        this.selectedValue.splice(i, 1);
                    }
                });
            } else {

                selectOptionClassNameObj[value] = 'cur';

                selectedValueTmp.push({
                    txt: txt,
                    value: value,
                    class: ['zoom-in', 'zoom-in-enter']
                });
                selectClass.push('default');

                if (this.props.labelInValue) {
                    this.selectedValue.push((value + '|' + txt));
                } else {
                    this.selectedValue.push(value);
                }

                if (selectedValueTmp[0].txt === this.props.placeholder) {
                    selectedValueTmp.splice(0, 1);
                }


            }

            selectClass = this.removeDuplicateClass(selectClass);

            this.setState({
                selectOptionClassName: selectOptionClassNameObj,
                selectedValue: selectedValueTmp,
                selectInputClass: selectedValueTmp.length > 0 ? '' : (this.props.placeholder && !this.props.defaultValue ? "placeholder" : ""),
                selectClass: selectClass
            }, () => {
                if (!this.props.mode) {
                    this.handelSelectOptionHidden();
                }
            });

            if (this.props.mode === 'multiple') {
                timer = setTimeout(() => {
                    let arr = [...selectedValueTmp];
                    let selectInputClass = '';

                    this.removeItemNum.map((v, i) => {
                        arr.splice(v, 1);
                        this.removeItemNum.splice(this.removeItemNum.indexOf(v), 1);
                    });

                    if (arr.length === 0 && this.props.placeholder) {
                        arr.push({
                            txt: this.props.placeholder,
                            class: ['zoom-in', 'zoom-in-enter']
                        });

                        selectInputClass = 'placeholder';
                        selectClass.splice(selectClass.indexOf('default'), 1);
                    }

                    this.setState({
                        selectedValue: arr,
                        selectInputClass: selectInputClass,
                        selectClass: selectClass
                    });
                }, 195);
            }

            let a = this.removeDuplicateClass(this.selectedValue);
            if (this.props.mode === 'multiple') {
                this.props.onChange(a);
            } else {
                this.props.onChange(a.join(','));
            }
        }
    }

    /**
     * 事件功能：多选操作 - 清除当前选中的数据
     * @param {*} event 当前选中的事件对象
     */
    handleSelectInputItemRemove(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        this.setState({
            searchInput: ''
        });
        this.props.onSearch && this.props.onSearch('');

        let selectOptionClassName = this.state.selectOptionClassName; // 包括清空数据在内的样式对象集合
        let selectedValue = [...this.state.selectedValue]; // 包括清空数据在内的选项
        let selectInputClass = this.state.selectInputClass;
        let selectClass = [...this.state.selectClass];
        let target = event.target;
        let txt = target.previousSibling.innerText; // 当前选中的选项
        let value = target.parentNode.getAttribute('value');
        let timer = null;

        // 从当前选中的option集合对象中删除选中的项目 
        delete selectOptionClassName[value];

        // 从选中的选项列表中删除选中的当前项目
        selectedValue.map((v, i) => {
            if (v.txt === txt) {
                selectedValue[i].class = ['zoom-in-leave', 'zoom-out'];
                this.selectedValue.splice(i, 1);
            }
        });

        this.setState({
            selectedValue: selectedValue
        });

        timer = setTimeout(() => {
            let arr = [...selectedValue];

            arr.map((v, i) => {
                if (v.txt === txt) {
                    arr.splice(i, 1);
                }
            });

            // 当删除所有选中的项目，输入框设置选项为placeholder的内容
            if (arr.length === 0 && this.props.placeholder) {
                selectInputClass = 'placeholder';
                arr.push({
                    txt: this.props.placeholder,
                    class: ['zoom-in']
                });
                selectClass.splice(selectClass.indexOf('default'), 1)
            }

            this.setState({
                selectedValue: arr,
                selectOptionClassName: selectOptionClassName,
                selectInputClass: selectInputClass,
                selectClass: selectClass
            });
        }, 0);

        if (this.props.mode === 'multiple') {
            this.props.onChange(this.selectedValue);
        } else {
            this.props.onChange(this.selectedValue.join(','));
        }
    }

    handelInpClick(e) {
        // console.log('点击input框')
        this.props.onSearch(e.target.value);
        this.setState({
            searchInput: e.target.value
        });
    }

    render() {
        const placeholder = this.props.placeholder || "请选择";
        const tabIndex = this.props.disabled ? '-1' : '0';
        let childrens = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        return (
            <div
                onBlur={this.handelBlur}
                tabIndex={tabIndex}
                className={this.state.selectClass.join(" ")}
                ref="select"
                >
                <div className="input"
                    onClick={this.handelClick}
                    >
                    {this.props.mode === "multiple" ? (
                        <ul className={this.state.selectInputClass}>
                            {this.state.selectedValue.map((v, index) =>
                                v.txt !== placeholder ? (
                                    <li
                                        key={index}
                                        value={v.value}
                                        className={v.class.join(" ")}
                                    >
                                        <span>{v.txt}</span>
                                        <i
                                            onClick={this.handleSelectInputItemRemove}
                                            className="icon icon-guanbi-xiao"
                                        />
                                    </li>
                                ) : (
                                        <li key={v.txt}>
                                            <span>{v.txt}</span>
                                        </li>
                                    )
                                    
                            )}
                            {/* <li className="select-search-wrap">
                                <input placeholder="" className="select-search" value={this.state.searchInput} onChange={this.handelInpClick}/>
                            </li> */}
                        </ul>
                    ) : (
                            <div className="text-box">
                                <span className="text" style={{display:this.state.searchInput.length > 0 ? 'none' : 'block'}}>{this.state.selectedValue.map(v => v.txt)}</span>
                                {
                                    this.props.onSearch ? <input ref="myInput" placeholder="" className="select-search" value={this.state.searchInput} onChange={this.handelInpClick} /> : ''
                                    // <input placeholder="" className="select-search" onChange={this.handelInpClick} />
                                }
                            </div>
                        )}
                    <i className="arrow icon icon-xiajiantou" />
                </div>
                <ul
                    // onClick={this.handleSelectOptionClick} 
                    onMouseDown={this.handleSelectOptionClick} 
                    className={this.state.selectWarperOptionClass.join(" ")}
                >
                    {
                        childrens.map((v, i) => {
                        return (<li className={v.props.disabled ? "disabled" : (this.state.selectOptionClassName[v.props.value] || '')} key={i} value={v.props.value}>{v}</li>)
                    })
                }
                </ul>
            </div>
        );
    }
};

/**
 * Option
 */
class Option extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>{this.props.children}<i className="icon icon-xuanzhong" /></span>
        );
    }
};

Select.Option = Option;

export default Select;