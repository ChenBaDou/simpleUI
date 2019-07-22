import React from "react";
import Card from "../../../components/Card/Card.js";
import ContentHead from "../../../components/ContentHead/ContentHead.js";
import Footer from '../../../components/layout/Footer/Footer.js';
import Dropdown from '../../../components/Dropdown/Dropdown';
import {
    Row,
    Col
} from "../../../components/Grid/Grid";

const MenuItem = Dropdown.MenuItem;
const SubMenu = Dropdown.SubMenu;
class CheckboxRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: {
                col1: 'hover',
                col2: 'click',
                col3: 'hover',
                col4: 'hover',
                col5: 'click',
                col6: 'click',
            },
            contextMenu: {
                col2: '',
                col5: 'contextMenu',
                col6: '',
            },
            submenuIitle: '多级标题',
            className: '',
        };
    }
    onClick(className) {
        this.setState({
            className: className,
        })
    }
    onClickMenuItem(item) {
        alert(item);
    }

    render() {
        return (
            <div>
                <ContentHead title="下拉菜单" />
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="触发类型 hover">
                            <div className="layout-no">
                                <Dropdown trigger={this.state.trigger.col1} title='hover me'>
                                    <ul>
                                        {
                                            [1,2,3].map((item,key)=>{
                                                return (
                                                    <li key={item}>
                                                        <MenuItem trigger={this.state.trigger.col1} className={this.state.className}
                                                        >
                                                            {item+'st'}
                                                        </MenuItem>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Dropdown>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="触发类型 点击">
                            <div className="layout-no">
                                <Dropdown trigger={this.state.trigger.col2} contextMenu={this.state.contextMenu.col2} onClickMenu={this.onClick.bind(this)} title='click me'>
                                    <ul>
                                        {
                                            [1,2,3].map((item,key)=>{
                                                return (
                                                    <li key={item}>
                                                        <MenuItem trigger={this.state.trigger.col2} className={this.state.className}
                                                        >
                                                            {item+'st'}
                                                        </MenuItem>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Dropdown>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="置灰某项">
                            <div className="layout-no">
                                <Dropdown trigger={this.state.trigger.col3} title='hover me'>
                                    <ul>
                                        {
                                            [1,2,3].map((item,key)=>{
                                                return (
                                                    <li key={item}>
                                                        <MenuItem trigger={this.state.trigger.col3} className={this.state.className} disabled={item == 3 ? true : false}
                                                        >
                                                            {item+'st'}
                                                        </MenuItem>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Dropdown>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="菜单多级">
                            <div className="layout-no">
                                <Dropdown trigger={this.state.trigger.col4} title='hover me'>
                                    <ul>
                                        {
                                            [1,2,3].map((item,key)=>{
                                                return (
                                                    <li key={item}>
                                                        {
                                                            item == 2  ?
                                                                <SubMenu title={this.state.submenuIitle} trigger={this.state.trigger.col4} className={this.state.className}>
                                                                    {
                                                                        [1,2,3].map((item)=>{
                                                                            return (
                                                                                <MenuItem key={item}
                                                                                    trigger={this.state.trigger.col4} className={this.state.className}
                                                                                >
                                                                                    {item+'st'}
                                                                                </MenuItem>
                                                                            )
                                                                        })
                                                                    }
                                                                </SubMenu>
                                                                :
                                                                <MenuItem trigger={this.state.trigger.col4} className={this.state.className}
                                                                >
                                                                    {item+'st'}
                                                                </MenuItem>
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Dropdown>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <Card cardHeadTit="触发类型 right-click">
                            <div className="layout-no">
                                <Dropdown trigger={this.state.trigger.col5} contextMenu={this.state.contextMenu.col5} onClickMenu={this.onClick.bind(this)} title='right-click me'>
                                    <ul>
                                        {
                                            [1,2,3].map((item,key)=>{
                                                return (
                                                    <li key={item}>
                                                        <MenuItem key={item} trigger={this.state.trigger.col5} className={this.state.className}>
                                                            {item+'st'}
                                                        </MenuItem>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Dropdown>
                            </div>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card cardHeadTit="每一项独立触发事件">
                            <div className="layout-no">
                                <Dropdown trigger={this.state.trigger.col6} onClickMenu={this.onClick.bind(this)} title='click me'>
                                    <ul>
                                        {
                                            [1,2,3].map((item,key)=>{
                                                return (
                                                    <li key={item}>
                                                        <MenuItem trigger={this.state.trigger.col6} className={this.state.className} item={item}
                                                                  onClickMenuItem={this.onClickMenuItem.bind(this,(item+'st'))}
                                                        >
                                                            {item+'st（可点击）'}
                                                        </MenuItem>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Dropdown>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default CheckboxRadio;