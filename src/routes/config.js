// import BasicLayout from '../layout/BasicLayout';
import Index from '../pages/index';
import Home from '../pages/home';
import User from '../pages/user';
import Hook from '../pages/hook';
import Tab from '../pages/tab/index';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    routes: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/user/:id',
        name: 'user',
        component: User,
      },
      {
        path: '/hook',
        name: 'hook',
        component: Hook,
      },
      {
        path: '/tab',
        name: 'tab',
        component: Tab,
      }
    ]
  }
]

export default routes;