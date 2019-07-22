import React from 'react';
import './Menu.scss';

/**
 * Menu                   组件所传属性描述
 * onClick   自定义触发事件
 * style     整个菜单的宽度
 * theme     主题色
 * model     缩起/展开
 */
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onClick(e) {
        let {
            onClick
        } = this.props;
        if (onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <ul style={this.props.style} className={'ui-menu '+this.props.theme + ' ' + this.props.model} onClick={(e)=>{this.onClick(e)}}>
                {this.props.children}
            </ul>
        )
    }
}

/**
 * SubMenu                   组件所传属性描述
 * key       避免重复渲染的标记作用
 * defaultOpenKeys     默认打开的某个下拉
 *  model     缩起/展开
 */
class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: !props.defaultOpenKeys ? 'menu-sub-li' : 'menu-sub-li ui-menu-submenu-open',
            ShowModel: !props.defaultOpenKeys ? 'none' : 'block',
        };
    }

    changeTitlename() {
        let className = this.state.class,
            ShowModel = this.state.ShowModel;

        if (className === 'menu-sub-li') {
            this.setState({
                class: 'menu-sub-li ui-menu-submenu-open',
            });
        } else {
            this.setState({
                class: 'menu-sub-li',
            });
        }

        if (ShowModel === 'none') {
            this.setState({
                ShowModel: 'block',
            });
        } else {
            this.setState({
                ShowModel: 'none',
            });
        }
    }
    //这么写是为了让onclick里面的事件是有事件在的，要不然会报错
    noUse() {

    }

    // onMouseOver() {
    //     this.props.model === 'hide' && this.changeTitlename();
    // }
    // onMouseOut() {
    //     this.props.model === 'hide' && this.changeTitlename();
    // }
    componentWillReceiveProps(nextProps) {
        this.setState({
            class: !nextProps.defaultOpenKeys ? 'menu-sub-li' : 'menu-sub-li ui-menu-submenu-open',
            ShowModel: !nextProps.defaultOpenKeys ? 'none' : 'block',
        });
    }
    render() {
        return (
            <li className={this.state.class}>
                {/*onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}*/}
                <div className="ui-menu-submenu-title"
                     onClick={(!this.props.model || this.props.model === 'show') ? this.changeTitlename.bind(this) : this.noUse.bind(this)}
                >{this.props.title}
                    <i className="ui-menu-submenu-arrow"></i>
                </div>
                {/*{(this.state.class === 'ui-menu-submenu-title ui-menu-submenu-open') && (<ul>{this.props.children}</ul>)}*/}
                {/*此种写法来控制显示隐藏为避免render重新渲染样式不保留*/}
                {/*<ul style={{display:this.state.ShowModel}}>{this.props.children}</ul>*/}
                <ul>{this.props.children}</ul>
            </li>
        )
    }
}

/**
 * MenuItemGroup                   组件所传属性描述
 * key       避免重复渲染的标记作用
 */
class MenuItemGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <li>
                <div className="ui-menu-item-group-title" style={{marginLeft:'-10px'}}>{this.props.title}
                    <i className="ui-menu-submenu-arrow"></i>
                </div>
                <ul>
                    {this.props.children}
                </ul>
            </li>
        )
    }
}

/**
 * Item                   组件所传属性描述
 * key       避免重复渲染的标记作用
 * defaultSelectedKeys       默认选中的某个选项 （！！必须写在有defaultOpenKeys的sub上）
 */
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    changeClassName(e) {
        let allI = document.querySelectorAll('li.ui-menu-item');
        for (let i = 0; i < allI.length; i++) {
            allI[i].className = 'ui-menu-item';
        }
        if (e.target.nodeName != 'LI') {
            e.target.parentNode.className = 'ui-menu-item ui-menu-item-selected';
        } else {
            e.target.className = 'ui-menu-item ui-menu-item-selected';
        }
    }

    render() {
        return (
            <li className={!this.props.defaultSelectedKeys ? 'ui-menu-item' : 'ui-menu-item ui-menu-item-selected'} 
                onClick={(e)=>{this.changeClassName(e)}}
            >
                {this.props.children}
            </li>
        )
    }
}

Menu.SubMenu = SubMenu;
Menu.MenuItemGroup = MenuItemGroup;
Menu.Item = Item;

export default Menu;