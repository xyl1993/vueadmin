export const asideTree =  {
    roleFun:[
        {
            "name": "问题线索管理",
            "iconCls": "el-icon-message",
            "path": "/clue",
            "children": [
                { path: '/clueList', name: '问题线索列表' },
                { path: '/registration', name: '问题线索登记' },
                { path: '/clueManagement', name: '问题线索处置呈批' }
            ]
        },
        {
            "name": "系统管理",
            "iconCls": "el-icon-menu",
            "path": "/system",
            "children": [
                { path: '/userList', name: '人员管理' },
                { path: '/roleList', name: '角色管理' }
            ]
        }
    ]
};
