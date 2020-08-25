import BasicLayout from '../layout/BasicLayout';
import Index from '../pages/index';
import Home from '../pages/home';
import User from '../pages/user';

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
      }
    ]
  }
]

export default routes;