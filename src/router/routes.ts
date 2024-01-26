import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage/HomeIndex.vue') },
      { path: 'login', component: () => import('pages/HomePage/HomeLogin.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/Dashboard/DashboardIndex.vue') },
      { path: 'my-clients', component: () => import('pages/Dashboard/MyClients.vue') },
      { path: 'create-invoice', component: () => import('pages/Dashboard/CreateInvoice.vue') },
      { path: 'cash-withdraw', component: () => import('pages/Dashboard/CashWithdraw.vue') },
      { path: 'community-forum', component: () => import('pages/Dashboard/CommunityForum.vue') },
      { path: 'settings', component: () => import('pages/Dashboard/UserSetting.vue') },
    ],
  },
  {
    path: '/blog',
    component: () => import('layouts/BlogPostLayout.vue'),
    children: [
      { path: '', component: () => import('pages/BlogPost/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
