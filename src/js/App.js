import React from "react";
import {
    render
} from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import '../scss/index.scss';
import menuMap from './common/MenuMap';
import Menu from '../components/Layout/Menu/Menu';
import Header from '../components/Layout/Header/Header';
import Message from '../components/Message/Message';
import Module from './page/common/module';
import Icon from './page/common/Icon';
import CheckboxRadio from './page/common/CheckboxRadio';
import DropdownPage from './page/common/DropdownPage';
import TabsPage from './page/common/TabsPage';
import TreePage from './page/common/TreePage';
import TooltipPage from './page/common/TooltipPage';
import MenuPage from './page/common/MenuPage';
import TextTypePage from './page/common/TextTypePage';
import DatePickerPage from './page/common/DatePickerPage';
import ModalPage from './page/common/ModalPage';
import InputModule from './page/common/Input';
import BasicForm from './page/form/BasicForm';
import ComplexForm from './page/form/ComplexForm';
import BasicList from './page/list/BasicList';
import StandardList from './page/list/StandardList';
import CardList from './page/list/CardList';
//搜索列表页
import SearchArticleList from './page/list/SearchArticleList';
import SearchProductList from './page/list/SearchProductList';
import SearchAppList from './page/list/SearchAppList';
//异常页
import Exception403 from './page/exception/403';
import Exception404 from './page/exception/404';
import Exception500 from './page/exception/500';
//结果页
import Success from "./page/result/Success";
import Fail from "./page/result/fail";
import Committing from "./page/result/committing";
//个人页
import UserInfo from "./page/user/UserInfo";
import UserSet from "./page/user/UserSet";
import SelectPage from "./page/common/SelectPage";

const SubMenu = Menu.SubMenu;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menuState: true,
            currAddress: '',
            message: {
                type: "success",
                state: "hide",
                content: "这里是App的消息"
            }
            // message: {
            //     type: 'error',
            //     state: 'hide',
            //     content: '这里是App的消息'
            // }
        };
    }
    toggleMenu = () => {
        this.setState({
            menuState: !this.state.menuState
        });
    }
    // 递归渲染菜单
    renderMenu = (menuMap) => {
        return menuMap.map((item, idx) => {
            if (item.subMenu) {
                return (<SubMenu key={item.url} 
                            model={this.state.menuState?'show':'hide'} 
                            defaultOpenKeys = {this.state.currAddress.indexOf(item.url)!=-1?true:false}
                            title={<span><i className={`icon ${item.icon}`} /> < span > {
                            item.name
                        } < /span></span >
                    } > {
                        this.renderMenu(item.subMenu)
                    } <
                    /SubMenu>);
            }
            return (<NavLink key={item.url} to={item.url} replace>
                        <Menu.Item key={item.url}
                            defaultSelectedKeys={this.state.currAddress.indexOf(item.url)!=-1?true:false}>
                            {item.icon?(<i className={`icon ${item.icon}`} />):''}
                            <span>{item.name}</span>
                        </Menu.Item>
                    </NavLink>);
        });
    }
    componentWillMount() {
        this.setState({
            currAddress: window.location.href
        });
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                currAddress: window.location.href
            });
        });
    }
    render() {
        return (
            <Router>
                <div className="screen">
                    <div className={`menu-box ${this.state.menuState?'show':'hide'}`}>
                        <div className="menu-logo">
                            <img src="/resouce/logo.png" alt="logo" />
                            <span>simpleUI</span>
                        </div>
                        <Menu theme="dark" model={this.state.menuState?'show':'hide'}>
                            {this.renderMenu(menuMap)}
                        </Menu>
                    </div>
                    <div className="layout">
                        <Header toggleMenu={this.toggleMenu.bind(this)} />
                        <div className="layout-content">
                            <Route exact={true} path="/common/module" component={Module}></Route>
                            <Route exact={true} path="/common/icon" component={Icon}></Route>
                            <Route exact={true} path="/common/date-picker" component={DatePickerPage}></Route>
                            <Route exact={true} path="/common/checkbox-radio" component={CheckboxRadio}></Route>                            
                            {/*Dropdown*/}
                            <Route exact={true} path="/common/dropdown" component={DropdownPage}></Route>
                            {/*Tabs*/}
                            <Route exact={true} path="/common/tabs" component={TabsPage}></Route>                            
                            {/*Tree*/}
                            <Route exact={true} path="/common/tree" component={TreePage}></Route>
                            {/*Tooltip*/}
                            <Route exact={true} path="/common/tooltip" component={TooltipPage}></Route>
                            {/*Menu*/}
                            <Route exact={true} path="/common/menu" component={MenuPage}></Route>
                            {/*TextType*/}
                            <Route exact={true} path="/common/textType" component={TextTypePage}></Route>
                            {/* Modal */}
                            <Route exact={true} path="/common/modal" component={ModalPage}></Route>
                            {/* Input */}
                            <Route exact={true} path="/common/input" component={InputModule}></Route>
                            {/* Select */}
                            <Route exact={true} path="/common/SelectPage" component={SelectPage}></Route>
                            {/* form */}
                            <Route exact={true} path="/form/basic-form" component={BasicForm}></Route>
                            <Route exact={true} path="/form/complex-form" component={ComplexForm}></Route>
                            {/* basic-list */}
                            <Route exact={true} path="/list/basic-list" component={BasicList}></Route>
                            {/* standard-list */}
                            <Route exact={true} path="/list/standard-list" component={StandardList}></Route>
                            {/* card-list */}
                            <Route exact={true} path="/list/card-list" component={CardList}></Route>
                            {/* search-list */}
                            <Route exact={true} path="/list/articles" component={SearchArticleList}></Route>
                            <Route exact={true} path="/list/products" component={SearchProductList}></Route>
                            <Route exact={true} path="/list/apps" component={SearchAppList}></Route>
                            <Route exact={true} path="/exception/403" component={Exception403}></Route>
                            <Route exact={true} path="/exception/404" component={Exception404}></Route>
                            <Route exact={true} path="/exception/500" component={Exception500}></Route>
                            {/*结果页*/}
                            <Route exact={true} path="/result/success" component={Success}></Route>
                            <Route exact={true} path="/result/fail" component={Fail}></Route>
                            <Route exact={true} path="/result/committing" component={Committing}></Route>
                            {/*个人页*/}
                            <Route exact={true} path="/user/userInfo" component={UserInfo}></Route>
                            <Route exact={true} path="/user/userSet" component={UserSet}></Route>
                        </div>
                    </div>
                    <Message
                        type={this.state.message.type}
                        state={this.state.message.state}
                        content={this.state.message.content}
                    />
                </div>
            </Router>
        );
    }
}
export default App;