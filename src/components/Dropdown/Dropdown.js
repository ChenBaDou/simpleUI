import React from 'react';
import Button from '../Button/Button';
import './dropdown.scss';

/**
 * Dropdown                  组件所传属性描述
 * trigger                   下拉触发方式 (string)    click  hover
 * onClickMenu             点击更换classname (funtion)
 * contextMenu             下拉方式为鼠标右击 (string) contextMenu
 * title                    下拉菜单的名称 (string) 文本内容
 */
class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.checkboxWrapper = React.createRef();

        this.state = {
            trigger : props.trigger,
            clickX: null,
            visible:false,
            flag:false,
        }
    }
    componentDidMount(){
        document.addEventListener('click', this._handleClick);
        document.addEventListener('scroll', this._handleScroll);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleClick);
        document.removeEventListener('scroll', this._handleScroll);
    }
    _handleContextMenu = (event) => {
        // this.setState({ visible:false });//当点击其他地方右键时可以根据需求来判断是否需要先关闭菜单
        event.preventDefault();
        this.setState({ visible: true });
        const clickX = event.clientX;
        this.refs.testDiv.style.left = clickX + 'px';
        this.refs.testDiv.style.position = 'absolute';


        this.props.contextMenu && this.showMenu();
    };

    _handleClick = () => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.root);

        if (wasOutside && visible) this.setState({ visible: false, });
    };

    _handleScroll = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false, });
    };


    showMenu(){
        let trigger = this.props.trigger
        ;
        if(trigger == 'hover'){
            return false;
        }
        // this.setState({
        //     trigger : this.state.trigger ? '' : 'click',
        // });
        this.setState({
            flag : this.state.flag ? false : true,
        });
        this.props.onClickMenu(this.state.trigger);
    }
    render(){
        return (
            <div ref={this.checkboxWrapper} className={'dropdown-box '+this.props.trigger}
                 onClick={()=>{this.props.trigger == 'click' && this.showMenu()}}
                 onContextMenu={(e)=>{this.props.contextMenu  && this._handleContextMenu(e)}}
            >
                <Button type="txt" >
                    {this.props.title}<i className="icon icon-xiajiantou" />
                </Button>
                <div ref={'testDiv'}>
                    {this.props.contextMenu ? (this.state.visible && this.props.children) : (
                        this.props.trigger == 'click' ? (this.state.flag && this.props.children) : this.props.children)}
                </div>
            </div>
        )
    }
}

/**
 * MenuItem                  组件所传属性描述
 * trigger                   下拉触发方式 (string)    click  hover
 * className             点击更换classname (string)
 * disabled              置灰状态  true：灰  false ：正常
 * item                  单独项的数据 （看传什么值）
 * onClickMenuItem       点击某个单独的项执行动作 (funtion)
 */
class  MenuItem extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    menuAction(){
        this.props.onClickMenuItem && this.props.onClickMenuItem();
    }
    render(){
        return(
           <div className={'menuItem dropdownType-' + (this.props.trigger == 'hover' ? this.props.trigger : this.props.className) +
           ' '+ (this.props.disabled ? 'disabled' : '')}
                onClick={this.menuAction.bind(this)}
           >
               {this.props.children}
           </div>
        )
    }
}

/**
 * SubMenu                  组件所传属性描述
 * title                   有多级项的父级名称 (string)
 * className             点击更换classname (string)
 * trigger               下拉触发方式 (string)    click  hover
 */
class  SubMenu extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <div className={'submenu dropdownType-' + (this.props.trigger == 'hover' ? this.props.trigger : this.props.className)}>
                {this.props.title}
                <i className="icon icon-youjiantou"></i>
                <div className={'submenuItem-box'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Dropdown.MenuItem = MenuItem;
Dropdown.SubMenu = SubMenu;

export default Dropdown;