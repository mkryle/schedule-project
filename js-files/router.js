import Router  from 'vue-router'

import loginPage from './components/signInPage.vue'
import adminRouter from './router-admin'
import UserRouter from './router-user'

const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    title: 'login-Page',
    component: loginPage,
  },
  {
    path: '*',
    redirect: { name: 'login' },
},
];

const routes = baseRoutes.concat(adminRouter, UserRouter);
export default new Router({
  routes,
});
