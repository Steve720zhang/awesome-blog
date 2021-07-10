const routes: any[] = [
  {
    path: '/',
    component: '@/pages/index',
    redirect: '/homepage',
  },
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      {
        path: '/homepage',
        exact: true,
        component: '@/pages/homepage/index',
      },
    ],
  },
];

export default routes;
