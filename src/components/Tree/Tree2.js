import React from 'react';
import './Tree2.scss';

let allDataKey = '',
    allObjKey = '',
    pageFlag = '';
/**
 * Tree2                  组件所传属性描述
 * treeData               所有数据
 * iconclick              是否有加减的折起标志   true false
 * canSelected            是否有勾选框      true false
 * clickNodeGetInfo       自定义事件获取信息     function
 */
class Tree2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            node: props.treeList,
            treeData: this.setPermTreeData({
                //产品列表数据
                permList: props.treeData,
                //父级节点id
                parendId: null,
                canSelected: props.canSelected,
                dataKey:'parentCode',
                objKey:'code',
            }),
        }
        // console.log(this.state.treeData);
    }
    //独立的方法
    /**
     * 将资源列表数据设置成资源树可用的数据
     * @param permList:
     * @param parendId:父级节点id
     * @param canSelected
     * @param hasContextmenu
     * @returns {*}
     */
    setPermTreeData({
                        //资源列表数据
                        permList = [],
                        //父级节点id
                        parendId = "",
                        //是否显示选择框并提供选择功能
                        canSelected = true,
                        //是否有右键菜单功能
                        hasContextmenu = true,

                        dataKey = '',
                        objKey = '',
                        flag =''

                    }){

        allDataKey = dataKey;
        allObjKey = objKey;
        pageFlag = flag;

        return this.arrToJson({
            permList: permList,
            parendId: parendId,
            canSelected: canSelected,
            hasContextmenu: hasContextmenu,
            dataKey: allDataKey,
            objKey: allObjKey
        });
    }
    /**
     * 资源树节点的列表转为json层级数据
     * @param permList:资源节点列表
     * @param parendId:父级节点id
     * @param canSelected
     * @param hasContextmenu
     */
    arrToJson({
                  //资源节点列表
                  permList = [],
                  //父级节点id
                  parentId = "",
                  //是否显示选择框并提供选择功能
                  canSelected = true,
                  //是否有右键菜单功能
                  hasContextmenu = false,
                  dataKey = allDataKey,
                  objKey = allObjKey
              }){
        let result = [];
        let data = Object.assign([], permList);
//                for(var i = data.length -1; i>=0; i--){
        for (var i = data.length; i--;) {
            var dataItem = data[i];
            if(dataItem[dataKey] == parentId){
                dataItem.children = [];
                dataItem.isLeaf = false;
                dataItem.canSelected = canSelected;
                dataItem.isSelected = false;
                dataItem.isPartSelected = false;
                dataItem.isOpen = dataItem.isOpen || false;
                dataItem.isCur = dataItem.isCur || false;
                dataItem.hasContextmenu = hasContextmenu;
                dataItem.showContextmenu = false;
                data.splice(i,1);
                result.push(dataItem);
            }
        }
        for (let i = 0; i < result.length; i++) {
            let resItem = result[i];
            resItem.children = this.arrToJson({
                permList: data,
                parentId: resItem[objKey],
                canSelected: canSelected,
                hasContextmenu: hasContextmenu,
                dataKey: allDataKey,
                objKey: allObjKey
            });
            if(resItem.children.length <= 0){
                resItem.isLeaf = true;
            }
        }
        result.reverse();
        return result;
    }
    /**
     * 根据角色拥有的资源，将资源列表数据设置成相应的状态
     * @param permList: 全部资源
     * @param rolePermList：角色拥有资源的
     * @returns {Array}
     */
    setPermListDataByRole({
                              permList=[],
                              rolePermList=[]
                          }){
        for (let i = 0; i < permList.length; i++) {
            let permItem = permList[i];
//                    for (let j = _this.rolePermList.length-1; j >= 0; j--) {
            for (var j = rolePermList.length; j--;) {
                let rolePermItem = rolePermList[j];
                if(rolePermItem.permId == permItem.permId){
                    permItem.isSelected = true;
                    rolePermList.splice(j,1);
                }
            }
        }
        // _this.setPermTreeData();
        return permList;
    }
    /**
     * 获取多级json数据中指定id的选项的数据
     * @param permTreeData: 资源树json层级数据
     * @param id:需要找到节点的id
     * @returns {*}返回找到的节点，没有找到为null
     */
    getNodeById(permTreeData, id){
        for (let i = 0; i < permTreeData.length; i++) {
            let permTreeItem = permTreeData[i];
            if(permTreeItem.id == id){
                return permTreeItem;
            }
            if(permTreeItem.children.length > 0){
                let resPermTreeItem = this.getNodeById(permTreeItem.children, id);
                if(resPermTreeItem){
                    return resPermTreeItem;
                }
            }
        }
        return null;
    }
    /**
     * 获取多级json数据中指定id的选项的数据
     * @param permTreeData: 资源树json层级数据
     * @param id:需要找到节点的id
     * @returns {*}返回找到的节点，没有找到为null
     */
    getNodeByCode(permTreeData, id){
        for (let i = 0; i < permTreeData.length; i++) {
            let permTreeItem = permTreeData[i];
            if(permTreeItem.id == id){
                return permTreeItem;
            }
            if(permTreeItem.children.length > 0){
                let resPermTreeItem = this.getNodeByCode(permTreeItem.children, id);
                if(resPermTreeItem){
                    return resPermTreeItem;
                }
            }
        }
        return null;
    }
    /**
     * 设置指定资源树的node指定key的值
     * @param node：需要设置值的对像，json对象
     * @param key：key值
     * @param val：需要设置为的值
     */
    setPermNodeValByKey(node, key, val){
        node[key] = val;
        // node.isSelected = node.isSelected ? false : true;
        //不知道为什么要写这三条代码，但是如果不写的话会出问题，比如：复选项的高亮状态不会发生改变，而isSelected的值已经发生了改变

        // if(pageFlag == 'productCenter'){
        //     let name = node.name;
        //     node.name = "";
        //     node.name = name;
        // }else{
        //     let permName = node.permName;
        //     node.permName = "";
        //     node.permName = permName;
        // }
    }
    /**
     * 资源树选中/取消选中事件
     * @param permTree：资源树json层级数据
     * @param node：被操作的节点
     */
    nodeselect(permTree, node){
        if(!node.canSelected){
            return;
        }
        let nodeData = this.getNodeById(permTree, node.id);
        let nodeSelected = !node.isSelected;
        this.setPermNodeValByKey(nodeData, 'isSelected', nodeSelected);
        this.setPermNodeValByKey(nodeData, 'isPartSelected', false);

        //父节点的状态同时改变
        this.parentNodeSelect(permTree, nodeData);
        //所有子节点选中/或都取消选中
        this.childrenNodeSelect(nodeData, nodeSelected);
    }
    /**
     * 资源树选中,一般只用在获取角色拥有资源列表后设置默认选中状态等类似情况下使用
     * @param permTree：资源树json层级数据
     * @param node：被操作的节点
     */
    nodeselectTrue(permTree, node){
        if(node == null) return;
        let nodeData = this.getNodeById(permTree, node.id);
        let nodeSelected = true;
        if(!nodeData.isLeaf){
            return;
        }
        this.setPermNodeValByKey(nodeData, 'isSelected', nodeSelected);
        this.setPermNodeValByKey(nodeData, 'isPartSelected', false);

        //父节点的状态同时改变
        this.parentNodeSelect(permTree, nodeData);
        //所有子节点选中/或都取消选中
        this.childrenNodeSelect(nodeData, nodeSelected);
    }
    parentNodeSelect(permTree, node){//当前结点的父结点
        let parentNode = this.getNodeById(permTree, node.parentId);
        if (parentNode) {
            let allChildrenSelect = true;
            let partOfChildrenSelect = false;
            for (let i = 0; i < parentNode.children.length; i++) {
                let nodeItem = parentNode.children[i];
                if (!nodeItem.isSelected) {
                    allChildrenSelect = false;
                    //break;
                }
                if(nodeItem.isSelected || nodeItem.isPartSelected){
                    partOfChildrenSelect = true;
                    //break;
                }
            }
            if(allChildrenSelect){
                partOfChildrenSelect = false;
            }
            this.setPermNodeValByKey(parentNode, 'isSelected', allChildrenSelect);
            this.setPermNodeValByKey(parentNode, 'isPartSelected', partOfChildrenSelect);
            this.refreshTreeData(permTree);
            if(parentNode.parentCode){
                this.parentNodeSelect(permTree, parentNode);
            }
        }
    }
    /**
     * 所有子节点选中/或都取消选中
     * @param nodeList：子节点列表
     * @param val：选中状态：true/false
     */
    childrenNodeSelect(nodeList, val){
        if(nodeList.children.length){
            for (let i = 0; i < nodeList.children.length; i++) {
                let nodeItem = nodeList.children[i];
                this.setPermNodeValByKey(nodeItem, 'isSelected', val);
                // 递归寻找当前元素的所有子元素
                this.childrenNodeSelect(nodeItem,val);
            }
        }
    }
    /**
     * 资源文件夹打开与关闭事件,资源树展开收起
     * @param permTree：资源树json层级数据
     * @param node：展开收起的结点
     */
    nodetoggle(permTree, node){
        let nodeData = this.getNodeById(permTree, node.id);
        this.setIsCurStyle(this.state.treeData, node.id);
        if(!node.children.length) {
            this.refreshTreeData(permTree);
            return;
        }
        this.setPermNodeValByKey(nodeData, 'isOpen', !node.isOpen);
        this.refreshTreeData(permTree);
    }
    /**
     * 更改点击的节点颜色
     * @param permTree：资源树json层级数据
     * @param id：点击的节点的id
     */
    setIsCurStyle(permTree, id){
        for (let i = 0; i < permTree.length; i++) {
            let permTreeItem = permTree[i];
            if(permTreeItem.id === id){
                permTreeItem.isCur = true;
            }else{
                permTreeItem.isCur = false;
            }
            if(permTreeItem.children.length > 0){
                this.setIsCurStyle(permTreeItem.children, id);
            }
        }
    }
    /**
     * 显示菜单
     * @param permTree：资源树json层级数据
     * @param node：显示菜单的结点
     */
    contextmenuShow(permTree, node){
        $(document).trigger("click.PermTreeContextmenu");
        this.allContextmentHide(permTree);
        let nodeData = this.getNodeById(permTree, node.id);
        this.setPermNodeValByKey(nodeData, 'showContextmenu', true);
        $(document).on("click.PermTreeContextmenu", function(){
            this.setPermNodeValByKey(nodeData, 'showContextmenu', false);
            $(document).off("click.PermTreeContextmenu");
        });
    }
    /**
     * 隐藏所有的右键菜单
     * @param permTree
     */
    allContextmentHide(permTree){
        for (let i = 0; i < permTree.length; i++) {
            let permTreeItem = permTree[i];
            if(permTreeItem.showContextmenu){
                this.setPermNodeValByKey(permTreeItem, 'showContextmenu', true);
            }
            if(permTreeItem.children.length > 0){
                this.allContextmentHide(permTreeItem.children)
            }
        }
    }
    /**
     * 获取已造节点的资源编码
     * @param permTree：资源树json层级数据
     */
    getSelectedNodeCode(permTree){
        let result = [];
        for (let i = 0; i < permTree.length; i++) {
            let permTreeItem = permTree[i];
            //if(permTreeItem.isSelected && permTreeItem.isLeaf){
            if(permTreeItem.isSelected || permTreeItem.isPartSelected){
                result.push(permTreeItem.id);
            }
            if(permTreeItem.children.length > 0){
                result = result.concat(this.getSelectedNodeCode(permTreeItem.children));
            }
        }
        return result;
    }
    /**
     * 产品中心展开当前修改的产品节点父级节点
     */
    setParentNodeOpen(productTree,curNode,dataSource){
        for(let i = 0 ; i < productTree.length ; i++){
            let item = productTree[i];

            if( item.code == curNode.parentCode ){  // 找到当前数据对应的节点，然后反相递归，寻找该节点的向上所有父节点然后展开其父节点
                this.setPermNodeValByKey(item, 'isOpen', true);
                if(item.code){ // 当code == 0，说明数据循环到了最顶层数据
                    this.setParentNodeOpen(dataSource,item,dataSource);
                }
            }
            if( item.children.length ){
                this.setParentNodeOpen(item.children,curNode,dataSource);
            }

        }
    }
    /**
     * 产品页面根据当前节点字段属性获取整个json对象
     */
    setCurSelectedNode(productTree,curCode){
        for(let i = 0 ; i < productTree.length ; i++){
            let item = productTree[i];

            if(item.code == curCode){
                return item;
            }
            if( item.children.length ){
                let curItem = this.setCurSelectedNode(item.children,curCode);
                if(curItem){
                    return curItem;
                }
            }
        }
        return null;
    }

    //组件上的事件
    /**
     * 更新react对应数据
     */
    refreshTreeData(productTree){
        this.setState({
            treeData:productTree
        });
    }
    /**
     * 触发展开收起事件
     */
    clickLabel(node, e){
        // console.log('点击加号减号 节点名称');
        this.nodetoggle(this.state.treeData, node);
        this.props.clickNodeGetInfo && this.props.clickNodeGetInfo(node);
    }
    /**
     * 产品树选中事件
     */
    selectNode(node, e){
        // console.log('点击框是否勾选');
        e.stopPropagation();
        this.nodeselect(this.state.treeData, node);
    }

    /**
     * 产品文件夹打开与关闭事件,产品树展开收起
     */
    folderToggle(node, e){
        // console.log('点击文件夹');
        this.nodetoggle(this.state.treeData, node);
    }

    permTree(treeData) {
        return (
            <ul className="perm_tree">
                {
                    treeData.map((node, key) => {
                        return (
                            <li className="perm_tree_item" key={key}>
                                <div className={'tree_node'+(node.isCur ? ' cur_node' : '')}>
                                    {
                                        this.props.iconclick &&
                                        <em className={'tree_status'+
                                        (node.children.length ? ' show' : '')+(node.isOpen ? ' hide' : '')}
                                        onClick={(e)=>{this.clickLabel(node, e)}}
                                        ></em>
                                    }
                                    {
                                        node.canSelected &&
                                        <em className={'check'+
                                        (node.isSelected ? ' on' : '')+(node.isPartSelected ? ' part_on' : '')}
                                            onClick={(e)=>{this.selectNode(node, e)}}
                                        ></em>
                                    }
                                    <div className={'folder'+(node.isOpen ? ' open': '')}
                                    onClick={(e)=>{this.folderToggle(node, e)}}
                                    >
                                        {
                                            (node.hasContextmenu && node.showContextmenu) &&
                                            <div className="contextmenu">
                                                {/*部分节点未有此功能记得兼容优化*/}
                                                <div className="menu_item">新增子节点</div>
                                                <div className="menu_item">删除</div>
                                            </div>
                                        }
                                    </div>
                                    <div className="perm_name" onClick={(e)=>{this.clickLabel(node, e)}}>{node.name}</div>
                                </div>
                                {node.isOpen && this.permTree(node.children)}
                            </li>
                        )

                    })
                }
            </ul>
        )
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillReceiveProps(nextProps) {
    }

    render(){
        return (
            <div>{this.permTree(this.state.treeData)}</div>
        )
    }
}

export default Tree2;