import React from 'react';
import './NavTab.scss';

/**
 * NavTab                   组件所传属性描述
 * tabPosition  string      tab标题位置 top left right bottom
 * defaultActiveKey  number 默认所选下标
 * disabledKey      number  哪个下标不可选择
 * onChangeActiveKey      function  动态获取每个tab对应的内容
 */
class NavTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class:'nav-box-'+props.tabPosition,
            activeIndex:props.defaultActiveKey ? props.defaultActiveKey : 0,
        };
    }
    changeIndex(key){
        let props = this.props;
        if(props.disabledKey == key){
            return false;
        }
        this.setState({
            activeIndex : key,
        });
        this.props.onChangeActiveKey && this.props.onChangeActiveKey(key);
        [].forEach.call(this.refs.TabContentsPanels.childNodes, (v,i)=> {
            if(key == i){
                v.className = 'cur';
            }else{
                v.className = '';
            }
        })
    }
    componentDidMount(){
        this.refs.TabContentsPanels.childNodes[this.state.activeIndex].className = 'cur';
    }
    render() {

        return (
            <div className={'nav-box '+ this.state.class}>
                <ul className="nav-tab">
                    {
                        this.props.children.map((item,index)=>{
                            return (
                                <li key={index} className={'tab-title '+(this.state.activeIndex == index ? 'active' : '')+(this.props.disabledKey == index ? 'gray' : '')}
                                    onClick={this.changeIndex.bind(this,index)}>
                                    {item.props.tab}
                                </li>
                            )
                        })
                    }
                </ul>
                <div ref="TabContentsPanels" className="nav-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class  NavContents extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabs:null
        };
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

NavTab.NavContents = NavContents;

export default NavTab;