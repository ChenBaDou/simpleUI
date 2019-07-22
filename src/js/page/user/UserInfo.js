import React from "react";
import {
    Row,
    Col
} from "../../../components/Grid/Grid";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Result from "../../../components/Result/Result";
import NavTab from "../../../components/NavTab/NavTab";
import Footer from "../../../components/layout/Footer/Footer.js";
// import NavContents from '../../../components/NavTab/NavContents';
import "../../../scss/pageLayout/userInfo.scss";

const NavContents = NavTab.NavContents;

const zhiyeList = [{
    icon: "icon-zhiye",
    content: "UI设计师"
}, {
    icon: "icon-bumen",
    content: "某某平台-某某设计部-UI"
}, {
    icon: "icon-dizhi",
    content: "北京市朝阳区"
}];
const biaoqianList = [{
    content: "设计语言"
}, {
    content: "辣妹子"
}, {
    content: "大长腿"
}, {
    content: "仙仙女神"
}, {
    content: "书香门第"
}];
const tuanduiList = [{
    imgUrl: "../../../resouce/user.png",
    content: "美少女设美少女设美少女设…"
}, {
    imgUrl: "../../../resouce/user.png",
    content: "苦逼程苦逼程苦逼程"
}, {
    imgUrl: "../../../resouce/user.png",
    content: "你丫才美工"
}, {
    imgUrl: "../../../resouce/user.png",
    content: "神器在此"
}, {
    imgUrl: "../../../resouce/user.png",
    content: "字由字在"
}, {
    imgUrl: "../../../resouce/user.png",
    content: "自由奔放组"
}, {
    imgUrl: "../../../resouce/user.png",
    content: "撩设高手"
}, {
    imgUrl: "../../../resouce/user.png",
    content: "御姐教文…"
}];
const navs = [{
    name: "文章",
    number: "8",
    content: "1111111111111111",
    index: 0
}, {
    name: "项目",
    number: "18",
    content: "2222222222",
    index: 1
}, {
    name: "应用",
    number: "28",
    content: "3333333333333333",
    index: 2
}];
const tabs = ["文章(1)", "项目(2)", "应用(3)"];

function callback(key) {
    console.log(key);
}

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            activeKey: 0
        };
    }

    setActvieKeyFn(e) {
        this.setState({
            activeKey: e
        });
    }

    render() {
        let biaoqians, navContent;
        biaoqians = (
            <ul className="layout-button">
                <li>

                    {biaoqianList.map((item, key) => {
                        return (
                            <span key={key}>
                                    <Button>{item.content}</Button>
                                </span>
                        );
                    })
                    }
                    <span className="biaoqian-add">
                        <Button>＋</Button>
                    </span>
                </li>
            </ul>
        );

        return (
            <div>
                <Row justify="space-between">
                    <Col span="9">
                        <div className="info-left-touxiang">
                            <Result imgUrl="../resouce/user.png" text="Thomas Hall" resultTxt="这个世界需要你"
                                    showBtn={false}></Result>
                        </div>
                        <div className="info-left-zhiye">
                            {
                                zhiyeList.map((item, key) => {
                                    return (
                                        <Row justify key={key}>
                                            <Col span="2">
                                                <i className={"icon " + item.icon}></i>
                                            </Col>
                                            <Col span="22">
                                                {item.content}
                                            </Col>
                                        </Row>
                                    );
                                })
                            }
                        </div>
                        <div className="info-left-biaoqian">
                            <span className="biaoqian">标签</span>
                            <Card cardBody={biaoqians}></Card>
                        </div>
                        <div className="info-left-tuandui">
                            <span className="tuandui">团队</span>
                            <Row justify="space-between">
                                {
                                    tuanduiList.map((item, key) => {
                                        return (
                                            <Col span="10" key={key}>
                                                <img src={item.imgUrl} alt="" className="tuandui-touxiang"/>
                                                <span className="tuandui-person">{item.content}</span>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                    <Col span="15">
                        <div className="info-right">
                            <NavTab tabPosition="top" defaultActiveKey={0} disabledKey={1}>
                                {
                                    navs.map((item, key) => {
                                        return (

                                            <NavContents activeKey={this.state.activeKey}
                                                         tab={item.name + "(" + item.number + ")"} key={item.index}>
                                                {
                                                    [1, 2, 3, 4].map((item) => {
                                                        return (
                                                            <div className="cur-content-list" key={item}>
                                                                <div className="title">
                                                                    <span>啥的老公撒娇了的广东省{this.state.activeKey} </span>
                                                                    <Button type='primary' round>置顶</Button>
                                                                </div>
                                                                <div className="zhiye">
                                                                    <Button>语言</Button>
                                                                    <Button>语言</Button>
                                                                </div>
                                                                <div className="text">啥的老公撒娇了的广东省管理第三个拉三等奖格拉斯加告诉大家更垃圾啊噶个
                                                                    ，三大感觉拉杆夹，爱上大家来噶
                                                                    十多个家连锁店，谁打过来尬鸡蛋干，阿萨德古
                                                                    拉结果拉十多个的撒狗粮收到几个啦记录sad沈杜公路sad结果拉三季度感觉。dsag，熬过来
                                                                </div>
                                                                <div className="time">
                                                                    <img src={require("../../../resouce/user.png")}
                                                                         alt=""/>
                                                                    <span className="blue-txt"> 公孙仲谋 </span>
                                                                    <span>发布在 </span>
                                                                    <span className="blue-txt"> httpS://fuqian.la</span>
                                                                    <span className="dayTime"> 2018-11-12 13:49</span>
                                                                </div>
                                                                <div className="count">
                                                                    <ul>
                                                                        <li><i
                                                                            className="icon icon-shoucang-xianxing"></i>104
                                                                        </li>
                                                                        <li><i
                                                                            className="icon icon-dianzan-xianxing"></i>122
                                                                        </li>
                                                                        <li><i className="icon icon-pinglun"></i>104
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </NavContents>
                                        );
                                    })
                                }
                            </NavTab>
                        </div>
                    </Col>
                </Row>
                <Footer text="©2019 simpleUI"></Footer>
            </div>
        );
    }
}

export default UserInfo;