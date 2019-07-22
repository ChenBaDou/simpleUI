import React from "react";
import NavTab from "../../../components/NavTab/NavTab";
import Button from "../../../components/Button/Button";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Footer from "../../../components/layout/Footer/Footer.js";
import "../../../scss/pageLayout/userSet.scss";

const NavContents = NavTab.NavContents;
const MenuItem = Dropdown.MenuItem;
const SubMenu = Dropdown.SubMenu;
const navs = [{
    name: "基本设置",
    number: "8",
    content: "1111111111111111"
}, {
    name: "安全设置",
    number: "18",
    content: "2222222222"
}, {
    name: "账号绑定",
    number: "28",
    content: "3333333333333333"
}, {
    name: "新消息通知",
    number: "28",
    content: "444444444444444"
}];

class UserSet extends React.Component {
    constructor() {
        super();
        this.state = {
            trigger: "click",
            contextMenu: "contextMenu",
            submenuIitle: "sub menu",
            className: ""
        };
    }

    onClick(className) {
        this.setState({
            className: className
        });
    }

    onClickMenuItem(item) {
        item != 3 && alert(item);
    }

    render() {
        return (
            <div className="set-box">
                <NavTab tabPosition="left" defaultActiveKey={0}>
                    {
                        navs.map((item, key) => {
                            return (
                                <NavContents tab={item.name} key={item.name}>
                                    {
                                        [1, 2, 3, 4].map((item) => {
                                            return (
                                                <div key={item}>{item.content}</div>
                                            );
                                        })
                                    }
                                </NavContents>
                            );
                        })
                    }
                </NavTab>
                <Dropdown trigger={this.state.trigger} contextMenu={this.state.contextMenu}
                          onClickMenu={this.onClick.bind(this)} title='下拉菜单'>
                    <ul>
                        {
                            [1, 2, 3].map((item, key) => {
                                return (
                                    <li key={item}>
                                        {
                                            item == 2 ?
                                                <SubMenu title={this.state.submenuIitle} trigger={this.state.trigger}
                                                         className={this.state.className}>
                                                    <MenuItem trigger={this.state.trigger}
                                                              className={this.state.className}
                                                              disabled={item == 3 ? true : false} item={item}
                                                              onClickMenuItem={this.onClickMenuItem.bind(this, item)}
                                                    >
                                                        {item + "st"}
                                                    </MenuItem>
                                                    <MenuItem trigger={this.state.trigger}
                                                              className={this.state.className}
                                                              disabled={item == 3 ? true : false} item={item}
                                                              onClickMenuItem={this.onClickMenuItem.bind(this, item)}
                                                    >
                                                        {item + "st"}
                                                    </MenuItem>
                                                </SubMenu>
                                                :
                                                <MenuItem trigger={this.state.trigger} className={this.state.className}
                                                          disabled={item == 3 ? true : false} item={item}
                                                          onClickMenuItem={this.onClickMenuItem.bind(this, item)}
                                                >
                                                    {item + "st"}
                                                </MenuItem>
                                        }
                                    </li>
                                );
                            })
                        }
                    </ul>
                </Dropdown>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default UserSet;