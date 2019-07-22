import React from 'react';
import './Tree.scss';

/**
 * Tree                   组件所传属性描述
 * treeList               树的所有数据 arr
 * onClick                点击树的执行方法   函数
 * loadDataAction         动态加载数据   函数
 */
class Tree extends React.Component {
    constructor(props){
        super(props);
        this.handleClick      = this.handleClick.bind(this);

        this.state = {
            node: props.treeList,
        }
    }

    handleClick(e,item) {
        let Oi = e.target.parentNode.childNodes[0]
        ;
        // Oi.style.transform = Oi.style.transform == "rotate(-90deg)" ? "rotate(0deg)" : "rotate(-90deg)";
        this.digui(this.state.node,item);
        this.props.onClick && this.props.onClick(item);
        this.props.loadDataAction && this.props.loadDataAction(item);
    }

    checkAction(item){
        item.checked = !item.checked;
        this.setState({
            node : this.state.node
        });
        // console.log(item);
    }

    digui(node,item){
        let newNode = node;
        for(let i=0; i<newNode.length; i++){
            if(newNode[i].key == item.key){
                if(newNode[i].child){
                    if(item.open){
                        newNode[i].open = false;
                    }else{
                        newNode[i].open = true;
                    }
                }
            }else{
                if(newNode[i].child){
                    this.digui(newNode[i].child,item);
                }
            }
            console.log(newNode);
            this.setState({
                node : newNode
            });
        }
    }

    itemTitle(item){
        // 这个是返回title，因为有时候是点击一个链接，所以设置了两种情况，如果node节点里面有component这个节点，那就设置成可以点击跳转
        if(item.component){
            return (<Link to={ item.component } >
                <span className="" onClick={this.handleClick.bind(this)}>{item.title}</span>
            </Link>)
        }else{
            return (
                <span className="tree-span-title" onClick={(e)=>{this.handleClick(e,item)}}>{item.title}</span>
            )
        }
    }

    tree(child){
        let treeItem;
        // 如果有子元素
        if(child){
            // 子元素是数组的形式，把所有的子元素循环出来
            treeItem = child.map((item, key) => {
                // 同理，设置样式
                let itemStyle = {
                    paddingLeft: 20*parseInt(item.level.slice(5)-1)+'px',
                    position:'relative'
                };
                let wrapperStyle = {
                    left: 5*parseInt(item.level.slice(5)-1)+'px',
                };
                // 同理，设置➡️
                let iconChevron;
                if(item.child){
                    if(item.open){
                        iconChevron =  'icon icon-xiangxiazuocedaohang';
                    }else{
                        iconChevron =  'icon icon-xiangyouzuocedaohang';
                    }
                }else{
                    iconChevron = 'icon tree-icon';
                }
                return  (
                    <ul key={key}>
                        <li className={item.level} style={itemStyle}>
                            {   this.props.loadDataAction ?
                                (
                                    (!(item.child && item.child.length)) ?
                                        <i className={iconChevron} onClick={(e)=>{this.handleClick(e,item)}}></i> :
                                        (
                                            this.props.notice ?
                                                <i className="tree-empty">
                                                    <div className="wrapper" data-anim="base wrapper">
                                                        <div className="circle" data-anim="base left"></div>
                                                        <div className="circle" data-anim="base right"></div>
                                                    </div>
                                                </i> :
                                                <i className={iconChevron} onClick={(e)=>{this.handleClick(e,item)}}></i>
                                        )
                                ):
                                <i className={iconChevron} onClick={(e)=>{this.handleClick(e,item)}}></i>
                            }
                            {
                                this.props.type == 'check' &&
                                <em className={!item.checked ? "tree-checkbox" : "tree-checkbox checkedbox"} onClick={this.checkAction.bind(this,item)}>
                                    <i className={!item.checked ? "tree-i" : "tree-i checkedi"}></i>
                                </em>
                            }
                            {this.itemTitle(item)}
                        </li>
                        {/* 如果当前子元素还有子元素，就递归使用tree方法，把当前子元素的子元素渲染出来 */}
                        {item.open && this.tree(item.child)}
                    </ul>

                )
            })
        }
        return treeItem;
    }

    render() {
        return (
            <div className="tree">
                {/*{this.tree(this.state.node)}*/}
                {this.tree(this.props.treeList)}
            </div>
        );
    }
}

export default Tree;