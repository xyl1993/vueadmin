const RegistrationLayout = ()=>import('./clue-registration');
const ManagementLayout = ()=>import('./clue-management');
const ToManageLayout = ()=>import('./clue-toManage');
const listLayout = ()=>import('./clue-list');

export default [{
    path: '/registration',
    component:RegistrationLayout,
    name:'问题线索登记'
},{
    path: '/clueList',
    component:listLayout,
    name:'问题线索列表'
},{
    path: '/clueManagement',
    component:ManagementLayout,
    name:'问题线索处置呈批'
},{
    path: '/toManage',
    component:ToManageLayout,
    name:'线索处置呈批'
}]