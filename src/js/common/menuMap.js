const menuMap = [
    // {
    //     name: '首页',
    //     icon: 'icon-liebiaoye',
    //     url: '/index'
    // }, 
    {
        name: '公共模块',
        icon: 'icon-seban',
        url: '/common',
        subMenu: [{
            name: 'Button 按钮',
            url: '/common/module'
        }, {
            name: 'Icon 图标',
            url: '/common/icon'
        }, {
            name: 'DatePicker 日期选择器',
            url: '/common/date-picker'
        }, {
            name: 'Checkbox Radio 多选/单选',
            url: '/common/checkbox-radio'
        }, {
            name: 'Dropdown 下拉菜单',
            url: '/common/dropdown'
        }, {
            name: 'Tabs 标签页',
            url: '/common/tabs'
        }, {
            name: 'Tree 树形控件',
            url: '/common/tree'
        }, {
            name: 'Tooltip 文字提示',
            url: '/common/tooltip'
        }, {
            name: 'Menu 导航菜单',
            url: '/common/menu'
        }, {
            name: 'TextType 文字样式',
            url: '/common/textType'
        }, {
            name: 'Modal 对话框',
            url: '/common/modal'
        }, {
            name: 'Input 输入框',
            url: '/common/input'
        }, {
            name: 'Select',
            url: '/common/SelectPage'
        }]
    }, {
        name: '异常页',
        icon: 'icon-yichangye',
        url: '/exception',
        subMenu: [{
            name: '403无权访问',
            url: '/exception/403'
        }, {
            name: '404访问的页面不存在',
            url: '/exception/404'
        }, {
            name: '500服务器出错了',
            url: '/exception/500'
        }]
    }, {
        name: '表单页',
        icon: 'icon-biaodanye',
        url: '/form',
        subMenu: [{
            name: '基础表单',
            url: '/form/basic-form'
        }, {
            name: '高级表单',
            url: '/form/complex-form'
        }]
    }, {
        name: '结果页',
        icon: 'icon-jieguoye',
        url: '/result',
        subMenu: [{
            name: '成功页',
            url: '/result/success'
        }, {
            name: '失败页',
            url: '/result/fail'
        }, {
            name: '提交中',
            url: '/result/committing'
        }]
    }, {
        name: '列表页',
        icon: 'icon-liebiaoye',
        url: '/list',
        subMenu: [{
            name: '查询表格',
            url: '/list/basic-list'
        }, {
            name: '标准列表',
            url: '/list/standard-list'
        }, {
            name: '卡片列表',
            url: '/list/card-list'
        }, {
            name: '搜索列表（文章）',
            url: '/list/articles'
        }, {
            name: '搜索列表（项目）',
            url: '/list/products'
        }, {
            name: '搜索列表（应用）',
            url: '/list/apps'
        }]
    }, {
        name: '个人页',
        icon: 'icon-geren',
        url: '/user',
        subMenu: [{
            name: '个人中心',
            url: '/user/userInfo'
        }, {
            name: '个人设置',
            url: '/user/userSet'
        }]
    }
];

export default menuMap;