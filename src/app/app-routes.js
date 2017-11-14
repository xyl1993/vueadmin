const FullLayout = ()=>import('./containers/full-layout/full-layout');
// import SimpleLayout from './containers/simple-layout/simple-layout';
//懒加载
const SimpleLayout = ()=>import('./containers/simple-layout/simple-layout');

/**
 * 工作台目录模块 start
 */
//problemClue模块
import ProblemClueRoutes from './views/problemClue/problem-clue-routes';
/**
 * 工作台目录模块 end
 */

//pages模块
//登陆注册404等额外的页面
import PagesLayout from './views/pages/pages-routes';

let routes = [
  { 
    path: '/',
    component: FullLayout,
    name:'问题线索管理',
    children: [
        ...ProblemClueRoutes
    ] 
  },
  { 
    path: '/pages',
    component: SimpleLayout,
    children: [
        ...PagesLayout
    ] 
  }
]
export default routes