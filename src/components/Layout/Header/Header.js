import React from 'react';
import NavTab from '../../../components/NavTab/NavTab';
import './header.scss';

const NavContents = NavTab.NavContents;
const tongzhiObj = [{
    title: '通知',
    number: 10,
    tongzhiArr: [{
        iconType: 'tongzhi-mianxing',
        text: '你收到了 10 份新周报',
    }, {
        iconType: 'tuding-mianxing',
        text: '你收到了 10 份新周报',
    }]
}, {
    title: '消息',
    number: 20,
    tongzhiArr: [{
        iconType: 'tianjia',
        text: '你收到了 20 份新周报',
    }, {
        iconType: 'shoucang-mianxing',
        text: '你收到了 20 份新周报',
    }]
}, {
    title: '代办',
    number: 30,
    tongzhiArr: [{
        iconType: 'tongzhi-mianxing',
        text: '你收到了 30 份新周报',
    }]
}];
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: true,
            activeKey: 1
        }
    }
    toggleMenu = () => {
        this.setState({
            menuState: !this.state.menuState
        });
        this.props.toggleMenu();
    }
    onChangeActiveKey(activeIndex) {
        this.setState({
            activeKey: activeIndex
        })
    }
    render() {
        return (
            <div className="layout-header">
                <ul>
                    <li className="set-menu" onClick={this.toggleMenu.bind(this)}>
                        <i className={`icon icon-${this.state.menuState?'xiangzuoshensuo':'xiangyouzhankai'}`}></i>
                    </li>
                    <li className="internationalization">
                        <i className="icon icon-yuyanqiehuan"></i>
                        <ul>
                            <li><i className="icon icon-yuyanqiehuan"></i>简体中文</li>
                            <li><i className="icon icon-yuyanqiehuan"></i>繁体中文</li>
                            <li><i className="icon icon-yuyanqiehuan"></i>English</li>
                        </ul>
                    </li>
                </ul>
                <ul className="user-box">
                    <li>
                        <i className="icon icon-seban"></i>
                    </li>
                    <li>
                        <i className="icon icon-zuidahua"></i>
                    </li>
                    <li>
                        <i className="icon icon-bangzhu"></i>
                    </li>
                    <li className="user-tongzhi">
                        <i className="icon icon-xiaoxitongzhi"></i>
                        <NavTab tabPosition="top" defaultActiveKey={this.state.activeKey} onChangeActiveKey={this.onChangeActiveKey.bind(this)}>
                            {
                                tongzhiObj.map((item,index)=>{
                                    return (

                                        <NavContents tab={item.title+'('+item.number+')'} key={item.title}>
                                            <div>
                                                {   this.state.activeKey == index &&
                                                    tongzhiObj[index].tongzhiArr.map((item,key)=>{
                                                        return (
                                                            <div key={item.iconType}>
                                                                <i className={'icon icon-'+item.iconType}></i>{item.text}
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div>清空通知</div>
                                            </div>
                                        </NavContents>
                                    )
                                })
                            }
                        </NavTab>
                    </li>
                    <li className="user-name">
                        <img src="../resouce/user.png" alt="user" />
                        <span>Edward</span>
                        <ul>
                            <li><i className="icon icon-geren"></i>个人中心</li>
                            <li><i className="icon icon-gerenshezhi"></i>个人设置</li>
                            <li><i className="icon icon-guanbishibaixianxing"></i>触发报错</li>
                            <li><i className="icon icon-tuichudenglu"></i>退出登录</li>
                        </ul>
                    </li>
                    <li>
                        <i className="icon icon-shezhi"></i>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;