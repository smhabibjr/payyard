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
      { path: 'dashboard', component: () => import('pages/dashboardPages/DashboardPage.vue') },
      { path: 'my-clients', component: () => import('pages/dashboardPages/MyClientsPage.vue') },
      { path: 'new-invoice', component: () => import('pages/dashboardPages/NewInvoicePage.vue') },
      { path: 'cash-withdraw', component: () => import('pages/dashboardPages/CashWithdrawPage.vue') },
      { path: 'community-forum', component: () => import('pages/dashboardPages/CommunityForumPage.vue') },
      { path: 'settings', component: () => import('pages/dashboardPages/SettingsPage.vue') },
    ],
  },
  {
    path: '/blog',
    component: () => import('layouts/BlogPostLayout.vue'),
    children: [
      { path: '', component: () => import('pages/blogPost/IndexPage.vue') },
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
